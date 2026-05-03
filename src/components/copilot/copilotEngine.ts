export type QuickReply = { label: string; query: string };

export type CopilotResponse = {
  markdown: string;
  quickReplies?: QuickReply[];
  navigate?: string;
};

const knowledgeBase = {
  college: {
    name: "Lokmanya College",
    alternateName: "Lokmanya Group of Colleges",
    established: 1997,
    type: "Private",
    location: {
      city: "Ahmedabad",
      state: "Gujarat",
      country: "India",
      address: "Shivranjani Cross Road, Satellite, Ahmedabad, Gujarat",
    },
    contact: {
      phone: "07203061010",
      website: "https://lokmanya.ac.in",
    },
  },
  management: {
    trustName: "Vardhman Charitable Trust",
    establishedUnder: "Bombay Public Trust Act, 1950",
  },
  visionMission: {
    focus: ["Quality education", "Accessibility", "Innovation", "Inclusivity", "Social development"],
    goal: "Empower students through transformative learning",
  },
  affiliationsApprovals: {
    affiliatedTo: ["Gujarat University", "Gujarat Technological University (GTU)"],
    approvedBy: ["AICTE", "UGC", "NCTE", "Gujarat Nursing Council"],
  },
  courses: {
    undergraduate: ["BCA", "BBA", "B.Com", "LLB", "B.Sc Nursing", "GNM", "B.Ed"],
    postgraduate: ["MBA", "MCA", "M.Com", "M.Ed", "P.B.B.Sc"],
    flagshipCourse: "BCA",
  },
  courseDuration: {
    ug: "3 years",
    llb: "2-3 years",
    bscNursing: "4 years",
    pg: "2 years",
  },
  fees: {
    ugRange: "₹20,000 - ₹4.32 Lakhs",
    pgRange: "₹1.1 - ₹1.68 Lakhs",
    examples: {
      BCA: "₹29,000 per year",
      BBA: "₹90,000 total",
      MBA_MCA: "₹70,000 per year",
    },
  },
  admissions: {
    ug: {
      mode: "Merit-based",
      criteria: "12th marks",
    },
    pg: {
      mode: "Merit + Entrance",
      criteria: ["Graduation marks", "CAT", "MAT", "CMAT"],
    },
  },
  eligibility: {
    ug: {
      qualification: "10+2",
      minimumPercentage: "45-50%",
    },
    pg: {
      qualification: "Bachelor's degree",
      minimumPercentage: "50%",
      entranceRequired: true,
    },
  },
  departments: ["Management", "Computer Applications", "Commerce", "Law", "Education", "Nursing", "Paramedical"],
  placements: {
    placementRate: "Up to 90%",
    averageSalary: "₹3.6 LPA",
    topRecruiters: ["TCS", "Infosys", "Godrej"],
  },
  facilities: ["Computer labs", "Subject labs", "Classrooms", "Industrial visits", "Field trips"],
  quickFacts: [
    "Private college in Gujarat",
    "Established in 1997",
    "Flagship course is BCA",
    "Offers UG and PG programs",
    "Merit-based admissions",
  ],
  faq: [
    { question: "What is the college name?", answer: "Lokmanya College, Ahmedabad" },
    { question: "When was the college established?", answer: "1997" },
    { question: "Where is the college located?", answer: "Ahmedabad, Gujarat, India" },
    { question: "What courses are offered?", answer: "BCA, BBA, B.Com, MBA, MCA, LLB, B.Ed, M.Ed, Nursing courses" },
    { question: "What is the flagship course?", answer: "BCA" },
    { question: "How are admissions done?", answer: "Merit-based for UG and entrance exams for PG" },
  ],
} as const;

const courseList = [
  { name: "BCA", duration: knowledgeBase.courseDuration.ug, fee: knowledgeBase.fees.examples.BCA },
  { name: "BBA", duration: knowledgeBase.courseDuration.ug, fee: knowledgeBase.fees.examples.BBA },
  { name: "MCA", duration: knowledgeBase.courseDuration.pg, fee: knowledgeBase.fees.examples.MBA_MCA },
  { name: "MBA", duration: knowledgeBase.courseDuration.pg, fee: knowledgeBase.fees.examples.MBA_MCA },
  { name: "B.Sc Nursing", duration: knowledgeBase.courseDuration.bscNursing, fee: knowledgeBase.fees.ugRange },
];

