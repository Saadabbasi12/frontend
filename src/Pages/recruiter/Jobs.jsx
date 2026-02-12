import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Jobs() {
  const jobs = useSelector((state) => state.recruiter.jobs);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Jobs</h1>

      {jobs.map((job) => (
        <Link
          key={job.id}
          to={`/recruiter/jobs/${job.id}`}
          className="block p-4 border rounded-lg mb-4 hover:shadow"
        >
          <h2 className="font-semibold">{job.title}</h2>
          <p className="text-sm text-gray-600">
            {job.department}
          </p>
        </Link>
      ))}
    </div>
  );
}