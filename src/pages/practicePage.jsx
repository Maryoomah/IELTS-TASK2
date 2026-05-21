import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import { questions } from "../data/questions";
import { reviewEssay } from "../data/reviewEssay";
import { getUserId } from "../utils/getUserId";
export default function Practice() {
  const navigate = useNavigate();
  const [essay, setEssay] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [essayType, setEssayType] = useState("opinion");
  const [question, setQuestion] = useState("");

  const getRandomQuestion = (type) => {
    const list = questions[type];
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
  };

  useEffect(() => {
    setQuestion(getRandomQuestion(essayType));
  }, []);

const handleSubmit = async () => {

  const userId = getUserId();

  const data = {
    user_id: userId,
    essay,
    question,
    type: essayType,
  };

  const review = reviewEssay(essay);
  setFeedback(review);

  try {
    const res = await fetch("http://localhost:5000/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    console.log(result);

  } catch (err) {
    console.error(err);
  }
};

  const wordCount = essay.trim() ? essay.trim().split(/\s+/).length : 0;

  return (
    <main className="min-h-screen bg-linear-to-br from-rose-50 via-white to-rose-100 px-4 sm:px-6 py-10">
       <div className="m-8 sticky top-4" >
              <Button
                onClick={() => navigate(-1)}
              >
                ← Back
              </Button>
            </div>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-rose-500 font-semibold">
            IELTS Writing Practice
          </p>

          <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Practice Task 2 Essay Writing
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-600 leading-relaxed">
            Choose an essay type, write your response, and receive instant
            feedback based on your writing.
          </p>
        </div>

        {/* Main Card */}
        <div className="mt-10 bg-white border border-rose-100 rounded-3xl shadow-2xl shadow-rose-100/70 overflow-hidden">
          <div className="h-2 bg-linear-to-r from-rose-400 to-rose-600" />

          <div className="p-5 sm:p-8">
            {/* Top Controls */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Essay Type
                </label>

                <select
                  value={essayType}
                  onChange={(e) => {
                    const newType = e.target.value;
                    setEssayType(newType);
                    setQuestion(getRandomQuestion(newType));
                    setFeedback(null);
                  }}
                  className="w-full md:w-72 px-4 py-3 border border-rose-100 rounded-xl bg-rose-50/60 text-slate-700 focus:outline-none focus:ring-2 focus:ring-rose-300"
                >
                  <option value="opinion">Opinion</option>
                  <option value="discussion">Discussion</option>
                  <option value="advantages">Advantages/Disadvantages</option>
                  <option value="problem">Problem/Solution</option>
                  <option value="double">Double Question</option>
                </select>
              </div>

              <div className="text-sm text-slate-500">
                Word count:{" "}
                <span
                  className={
                    wordCount >= 250
                      ? "font-bold text-green-600"
                      : "font-bold text-rose-500"
                  }
                >
                  {wordCount}
                </span>
                <span className="text-slate-400"> / 250+</span>
              </div>
            </div>

            {/* Question */}
            <div className="mt-8 rounded-2xl border border-rose-100 bg-rose-50/70 p-5">
              <h2 className="text-lg font-bold text-slate-900">
                Practice Question
              </h2>

              <p className="mt-3 text-slate-700 leading-relaxed text-sm sm:text-base">
                {question}
              </p>
            </div>

            {/* Textarea */}
            <div className="mt-6">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Your Essay
              </label>

              <textarea
                value={essay}
                onChange={(e) => setEssay(e.target.value)}
                placeholder="Write your essay here..."
                className="w-full min-h-[320px] border border-rose-100 focus:outline-none focus:ring-2 focus:ring-rose-300 rounded-2xl p-5 text-slate-700 leading-relaxed resize-y"
              />
            </div>

            {/* Submit */}
            <div className="mt-5 flex justify-end">
              <Button variant="primary" onClick={handleSubmit}>
                Submit Essay
              </Button>
            </div>
          </div>
        </div>

        {/* Feedback */}
        {feedback && (
          <div className="mt-8 bg-white border border-rose-100 rounded-3xl shadow-xl shadow-rose-100/60 p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-rose-500 font-semibold">
              Writing Feedback
            </p>

            <h3 className="mt-3 text-2xl font-extrabold text-slate-900">
              Your Essay Review
            </h3>

            <p className="mt-5 whitespace-pre-line text-slate-600 leading-relaxed">
              {feedback}
            </p>
          </div>
        )}

        {/* Bottom Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" onClick={() => navigate("/lesson")}>
            Back to Lesson
          </Button>

          <Button
            variant="primary"
            onClick={() => {
              setQuestion(getRandomQuestion(essayType));
              setFeedback(null);
              setEssay("");
            }}
          >
            New Question
          </Button>

          <Button variant="secondary" to="/history">
            View Your Essays
          </Button>
        </div>
      </div>
    </main>
  );
}