const formatBullets = (items: readonly string[]) => items.map((item) => `- ${item}`).join("\n");
const formatList = (label: string, items: readonly string[]) => `- **${label}:** ${items.join(", ")}`;

const overview = () =>
  [
    `### Lokmanya College Overview`,
    `- **Name:** ${knowledgeBase.college.name}`,
    `- **Alternate name:** ${knowledgeBase.college.alternateName}`,
    `- **Established:** ${knowledgeBase.college.established}`,
    `- **Type:** ${knowledgeBase.college.type}`,
    `- **Location:** ${knowledgeBase.college.location.address}`,
    `- **Website:** ${knowledgeBase.college.contact.website}`,
    `- **Phone:** ${knowledgeBase.college.contact.phone}`,
  ].join("\n");

const courseSummary = () =>
  [
    `### Courses`,
    `#### Undergraduate`,
    formatBullets(knowledgeBase.courses.undergraduate),
    `#### Postgraduate`,
    formatBullets(knowledgeBase.courses.postgraduate),
    `#### Flagship`,
    `- ${knowledgeBase.courses.flagshipCourse}`,
  ].join("\n");

const feesSummary = () =>
  [
    `### Fees`,
    `- **UG range:** ${knowledgeBase.fees.ugRange}`,
    `- **PG range:** ${knowledgeBase.fees.pgRange}`,
    `- **BCA:** ${knowledgeBase.fees.examples.BCA}`,
    `- **BBA:** ${knowledgeBase.fees.examples.BBA}`,
    `- **MBA / MCA:** ${knowledgeBase.fees.examples.MBA_MCA}`,
  ].join("\n");

const admissionSummary = () =>
  [
    `### Admissions`,
    `- **UG mode:** ${knowledgeBase.admissions.ug.mode}`,
    `- **UG criteria:** ${knowledgeBase.admissions.ug.criteria}`,
    `- **PG mode:** ${knowledgeBase.admissions.pg.mode}`,
    `- **PG criteria:** ${knowledgeBase.admissions.pg.criteria.join(", ")}`,
  ].join("\n");

const eligibilitySummary = () =>
  [
    `### Eligibility`,
    `- **UG qualification:** ${knowledgeBase.eligibility.ug.qualification}`,
    `- **UG minimum:** ${knowledgeBase.eligibility.ug.minimumPercentage}`,
    `- **PG qualification:** ${knowledgeBase.eligibility.pg.qualification}`,
    `- **PG minimum:** ${knowledgeBase.eligibility.pg.minimumPercentage}`,
    `- **Entrance required:** ${knowledgeBase.eligibility.pg.entranceRequired ? "Yes" : "No"}`,
  ].join("\n");

const allFactsSummary = () =>
  [
    `### Lokmanya College Knowledge Base`,
    overview(),
    `#### Management`,
    `- **Trust:** ${knowledgeBase.management.trustName}`,
    `- **Established under:** ${knowledgeBase.management.establishedUnder}`,
    `#### Vision & Mission`,
    formatBullets(knowledgeBase.visionMission.focus),
    `- **Goal:** ${knowledgeBase.visionMission.goal}`,
    `#### Affiliations & Approvals`,
    formatList("Affiliated to", knowledgeBase.affiliationsApprovals.affiliatedTo),
    formatList("Approved by", knowledgeBase.affiliationsApprovals.approvedBy),
    courseSummary(),
    `#### Duration`,
    `- **UG:** ${knowledgeBase.courseDuration.ug}`,
    `- **LLB:** ${knowledgeBase.courseDuration.llb}`,
    `- **B.Sc Nursing:** ${knowledgeBase.courseDuration.bscNursing}`,
    `- **PG:** ${knowledgeBase.courseDuration.pg}`,
    feesSummary(),
    admissionSummary(),
    eligibilitySummary(),
    `#### Departments`,
    formatBullets(knowledgeBase.departments),
    `#### Placements`,
    `- **Placement rate:** ${knowledgeBase.placements.placementRate}`,
    `- **Average salary:** ${knowledgeBase.placements.averageSalary}`,
    formatList("Top recruiters", knowledgeBase.placements.topRecruiters),
    `#### Facilities`,
    formatBullets(knowledgeBase.facilities),
    `#### Quick Facts`,
    formatBullets(knowledgeBase.quickFacts),
    `#### FAQ`,
    ...knowledgeBase.faq.map((item) => `- **${item.question}** ${item.answer}`),
  ].join("\n");

