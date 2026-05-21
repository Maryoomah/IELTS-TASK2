import Button from "../components/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function LessonPreview() {
  const navigate = useNavigate();

  const outcomes = [
    "Identify different IELTS Task 2 essay types",
    "Understand essay structure clearly",
    "Choose the correct format for any question",
    "Write stronger introductions and conclusions",
    "Develop effective body paragraphs with examples",
  ];

  return (
    <main className="min-h-screen bg-linear-to-br from-rose-50 via-white to-rose-100">
      <section className="relative px-4 sm:px-6 py-14 sm:py-20 overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-rose-200/40 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-rose-300/30 blur-3xl rounded-full" />

        <div className="relative max-w-5xl mx-auto">
          {/* Top Content */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="uppercase tracking-[0.3em] text-xs sm:text-sm font-semibold text-rose-500">
              IELTS Writing Task 2
            </p>

            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Section Overview
            </h1>

            <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
              Learn how to recognise IELTS essay types quickly and apply the
              correct structure confidently during the exam.
            </p>
          </motion.div>

          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mt-10 bg-white border border-rose-100 rounded-3xl shadow-2xl shadow-rose-100/70 overflow-hidden"
          >
            {/* Top Accent */}
            <div className="h-2 bg-linear-to-r from-rose-400 to-rose-600" />

            <div className="p-6 sm:p-10">
              {/* Intro */}
              <div className="max-w-3xl">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Why this lesson matters
                </h2>

                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Many IELTS candidates lose marks because they apply the wrong
                  essay structure to the question type. This lesson will help
                  you identify common Task 2 questions and organise your ideas
                  in a clear, examiner-friendly way.
                </p>
              </div>

              {/* Learning Outcomes */}
              <div className="mt-10">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                  Learning Outcomes
                </h3>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {outcomes.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-2xl border border-rose-100 bg-rose-50/60 p-4"
                    >
                      <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-rose-500 text-white text-xs font-bold">
                        ✓
                      </div>

                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button
                  variant="primary"
                  className="w-full sm:w-auto"
                  onClick={() => navigate("/lesson")}
                >
                  Proceed to Lesson
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
