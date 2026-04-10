import Button from "../components/button";
import { useNavigate } from "react-router-dom";

export default function LessonPreview() {
  const navigate = useNavigate();

  return (
    <main>
      <section className="relative bg-gradient-to-br from-rose-500 to-rose-800 min-h-screen overflow-hidden flex items-center justify-center">
        {/* Background image */}
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage: "url('/logo.jpg')",
          }}
        />

        {/* Centered Content */}
        <div className="relative text-center bg-rose-50 text-rose-950 space-y-6 max-w-2xl px-6 py-8 rounded-xl">
          <h1 className=" text-2xl font-bold">Section Overview</h1>
          <p>
            In IELTS Writing Task 2, different questions require different essay
            structures. Many students lose marks because they use the wrong
            format. This section aims to help you understand how to recognize
            essay types instantly and organize your ideas effectively.
          </p>
          <h1 className="text-2xl font-semibold">
    By the end of the lesson, you will be able to:
          </h1>

          <ul className="space-y-2">
            <li>Identify the different types of IELTS Task 2 essays</li>
            <li>
              Explain the structure of an essay (introduction, body paragraphs,
              and conclusion)
            </li>
            <li>
              Choose the correct structure for any IELTS task 2 writing prompt
            </li>

            <li> Write clear introductions and conclusions</li>
            <li>Develop strong body paragraphs using examples </li>
          </ul>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" onClick={() => navigate("/")}>
              Back to Home
            </Button>
            <Button variant="primary" onClick={() => navigate("/lesson")}>
              Proceed to Lesson
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
