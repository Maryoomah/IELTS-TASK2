import Button from "../components/button";
import { useNavigate } from "react-router-dom";

export default function LessonPreview() {
  const navigate = useNavigate();

  return (
    <main>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-500 to-rose-800 px-4 py-10">
        
        {/* Background image */}
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: "url('/logo.jpg')" }}
        />

        {/* Content */}
        <div className="relative w-full max-w-2xl space-y-8">

          {/* Title Block */}
          <div className="text-center text-white space-y-3">
            <h1 className="text-2xl sm:text-3xl font-bold">
              Section Overview
            </h1>
            <p className="text-sm sm:text-base text-white/90 max-w-md mx-auto">
              Learn how to quickly identify IELTS Task 2 essay types and use the
              right structure to boost your score.
            </p>
          </div>

          {/* Card */}
          <div className="bg-rose-50 text-rose-950 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            
            {/* Intro */}
            <p className="text-sm sm:text-base leading-relaxed">
              In IELTS Writing Task 2, different questions require different
              essay structures. Many students lose marks because they use the
              wrong format. This lesson will help you recognize essay types and
              organize your ideas effectively.
            </p>

            {/* Learning Goals */}
            <div>
              <h2 className="font-semibold text-lg mb-3">
                By the end, you will:
              </h2>

              <ul className="space-y-3 text-sm sm:text-base">
                {[
                  "Identify different IELTS Task 2 essay types",
                  "Understand essay structure (intro, body, conclusion)",
                  "Choose the correct format for any question",
                  "Write clear introductions and conclusions",
                  "Develop strong body paragraphs with examples",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span>✅</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <Button
                variant="secondary"
                className="w-full sm:w-auto"
                onClick={() => navigate("/")}
              >
                Back to Home
              </Button>

              <Button
                variant="primary"
                className="w-full sm:w-auto"
                onClick={() => navigate("/lesson")}
              >
                Proceed to Lesson
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}