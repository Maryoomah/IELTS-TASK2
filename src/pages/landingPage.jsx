import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import { motion } from "framer-motion";
import Section from "../components/section";
export default function Landing() {
  const navigate = useNavigate();

  const features = [
    {
      icon: "📚",
      title: "Structured Lessons",
      text: "Learn how to plan, organise, and write Task 2 essays clearly.",
    },
    {
      icon: "✍️",
      title: "Practice Questions",
      text: "Work with realistic IELTS prompts across common essay types.",
    },
    {
      icon: "⚡",
      title: "Instant Feedback",
      text: "Submit your essay and receive guided writing feedback.",
    },
  ];

  return (
    <main className="min-h-screen bg-linear-to-br from-rose-50 via-white to-rose-100">
      <Section>
        <div >
          {/* Hero Card */}
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl shadow-rose-200/60 border border-rose-100 px-6 py-14 sm:px-10 lg:px-16 text-center">
            {/* Background decoration */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-rose-200/40 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-rose-300/30 rounded-full blur-3xl" />

            <div className="relative z-10">
          

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="mt-4 text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-slate-900"
              >
                Master <span className="text-rose-500">IELTS Task 2</span>  Writing with Confidence
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-5 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed"
              >
                Learn proven essay structure, practise with real IELTS-style
                questions, and get guided feedback — all in one simple flow.
              </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-rose-100 rounded-2xl p-6 shadow-lg shadow-rose-100/70 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl">{item.icon}</div>

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
              >
                <Button
                  className="w-full sm:w-auto"
                  onClick={() => navigate("/preview")}
                >
                  Start Lesson
                </Button>

                <Button
                  variant="secondary"
                  className="w-full sm:w-auto"
                  onClick={() => navigate("/practice")}
                >
                  Try Practice Question
                </Button>
              </motion.div>
            </div>
          </div>

        </div>
      </Section>
    </main>
  );
}