import recruiterReducer, { updateRubric } from "../store/recruiterSlice";

test("rubric updates correctly", () => {
  const initialState = {
    jobs: [
      {
        id: "1",
        rubric: [],
        candidates: [],
        auditLog: [],
      },
    ],
  };

  const action = updateRubric({
    jobId: "1",
    rubric: [{ label: "Communication", weight: 40 }],
  });

  const newState = recruiterReducer(initialState, action);

  expect(newState.jobs[0].rubric.length).toBe(1);
  expect(newState.jobs[0].rubric[0].label).toBe("Communication");
});