const defaultQuickReplies: QuickReply[] = [
  { label: "College overview", query: "Tell me about Lokmanya College" },
  { label: "Courses", query: "What courses are offered?" },
  { label: "Fees", query: "What are the fees?" },
  { label: "Admissions", query: "How are admissions done?" },
];

const admissionsAssistantQuickReplies: QuickReply[] = [
  { label: "Best course for AI", query: "Which course is best for AI?" },
  { label: "How to apply", query: "How to apply" },
  { label: "Fees", query: "fees" },
  { label: "Deadlines", query: "deadlines" },
];

const admissionProcessReply = () =>
  [
    `### Admission Process`,
    `1. Submit application online`,
    `2. Upload documents (transcripts, ID)`,
    `3. Entrance assessment (online)`,
    `4. Interview with faculty`,
    `5. Offer letter & enrollment`,
    ``,
    `Click **Apply Now** to begin.`,
  ].join("\n");

const feesOverviewReply = () =>
  [
    `### Fees Overview`,
    `- **B.Tech Computer Science & AI:** $4,200/yr`,
    `- **B.Sc Data Science:** $3,600/yr`,
    `- **BBA Digital Business:** $3,200/yr`,
    `- **B.Des UX & Product Design:** $3,900/yr`,
    ``,
    `Scholarships cover up to **40%** for top scorers.`,
  ].join("\n");

const deadlinesReply = () =>
  [
    `### Key Deadlines`,
    `- **Early decision:** Nov 30`,
    `- **Regular round:** Mar 15`,
    `- **Scholarship:** Feb 1`,
    `- **Classes start:** Aug 22`,
  ].join("\n");

const bestAICourseReply = () =>
  [
    `### Best Course for AI`,
    `The strongest direct path is **B.Tech Computer Science & AI**.`,
    ``,
    `You can also consider **B.Sc Data Science** if you want a more analytics-focused AI route.`,
  ].join("\n");

function containsAny(input: string, words: string[]) {
  return words.some((word) => input.includes(word));
}

function faqMatch(input: string) {
  return knowledgeBase.faq.find((item) => {
    const question = item.question.toLowerCase().replace(/[^a-z0-9\s]/g, "");
    return question.split(" ").filter(Boolean).some((word) => input.includes(word));
  });
}

