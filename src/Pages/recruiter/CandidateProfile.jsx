import { useParams, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import VideoScreening from "./VideoScreening";
import AIScreeningSummary from "./AIScreeningSummary";
import { addAuditLog } from "../../store/recruiterSlice";

export default function CandidateProfile() {
  const { id } = useParams();
  const [params] = useSearchParams();
  const jobId = params.get("job");

  const dispatch = useDispatch();

  const job = useSelector((state) =>
    state.recruiter.jobs.find((j) => j.id === jobId)
  );

  const candidate = job?.candidates.find((c) => c.id === id);

  if (!candidate) {
    return <p className="p-6">Candidate not found</p>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* ================= HEADER ================= */}
      <h1 className="text-2xl font-bold">{candidate.name}</h1>
      <p className="text-gray-600 mt-1">
        Stage: {candidate.stage}
      </p>

      {/* ================= SKILLS ================= */}
      <div className="mt-6">
        <h2 className="font-semibold mb-2">Skills</h2>
        <div className="flex gap-2 flex-wrap">
          {candidate.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-blue-100 text-blue-600 rounded text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* ================= RESUME PREVIEW ================= */}
      <div className="mt-6 p-4 border rounded-lg">
        <h2 className="font-semibold mb-2">Resume Preview</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          This is a dummy resume preview. The candidate has experience
          building frontend applications using React, Tailwind CSS, and
          modern JavaScript frameworks. Previously worked on SaaS
          dashboards and recruiter-facing tools.
        </p>
      </div>

      {/* ================= VIDEO SCREENING ================= */}
      <VideoScreening
        onSubmit={({ decision }) => {
          dispatch(
            addAuditLog({
              jobId,
              message: `Video screening ${decision.toLowerCase()} for ${candidate.name}`,
            })
          );
        }}
      />

      {/* ================= AI SUMMARY ================= */}
      <AIScreeningSummary />
    </div>
  );
}