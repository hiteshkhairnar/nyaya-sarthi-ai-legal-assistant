import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  AlignmentType,
  HeadingLevel,
  PageBreak,
} from "docx";
import { saveAs } from "file-saver";

interface DraftData {
  docType: string;
  parties: string;
  draftText: string;
}

export async function downloadDraftAsDocx({ docType, parties, draftText }: DraftData) {
  const lines = draftText.split("\n").filter((l) => l.trim() !== "");

  const children: Paragraph[] = [];

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith("# ")) {
      children.push(
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 },
          children: [new TextRun({ text: trimmed.replace(/^#+\s*/, ""), bold: true, font: "Times New Roman", size: 32 })],
        })
      );
    } else if (trimmed.startsWith("## ")) {
      children.push(
        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 240, after: 120 },
          children: [new TextRun({ text: trimmed.replace(/^#+\s*/, ""), bold: true, font: "Times New Roman", size: 26 })],
        })
      );
    } else if (trimmed === "---") {
      children.push(
        new Paragraph({
          spacing: { before: 120, after: 120 },
          border: { bottom: { style: "single" as any, size: 6, color: "999999", space: 1 } },
          children: [],
        })
      );
    } else if (trimmed.startsWith("_") && trimmed.endsWith("_")) {
      children.push(
        new Paragraph({
          spacing: { before: 60, after: 60 },
          children: [new TextRun({ text: trimmed.replace(/^_+|_+$/g, ""), italics: true, font: "Times New Roman", size: 20 })],
        })
      );
    } else if (trimmed.startsWith("*") && trimmed.endsWith("*")) {
      children.push(
        new Paragraph({
          spacing: { before: 60, after: 60 },
          children: [new TextRun({ text: trimmed.replace(/^\*+|\*+$/g, ""), italics: true, font: "Times New Roman", size: 20, color: "666666" })],
        })
      );
    } else {
      // Parse bold markers **text**
      const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
      const runs: TextRun[] = parts
        .filter((p) => p)
        .map((part) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return new TextRun({ text: part.slice(2, -2), bold: true, font: "Times New Roman", size: 24 });
          }
          return new TextRun({ text: part, font: "Times New Roman", size: 24 });
        });

      children.push(
        new Paragraph({
          spacing: { after: 120 },
          children: runs,
        })
      );
    }
  }

  const doc = new Document({
    styles: {
      default: {
        document: {
          run: { font: "Times New Roman", size: 24 },
        },
      },
    },
    sections: [
      {
        properties: {
          page: {
            size: { width: 11906, height: 16838 }, // A4
            margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
          },
        },
        children,
      },
    ],
  });

  const buffer = await Packer.toBlob(doc);
  const fileName = `${docType.replace(/[^a-zA-Z0-9]/g, "_")}_${new Date().toISOString().slice(0, 10)}.docx`;
  saveAs(buffer, fileName);
}
