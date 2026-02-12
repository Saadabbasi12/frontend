import Header from "../../components/layout/Header";
import { motion } from "framer-motion";
import Reveal from "../../components/ui/Reveal";
import Counter from '../../components/ui/Counter'

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero */}
     <section className="pt-24 bg-gradient-to-br from-blue-500 via-purple-200 to-blue-300">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

          
          {/* Text */}
          <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 2.8 }}
>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              AI-Native Recruitment,  
              Built for Modern Hiring Teams
            </h1>

            <p className="mt-6 text-gray-600 text-lg">
              TalentSage helps recruiters hire faster with intelligent candidate
              matching, automated screening, and AI-powered workflows.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Request Demo
              </button>
              <button className="px-6 py-3 border border-gray-600 rounded-lg hover:bg-gray-100">
                Learn More
              </button>
            </div>
          </div>
          </motion.div>

          {/* Visual */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 2.8, delay: 0.2 }}
  className="h-64 md:h-80 bg-blue-100 rounded-xl flex items-center justify-center"
>

          <div className="h-64 md:h-80 bg-blue-100 rounded-xl flex items-center justify-center">
            <span className="text-blue-600 font-semibold">
              Product Visual / Animation
            </span>
          </div>
</motion.div>          


        </div>
      </section>


            {/* Features */}
<section id="features" className="py-20 bg-indigo-200">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-12">
      What TalentSage Does Best
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        "Intelligent Candidate Matching",
        "Automated Resume Parsing",
        "AI-Driven Shortlisting & Scoring",
        "Smart Interview Scheduling",
        "Predictive Hiring Analytics",
        "Chat-based Candidate Engagement",
      ].map((feature) => (
<Reveal key={feature}>
        <div
        //   key={feature}
          className="p-6 border rounded-xl bg-white hover:shadow-lg hover:bg-indigo-200  transition"
        >
          <h3 className="font-semibold text-lg mb-2">
            {feature}
          </h3>
          <p className="text-gray-600 text-sm">
            Built to streamline recruiter workflows and improve hiring outcomes
            with AI-native intelligence.
          </p>
        </div>
</Reveal>

      ))}
    </div>
  </div>
</section>


{/* Metrics */}
<section id="metrics" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-12">
      Proven Business Impact
    </h2>

   <div className="grid md:grid-cols-3 gap-8">
  <Counter value={60} label="Reduction in time-to-hire" />
  <Counter value={75} label="Faster screening & shortlisting" />
  <Counter value={40} label="Improved candidate engagement" />
  <Counter value={30} label="Higher recruiter productivity" />
  <Counter value={50} label="Cost savings on HR tasks" />
  <Counter value={24} label="Chatbot availability" />
</div>
  </div>
</section>

      {/* Contact */}
<section id="contact" className="py-20 bg-indigo-100">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-6">
      Contact & Support
    </h2>

    <p className="text-gray-600 mb-2">
      📞 +1 (281) 786-0706
    </p>
    <p className="text-gray-600 mb-2">
      ✉️ info@visiontact.com
    </p>

    <p className="mt-6 text-sm text-gray-500">
      Houston, TX · Dubai Silicon Oasis
    </p>
  </div>
</section>
  
    </>
  );
}