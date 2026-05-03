export type QuickReply = { label: string; query: string };

export type CopilotResponse = {
  markdown: string;
  quickReplies?: QuickReply[];
  navigate?: string;
};

const courses = [
  { name: "B.Tech Computer Science & AI", fee: "$4,200/yr", duration: "4 years" },
  { name: "B.Sc Data Science", fee: "$3,600/yr", duration: "3 years" },
  { name: "BBA Digital Business", fee: "$3,200/yr", duration: "3 years" },
  { name: "B.Des UX & Product Design", fee: "$3,900/yr", duration: "4 years" },
];

export function getCopilotReply(input: string): CopilotResponse {
  const q = input.toLowerCase();

  if (/(hi|hello|hey|start)/.test(q)) {
    return {
      markdown: `### 👋 Hi there!\nI'm **NovaCopilot**, your AI admissions assistant. I can help you with:\n- 🎓 Course discovery\n- 📝 Admission process\n- 💰 Fees & scholarships\n- 📅 Deadlines\n\nWhat would you like to explore?`,
      quickReplies: [
        { label: "Best course for AI", query: "Which course is best for AI?" },
        { label: "How to apply", query: "What is the admission process?" },
        { label: "Fees", query: "What are the fees?" },
      ],
    };
  }

  if (/(ai|artificial intelligence|machine learning|ml)/.test(q)) {
    return {
      markdown: `### 🤖 Best fit for AI\nI recommend **B.Tech Computer Science & AI** — it covers:\n- Deep Learning & Neural Nets\n- NLP & Computer Vision\n- MLOps and deployment\n- Capstone with industry mentors\n\n**Duration:** 4 years · **Fee:** $4,200/yr`,
      quickReplies: [
        { label: "View admission steps", query: "admission process" },
        { label: "Open Courses page", query: "go to courses" },
      ],
      navigate: undefined,
    };
  }

  if (/(admission|apply|process|how to)/.test(q)) {
    return {
      markdown: `### 📝 Admission Process\n1. **Submit application** online\n2. **Upload documents** (transcripts, ID)\n3. **Entrance assessment** (online)\n4. **Interview** with faculty\n5. **Offer letter** & enrollment\n\nClick **Apply Now** to begin.`,
      quickReplies: [
        { label: "Go to Admissions", query: "go to admissions" },
        { label: "Eligibility", query: "eligibility" },
      ],
    };
  }

  if (/(fee|cost|price|tuition|scholarship)/.test(q)) {
    return {
      markdown: `### 💰 Fees Overview\n${courses.map((c) => `- **${c.name}** — ${c.fee}`).join("\n")}\n\n💡 **Scholarships** cover up to **40%** for top scorers.`,
      quickReplies: [{ label: "Apply now", query: "go to admissions" }],
    };
  }

  if (/(deadline|date|when)/.test(q)) {
    return {
      markdown: `### 📅 Key Deadlines\n- **Early decision:** Nov 30\n- **Regular round:** Mar 15\n- **Scholarship:** Feb 1\n- **Classes start:** Aug 22`,
    };
  }

  if (/(eligibility|qualif|requirement)/.test(q)) {
    return {
      markdown: `### ✅ Eligibility\n- Minimum **65%** in Grade 12\n- Math required for tech programs\n- English proficiency (IELTS 6.0+ for international)\n- Portfolio for Design programs`,
    };
  }

  if (/(course|program|department)/.test(q)) {
    return {
      markdown: `### 🎓 Popular Programs\n${courses.map((c) => `- **${c.name}** · ${c.duration} · ${c.fee}`).join("\n")}`,
      quickReplies: [{ label: "Open Courses page", query: "go to courses" }],
    };
  }


  if (/(faculty|teacher|professor)/.test(q)) {
    return {
      markdown: `### 👩‍🏫 Faculty\nOur faculty includes researchers from **MIT, Stanford, IIT** and industry leaders from **Google, Microsoft, OpenAI**.`,
    };
  }

  return {
    markdown: `I'm not sure I caught that — try asking about **courses**, **admissions**, **fees**, or **deadlines**. Or pick a quick reply below 👇`,
    quickReplies: [
      { label: "Best course for AI", query: "Which course is best for AI?" },
      { label: "Admission steps", query: "admission process" },
      { label: "Fees", query: "fees" },
      { label: "Deadlines", query: "deadlines" },
    ],
  };
}
