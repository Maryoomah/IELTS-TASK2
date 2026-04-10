import { useNavigate } from "react-router-dom";
import Button from "../components/button";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <>
      <main>
        {/* hero */}
        <section className="relative bg-linear-to-br from-rose-500 to-rose-800 min-h-screen overflow-hidden ">
          <div
  className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none"
  style={{
    backgroundImage: "url('/logo.jpg')",
  }}
></div>
          <div className="text-center py-20">
            <div className="text-white space-y-5">
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                Master IELTS Task 2 Writing
              </h1>
              <p className="max-w-xl mx-auto opacity-90 ">
                Learn proven essay structure, practice with real questions, and
                get instant feedback — all in one guided flow.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" onClick={() => navigate("/preview")}>
                Start Lesson
              </Button>
              <Button variant="secondary" onClick={() => navigate("/practice")}>
                Try Practice Question
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-white/90 text-lg">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                📚 Clear essay structure
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                ✍️ Real IELTS questions
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                ⚡ Instant feedback
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
