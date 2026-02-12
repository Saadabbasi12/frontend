import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/marketing/Home";
import Jobs from "../Pages/recruiter/Jobs";
import JobDetails from "../Pages/recruiter/JobDetails";
import CandidateProfile from "../Pages/recruiter/CandidateProfile";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Recruiter workspace */}
        <Route path="/recruiter/jobs" element={<Jobs />} />
        <Route path="/recruiter/jobs/:id" element={<JobDetails />} />
        <Route path="/recruiter/candidate/:id" element={<CandidateProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;