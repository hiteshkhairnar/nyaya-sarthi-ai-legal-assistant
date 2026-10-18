import { useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, Building2, Scale, ExternalLink, Loader2, ArrowLeft, BookOpen, Users, FileText, Bookmark } from "lucide-react";

interface CaseResult {
  title: string;
  citation: string;
  court: string;
  year: string;
  summary: string;
  relevance: number;
  bench?: string;
  petitioner?: string;
  respondent?: string;
  sections?: string[];
  fullText?: string;
}

const mockResults: CaseResult[] = [
  {
    title: "Kesavananda Bharati v. State of Kerala",
    citation: "AIR 1973 SC 1461",
    court: "Supreme Court of India",
    year: "1973",
    summary: "Established the Basic Structure Doctrine — Parliament cannot amend the Constitution to alter its basic structure. This landmark decision defined the limits of constitutional amendment power under Article 368.",
    relevance: 98,
    bench: "S.M. Sikri (CJI), J.M. Shelat, K.S. Hegde, A.N. Grover, A.N. Ray, P. Jaganmohan Reddy, H.R. Khanna, K.K. Mathew, M.H. Beg, S.N. Dwivedi, A.K. Mukherjea, Y.V. Chandrachud, D.G. Palekar",
    petitioner: "His Holiness Kesavananda Bharati Sripadagalvaru",
    respondent: "State of Kerala & Anr.",
    sections: ["Article 368", "Article 13", "Article 14", "Article 19", "Article 31"],
    fullText: `JUDGMENT

The Supreme Court of India, in this landmark case decided by a 13-judge Constitutional Bench, addressed the fundamental question: Is the power of Parliament to amend the Constitution unlimited?

FACTS:
His Holiness Kesavananda Bharati, the head of the Edneer Mutt in Kerala, challenged the Kerala Land Reforms Act, 1963, as amended in 1969 and 1971, which imposed restrictions on the management and administration of religious property. The petitioner contended that the Act violated his fundamental rights under Articles 14, 19(1)(f), 25, 26 and 31 of the Constitution.

The case was referred to a larger bench to reconsider the decision in Golaknath v. State of Punjab (1967), which had held that Parliament could not amend the Constitution to take away or abridge fundamental rights.

ISSUES:
1. Whether the 24th Amendment validly enacted?
2. Whether the 25th Amendment validly enacted?
3. Whether the 29th Amendment validly enacted?
4. What is the scope of the amending power under Article 368?

HELD:
By a majority of 7:6, the Supreme Court held:

1. Parliament has wide powers to amend the Constitution, including the power to amend fundamental rights.

2. However, the amending power is not unlimited. Parliament cannot alter the "basic structure" or framework of the Constitution.

3. The Court overruled Golaknath to the extent it held that fundamental rights cannot be amended.

4. The basic structure includes:
   (a) Supremacy of the Constitution
   (b) Republican and democratic form of Government
   (c) Secular character of the Constitution
   (d) Separation of powers between the legislature, executive and judiciary
   (e) Federal character of the Constitution

5. The 24th Amendment was held valid. The 25th Amendment was held partly invalid (the word "amount" in Article 31C was struck down). The 29th Amendment was held valid.

SIGNIFICANCE:
This judgment is considered the most important decision in Indian constitutional law. The Basic Structure Doctrine has been reaffirmed in subsequent cases including Minerva Mills v. Union of India (1980), Waman Rao v. Union of India (1981), and I.R. Coelho v. State of Tamil Nadu (2007).

The doctrine serves as a check on the amending power of Parliament and ensures that the fundamental identity and character of the Constitution is preserved.`,
  },
  {
    title: "Maneka Gandhi v. Union of India",
    citation: "AIR 1978 SC 597",
    court: "Supreme Court of India",
    year: "1978",
    summary: "Expanded the scope of Article 21 — the right to life and personal liberty includes the right to live with dignity. Any law depriving personal liberty must be just, fair, and reasonable.",
    relevance: 94,
    bench: "M.H. Beg (CJI), Y.V. Chandrachud, P.N. Bhagwati, V.R. Krishna Iyer, N.L. Untwalia, S. Murtaza Fazal Ali, P.S. Kailasam",
    petitioner: "Maneka Gandhi",
    respondent: "Union of India",
    sections: ["Article 14", "Article 19", "Article 21", "Passport Act, 1967 — Section 10(3)(c)"],
    fullText: `JUDGMENT

The Supreme Court of India delivered this landmark judgment expanding the interpretation of Article 21 of the Constitution, fundamentally changing the jurisprudence on fundamental rights.

FACTS:
Maneka Gandhi's passport was impounded by the Regional Passport Officer, New Delhi, by an order dated 2nd July, 1977, under Section 10(3)(c) of the Passports Act, 1967, "in the interests of the general public." When she requested the reasons, the Government declined to furnish them "in the interest of the general public."

ISSUES:
1. Whether the right to go abroad is a part of the right to personal liberty under Article 21?
2. Whether Section 10(3)(c) of the Passports Act is violative of Article 21?
3. Whether the principles of natural justice are required to be followed before impounding the passport?

HELD:
The Court unanimously held in favour of Maneka Gandhi:

1. The right to travel abroad is a part of personal liberty under Article 21.

2. Article 21 does not merely guarantee the right against executive action unsupported by law. It also guarantees the right against legislative action that is arbitrary, unfair or unreasonable.

3. The procedure established by law under Article 21 must satisfy the requirements of Articles 14 and 19 as well. The three articles are not mutually exclusive — they form a "golden triangle."

4. Any procedure which deprives a person of life or personal liberty must be:
   (a) Right, just and fair
   (b) Not arbitrary, fanciful or oppressive
   (c) In conformity with the principles of natural justice

5. The right to be heard (audi alteram partem) is a basic requirement of natural justice and must be observed before any adverse order is passed.

SIGNIFICANCE:
This judgment revolutionised the interpretation of fundamental rights in India by:
- Overruling A.K. Gopalan v. State of Madras (1950) which had adopted a narrow interpretation of Article 21
- Establishing that Articles 14, 19 and 21 are interconnected and form a "golden triangle"
- Introducing the concept of "due process" into Indian constitutional law through Article 21
- Expanding the scope of personal liberty far beyond mere freedom from physical restraint`,
  },
  {
    title: "Vishaka v. State of Rajasthan",
    citation: "AIR 1997 SC 3011",
    court: "Supreme Court of India",
    year: "1997",
    summary: "Laid down guidelines for prevention of sexual harassment at the workplace. These guidelines were binding until the enactment of the Sexual Harassment of Women at Workplace Act, 2013.",
    relevance: 87,
    bench: "J.S. Verma (CJI), Sujata V. Manohar, B.N. Kirpal",
    petitioner: "Vishaka & Others",
    respondent: "State of Rajasthan & Others",
    sections: ["Article 14", "Article 15", "Article 19(1)(g)", "Article 21", "CEDAW"],
    fullText: `JUDGMENT

The Supreme Court of India, in this PIL, laid down binding guidelines for the prevention and redressal of sexual harassment of women at the workplace, filling the legislative vacuum in this area.

FACTS:
This case arose from the brutal gang-rape of Bhanwari Devi, a social worker (saathin) in Rajasthan, who was assaulted for trying to prevent a child marriage as part of a government programme. Despite the severity of the crime, the trial court acquitted the accused. A PIL was filed by women's rights groups (Vishaka and others) seeking enforcement of fundamental rights of working women.

ISSUES:
1. Whether sexual harassment at the workplace amounts to violation of fundamental rights under Articles 14, 15, 19(1)(g), and 21?
2. In the absence of specific legislation, what guidelines should be laid down for the protection of women against sexual harassment?

HELD:
The Court held:

1. Sexual harassment at the workplace is a clear violation of the rights of gender equality and the right to life and liberty.

2. The Court laid down detailed guidelines and norms to be observed at all workplaces, both public and private, until appropriate legislation is enacted:

   DEFINITION: Sexual harassment includes unwelcome sexually determined behaviour such as physical contact, demand or request for sexual favours, sexually coloured remarks, showing pornography, and any unwelcome physical, verbal or non-verbal conduct of sexual nature.

   PREVENTIVE STEPS: All employers/responsible persons shall take appropriate steps to prevent sexual harassment, including express prohibition and appropriate penalties.

   COMPLAINTS COMMITTEE: Employers must constitute a Complaints Committee headed by a woman, with not less than half of its members being women, and involving a third-party NGO or person familiar with the issue.

   WORKERS' INITIATIVE: Employees should be allowed to raise issues of sexual harassment at workers' meetings and other forums.

3. These guidelines are binding and enforceable in law and shall be treated as law declared by the Supreme Court under Article 141 of the Constitution.

SIGNIFICANCE:
- First instance of the Court framing detailed guidelines to fill a legislative void
- Led to the enactment of the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013
- Recognised international conventions (CEDAW) as part of domestic law in the absence of inconsistent legislation`,
  },
  {
    title: "K.S. Puttaswamy v. Union of India",
    citation: "(2017) 10 SCC 1",
    court: "Supreme Court of India",
    year: "2017",
    summary: "Unanimously held that the right to privacy is a fundamental right under Articles 14, 19, and 21 of the Constitution. Overruled earlier judgments that held otherwise.",
    relevance: 82,
    bench: "J.S. Khehar (CJI), J. Chelameswar, S.A. Bobde, R.K. Agrawal, R.F. Nariman, A.M. Sapre, D.Y. Chandrachud, S.K. Kaul, S. Abdul Nazeer",
    petitioner: "Justice K.S. Puttaswamy (Retd.) & Anr.",
    respondent: "Union of India & Others",
    sections: ["Article 14", "Article 19", "Article 21", "Aadhaar Act, 2016"],
    fullText: `JUDGMENT

A nine-judge Constitution Bench of the Supreme Court of India unanimously declared the right to privacy as a constitutionally protected fundamental right, overruling previous decisions to the contrary.

FACTS:
The case originated from challenges to the Aadhaar scheme (a biometric identity programme). During the hearing of the Aadhaar cases, a three-judge Bench referred the question of whether privacy is a fundamental right to a Constitution Bench, as two earlier decisions — M.P. Sharma v. Satish Chandra (1954, 8-judge bench) and Kharak Singh v. State of U.P. (1962, 6-judge bench) — had held that privacy was not a fundamental right.

ISSUES:
1. Whether the right to privacy is a constitutionally protected fundamental right?
2. If so, what is the source and nature of this right?

HELD:
The Court unanimously (9:0) held:

1. The right to privacy is a fundamental right protected under Part III of the Constitution, primarily flowing from Article 21 (right to life and personal liberty), with contributions from Articles 14 and 19.

2. The earlier decisions in M.P. Sharma and Kharak Singh (to the extent they held privacy is not a fundamental right) are overruled.

3. Privacy includes:
   (a) Physical or spatial privacy
   (b) Informational privacy (protection of personal data)
   (c) Privacy of choice (autonomy of personal decisions)

4. The right to privacy is not absolute. Any interference must satisfy a three-part test:
   (a) Legality — there must be a law in existence
   (b) Legitimate aim — the law must serve a legitimate state interest
   (c) Proportionality — the extent of interference must be proportionate to the need

5. Justice Chandrachud's opinion (for 4 judges) expressly recognised sexual orientation as integral to privacy and dignity, paving the way for Navtej Singh Johar v. Union of India (2018) which decriminalised homosexuality.

SIGNIFICANCE:
- Largest Constitutional Bench in over 40 years (since Kesavananda Bharati)
- Paved the way for striking down Section 377 IPC (Navtej Singh Johar, 2018) and the Aadhaar verdict (K.S. Puttaswamy II, 2018)
- Established the framework for data protection law in India (led to the Digital Personal Data Protection Act, 2023)
- Recognised informational privacy as a fundamental right in the digital age`,
  },
];