export function getCopilotReply(input: string): CopilotResponse {
  const q = input.toLowerCase();

  if (/(hi|hello|hey|start|begin|intro|overview|about)/.test(q)) {
    return {
      markdown: `### 👋 Hi there!\nI'm **Lokmanya College**, your AI admissions assistant. I can help you with:\n\n- Course discovery\n- Admission process\n- Fees & scholarships\n- Deadlines\n\nWhat would you like to explore?`,
      quickReplies: admissionsAssistantQuickReplies,
    };
  }

  if (containsAny(q, ["which course is best for ai", "best course for ai", "ai course", "best ai course"])) {
    return {
      markdown: bestAICourseReply(),
      quickReplies: [
        { label: "How to apply", query: "How to apply" },
        { label: "Fees", query: "fees" },
      ],
    };
  }

  if (containsAny(q, ["go to admissions", "open admissions page", "admissions page"])) {
    return {
      markdown: `Use the **Admissions** section to begin your application. I can also guide you through each step right here.`,
      quickReplies: [
        { label: "Admission process", query: "Admission process" },
        { label: "Fees", query: "fees" },
      ],
    };
  }

  if (containsAny(q, ["admission process", "how to apply", "apply now", "go to admissions", "application steps"])) {
    return {
      markdown: admissionProcessReply(),
      quickReplies: [
        { label: "Go to Admissions", query: "Go to Admissions" },
        { label: "Eligibility", query: "Eligibility" },
        { label: "Fees", query: "fees" },
      ],
    };
  }

  if (containsAny(q, ["fees", "fee structure", "tuition", "scholarship"])) {
    return {
      markdown: feesOverviewReply(),
      quickReplies: [
        { label: "Apply now", query: "How to apply" },
        { label: "Deadlines", query: "deadlines" },
      ],
    };
  }

  if (containsAny(q, ["deadlines", "deadline", "last date", "important dates"])) {
    return {
      markdown: deadlinesReply(),
      quickReplies: [
        { label: "How to apply", query: "How to apply" },
        { label: "Fees", query: "fees" },
      ],
    };
  }

  if (containsAny(q, ["eligibility", "requirements", "who can apply"])) {
    return {
      markdown: [
        `### Eligibility`,
        `- **B.Tech Computer Science & AI:** Minimum 65% in Grade 12 with Mathematics`,
        `- **B.Sc Data Science:** Minimum 60% in Grade 12`,
        `- **BBA Digital Business:** Minimum 55% in Grade 12`,
        `- **B.Des UX & Product Design:** Minimum 55% in Grade 12 plus portfolio review`,
      ].join("\n"),
      quickReplies: [
        { label: "How to apply", query: "How to apply" },
        { label: "Deadlines", query: "deadlines" },
      ],
    };
  }

  if (containsAny(q, ["lokmanya college", "about college", "college overview", "tell me about", "about lokmanya"])) {
    return {
      markdown: overview() + `\n\n#### Quick facts\n${formatBullets(knowledgeBase.quickFacts)}`,
      quickReplies: defaultQuickReplies,
    };
  }

  if (containsAny(q, ["management", "trust", "vardhman", "public trust", "bombay public trust act"])) {
    return {
      markdown: [
        `### Management`,
        `- **Trust:** ${knowledgeBase.management.trustName}`,
        `- **Established under:** ${knowledgeBase.management.establishedUnder}`,
      ].join("\n"),
      quickReplies: defaultQuickReplies,
    };
  }

  if (containsAny(q, ["vision", "mission", "goal", "values", "focus"])) {
    return {
      markdown: [
        `### Vision & Mission`,
        `- **Goal:** ${knowledgeBase.visionMission.goal}`,
        `#### Focus areas`,
        formatBullets(knowledgeBase.visionMission.focus),
      ].join("\n"),
      quickReplies: defaultQuickReplies,
    };
  }

  if (containsAny(q, ["affiliation", "approved", "approval", "ugc", "aicte", "ncte", "gujarat university", "gtu"])) {
    return {
      markdown: [
        `### Affiliations & Approvals`,
        `- **Affiliated to:** ${knowledgeBase.affiliationsApprovals.affiliatedTo.join(", ")}`,
        `- **Approved by:** ${knowledgeBase.affiliationsApprovals.approvedBy.join(", ")}`,
      ].join("\n"),
      quickReplies: defaultQuickReplies,
    };
  }

  if (containsAny(q, ["course", "courses", "program", "programs", "department", "departments", "offer", "offered"])) {
    return {
      markdown: courseSummary() + `\n\n#### Departments\n${formatBullets(knowledgeBase.departments)}`,
      quickReplies: [
        { label: "BCA details", query: "Tell me about BCA" },
        { label: "Fees", query: "What are the fees?" },
        { label: "Eligibility", query: "What is the eligibility?" },
      ],
    };
  }

  if (containsAny(q, ["bca", "bba", "bcom", "llb", "mba", "mca", "med", "bed", "gnm", "nursing", "pbbsc"])) {
    const selected = knowledgeBase.courses.undergraduate.find((course) => q.includes(course.toLowerCase().replace(/\./g, "")))
      || knowledgeBase.courses.postgraduate.find((course) => q.includes(course.toLowerCase().replace(/\./g, "")));

    return {
      markdown: [
        `### Program details`,
        selected ? `- **Requested course:** ${selected}` : `- **Requested course:** one of Lokmanya College’s programs`,
        `- **Flagship course:** ${knowledgeBase.courses.flagshipCourse}`,
        `- **UG duration:** ${knowledgeBase.courseDuration.ug}`,
        `- **PG duration:** ${knowledgeBase.courseDuration.pg}`,
        `- **B.Sc Nursing duration:** ${knowledgeBase.courseDuration.bscNursing}`,
        `- **LLB duration:** ${knowledgeBase.courseDuration.llb}`,
      ].join("\n"),
      quickReplies: [
        { label: "Courses list", query: "What courses are offered?" },
        { label: "Fees", query: "What are the fees?" },
        { label: "Admissions", query: "How are admissions done?" },
      ],
    };
  }

  if (containsAny(q, ["fee", "fees", "cost", "tuition", "price", "bca fee", "bba fee", "mba fee", "mca fee"])) {
    return {
      markdown: feesSummary(),
      quickReplies: [
        { label: "Eligibility", query: "What is the eligibility?" },
        { label: "Admissions", query: "How are admissions done?" },
      ],
    };
  }

  if (containsAny(q, ["admission", "apply", "process", "how to", "mode", "criteria"])) {
    return {
      markdown: admissionSummary() + `\n\n#### Eligibility\n${eligibilitySummary().replace(/^### Eligibility\n/, "")}`,
      quickReplies: [
        { label: "UG eligibility", query: "What is the UG eligibility?" },
        { label: "PG eligibility", query: "What is the PG eligibility?" },
      ],
    };
  }

  if (containsAny(q, ["eligibility", "qualif", "requirement", "minimum percentage", "entrance required"])) {
    return {
      markdown: eligibilitySummary(),
      quickReplies: [
        { label: "Admissions", query: "How are admissions done?" },
        { label: "Courses", query: "What courses are offered?" },
      ],
    };
  }

  if (containsAny(q, ["placement", "placements", "recruiter", "salary", "job", "jobs", "career"])) {
    return {
      markdown: [
        `### Placements`,
        `- **Placement rate:** ${knowledgeBase.placements.placementRate}`,
        `- **Average salary:** ${knowledgeBase.placements.averageSalary}`,
        `- **Top recruiters:** ${knowledgeBase.placements.topRecruiters.join(", ")}`,
      ].join("\n"),
      quickReplies: [
        { label: "Facilities", query: "What facilities are available?" },
        { label: "Courses", query: "What courses are offered?" },
      ],
    };
  }

  if (containsAny(q, ["facility", "facilities", "lab", "classroom", "visit", "trip"])) {
    return {
      markdown: [`### Facilities`, formatBullets(knowledgeBase.facilities)].join("\n"),
      quickReplies: [
        { label: "Placements", query: "What are the placements?" },
        { label: "Quick facts", query: "Tell me quick facts" },
      ],
    };
  }

  if (containsAny(q, ["quick fact", "facts", "summary", "all info", "full details", "complete", "everything"])) {
    return {
      markdown: allFactsSummary(),
      quickReplies: [
        { label: "FAQ", query: "What is the college name?" },
        { label: "Admissions", query: "How are admissions done?" },
      ],
    };
  }

  const faq = faqMatch(q);
  if (faq) {
    return {
      markdown: `### FAQ\n- **Q:** ${faq.question}\n- **A:** ${faq.answer}`,
      quickReplies: defaultQuickReplies,
    };
  }

  return {
    markdown: `I can answer from the full Lokmanya College knowledge base. Try asking about **college overview**, **management**, **vision**, **affiliations**, **courses**, **fees**, **admissions**, **eligibility**, **placements**, **facilities**, or any FAQ-style question.`,
    quickReplies: defaultQuickReplies,
  };
}
