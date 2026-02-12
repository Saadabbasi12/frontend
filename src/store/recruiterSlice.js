import { createSlice } from "@reduxjs/toolkit";
import { jobsData } from "../data/dummyData";

const recruiterSlice = createSlice({
  name: "recruiter",
  initialState: {
    jobs: jobsData,
  },
  reducers: {
    updateCandidateStage: (state, action) => {
      const { jobId, candidateId, newStage } = action.payload;

      const job = state.jobs.find((j) => j.id === jobId);
      if (!job) return;

      const candidate = job.candidates.find(
        (c) => c.id === candidateId
      );
      if (!candidate) return;

      candidate.stage = newStage;
    },
    addAuditLog: (state, action) => {
  const { jobId, message } = action.payload;
  const job = state.jobs.find((j) => j.id === jobId);
  if (!job) return;

  job.auditLog.unshift({
    id: Date.now().toString(),
    message,
    time: new Date().toISOString(),
  });
},

updateRubric: (state, action) => {
  const { jobId, rubric } = action.payload;
  const job = state.jobs.find((j) => j.id === jobId);
  if (!job) return;

  job.rubric = rubric;
},
  },
});

export const { updateCandidateStage, addAuditLog, updateRubric } = recruiterSlice.actions;
export default recruiterSlice.reducer;