export default function CaseSearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<CaseResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedCase, setSelectedCase] = useState<CaseResult | null>(null);

  const handleSearch = () => {
    if (!query.trim()) return;
    setIsLoading(true);
    setHasSearched(true);
    setSelectedCase(null);
    setTimeout(() => {
      setResults(mockResults);
      setIsLoading(false);
    }, 1500);
  };

  if (selectedCase) {
    return (
      <AppLayout>
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Back button */}
          <button
            onClick={() => setSelectedCase(null)}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors animate-fade-up"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to search results
          </button>

          {/* Case header */}
          <div className="surface-elevated rounded-xl p-8 animate-fade-up stagger-1">
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                {selectedCase.relevance}% match
              </span>
              <span className="text-xs text-muted-foreground">{selectedCase.citation}</span>
            </div>
            <h1 className="text-2xl font-serif font-bold tracking-tight leading-tight mb-4">
              {selectedCase.title}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-3">
                <Building2 className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Court</p>
                  <p className="font-medium">{selectedCase.court}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Year</p>
                  <p className="font-medium">{selectedCase.year}</p>
                </div>
              </div>
              {selectedCase.petitioner && (
                <div className="flex items-start gap-3">
                  <Users className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">Petitioner</p>
                    <p className="font-medium">{selectedCase.petitioner}</p>
                  </div>
                </div>
              )}
              {selectedCase.respondent && (
                <div className="flex items-start gap-3">
                  <Users className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">Respondent</p>
                    <p className="font-medium">{selectedCase.respondent}</p>
                  </div>
                </div>
              )}
            </div>

            {selectedCase.bench && (
              <div className="mt-5 pt-5 border-t border-border">
                <div className="flex items-start gap-3">
                  <Scale className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Bench</p>
                    <p className="text-sm leading-relaxed">{selectedCase.bench}</p>
                  </div>
                </div>
              </div>
            )}

            {selectedCase.sections && selectedCase.sections.length > 0 && (
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1.5">
                  <Bookmark className="h-3 w-3" />
                  Relevant Provisions
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedCase.sections.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Summary */}
          <div className="surface-elevated rounded-xl p-8 animate-fade-up stagger-2">
            <h2 className="text-lg font-serif font-semibold mb-3 flex items-center gap-2">
              <FileText className="h-4 w-4 text-muted-foreground" />
              Summary
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{selectedCase.summary}</p>
          </div>

          {/* Full judgment */}
          {selectedCase.fullText && (
            <div className="surface-elevated rounded-xl p-8 animate-fade-up stagger-3">
              <h2 className="text-lg font-serif font-semibold mb-4 flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-muted-foreground" />
                Full Judgment
              </h2>
              <div className="text-sm leading-[1.8] whitespace-pre-wrap text-foreground/90">
                {selectedCase.fullText}
              </div>
            </div>
          )}
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="animate-fade-up">
          <h1 className="text-2xl font-serif font-bold tracking-tight">Case Law Search</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Search Supreme Court, High Court & Tribunal judgments with AI-powered context matching.
          </p>
        </div>

        <div className="animate-fade-up stagger-1">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder="Search cases, e.g. 'fundamental rights under Article 21'"
                className="pl-10"
              />
            </div>
            <Button onClick={handleSearch} disabled={isLoading || !query.trim()}>
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Search"}
            </Button>
          </div>
        </div>

        {!hasSearched && (
          <div className="text-center py-16 animate-fade-up stagger-2">
            <Scale className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
            <h2 className="font-serif text-lg font-semibold mb-1">Search Indian Case Law</h2>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Enter a legal topic, section number, or constitutional article to find relevant judgments and precedents from Indian courts.
            </p>
          </div>
        )}

        {isLoading && (
          <div className="text-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-3" />
            <p className="text-sm text-muted-foreground">Searching Indian case law database...</p>
          </div>
        )}

        {results.length > 0 && !isLoading && (
          <div className="space-y-4 animate-fade-up">
            <p className="text-sm text-muted-foreground">
              Found {results.length} relevant judgments
            </p>
            {results.map((c, i) => (
              <div
                key={i}
                onClick={() => setSelectedCase(c)}
                className={`surface-elevated rounded-xl p-6 card-hover cursor-pointer animate-fade-up stagger-${i + 1}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="font-serif font-semibold text-base">{c.title}</h3>
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                        {c.relevance}% match
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3 flex-wrap">
                      <span className="flex items-center gap-1">
                        <Scale className="h-3 w-3" />
                        {c.citation}
                      </span>
                      <span className="flex items-center gap-1">
                        <Building2 className="h-3 w-3" />
                        {c.court}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {c.year}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.summary}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="shrink-0" onClick={(e) => { e.stopPropagation(); setSelectedCase(c); }}>
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AppLayout>
  );
}
