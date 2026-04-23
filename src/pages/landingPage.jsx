import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import { motion } from "framer-motion";
export default function Landing() {
  const navigate = useNavigate();

  return (
    <>
      <main>
        {/* hero */}
        <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-linear-to-br from-rose-100 to-rose-400">
          <div className="max-w-5xl mx-auto text-center">
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight text-rose-500"
            >
              Master IELTS Task 2 Writing
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mt-4 max-w-md sm:max-w-xl mx-auto text-sm sm:text-base text-rose-500/80"
            >
              Learn proven essay structure, practice with real questions, and
              get instant feedback — all in one guided flow.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
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

            {/* Features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {[
                {
                  icon: "📚",
                  text: "Clear essay structure",
                },
                {
                  icon: "✍️",
                  text: "Real IELTS questions",
                },
                {
                  icon: "⚡",
                  text: "Instant feedback",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white backdrop-blur-md p-5 rounded-2xl text-rose-500 text-sm sm:text-base shadow-lg"
                >
                  <div className="text-xl mb-2">{item.icon}</div>
                  {item.text}
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
