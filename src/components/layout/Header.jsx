import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-black shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">
          TalentSage
        </h1>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
            <div className="flex justify-between  width-full gap-8">
           <div className=" justify-center items-center gap-8 flex">
          <a href="#features" className=" text-white hover:text-blue-400">Features</a>
          <a href="#metrics" className="text-white hover:text-blue-400">Impact</a>
          <a href="#contact" className="text-white hover:text-blue-400">Contact</a>
         
            </div>
<div>
             <Link
            to="/recruiter/jobs"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 "
          >
            Recruiter Login
          </Link>
</div>
         </div>
        </nav>
      </div>
    </header>
  );
}