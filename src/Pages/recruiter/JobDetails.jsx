import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  updateCandidateStage,
  addAuditLog,
  updateRubric,
} from "../../store/recruiterSlice";

import RubricEditor from "./RubricEditor";
import AuditLog from "./AuditLog";

const stages = ["Applied", "Shortlisted", "Interview", "Rejected"];

export default function JobDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const job = useSelector((state) =>
    state.recruiter.jobs.find((j) => j.id === id)
  );

  if (!job) return <p className="p-6">Job not found</p>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">
        {job.title}
      </h1>

      {/* ================= PIPELINE ================= */}
      <div className="grid md:grid-cols-4 gap-4">
        {stages.map((stage) => (
          <div key={stage} className="bg-gray-50 p-4 rounded">
            <h3 className="font-semibold mb-3">{stage}</h3>

            {job.candidates
              .filter((c) => c.stage === stage)
              .map((candidate) => (
                <div
                  key={candidate.id}
                  className="p-3 bg-white rounded shadow mb-2"
                >
                  <Link
                    to={`/recruiter/candidate/${candidate.id}?job=${job.id}`}
                    className="font-medium"
                  >
                    {candidate.name}
                  </Link>

                  <p className="text-sm text-gray-500">
                    Score: {candidate.score}
                  </p>

                  <select
                    value={candidate.stage}
                    onChange={(e) => {
                      dispatch(
                        updateCandidateStage({
                          jobId: job.id,
                          candidateId: candidate.id,
                          newStage: e.target.value,
                        })
                      );

                      dispatch(
                        addAuditLog({
                          jobId: job.id,
                          message: `${candidate.name} moved to ${e.target.value}`,
                        })
                      );
                    }}
                    className="mt-2 w-full border rounded text-sm"
                  >
                    {stages.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
              ))}
          </div>
        ))}
      </div>

      {/* ================= RUBRIC + AUDIT ================= */}
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <RubricEditor
          rubric={job.rubric}
          onSave={(rubric) => {
            dispatch(updateRubric({ jobId: job.id, rubric }));
            dispatch(
              addAuditLog({
                jobId: job.id,
                message: "Evaluation rubric updated",
              })
            );
          }}
        />

        <AuditLog logs={job.auditLog} />
      </div>
    </div>
  );
}