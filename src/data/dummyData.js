export const jobsData = [
  {
    id: "1",
    title: "Frontend Engineer",
    department: "Engineering",

    rubric: [
      { id: "r1", label: "Communication", weight: 30 },
      { id: "r2", label: "Technical Skills", weight: 40 },
      { id: "r3", label: "Culture Fit", weight: 30 },
    ],

    auditLog: [
      {
        id: "a1",
        message: "Job created",
        time: new Date().toISOString(),
      },
    ],

    candidates: [
      {
        id: "c1",
        name: "Ali Khan",
        stage: "Applied",
        score: 82,
        skills: ["React", "Tailwind", "JavaScript"],
      },
      {
        id: "c2",
        name: "Sara Ahmed",
        stage: "Shortlisted",
        score: 90,
        skills: ["React", "TypeScript", "UI/UX"],
      },
    ],
  },
];