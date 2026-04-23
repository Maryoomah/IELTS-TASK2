import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import { questions } from "../data/questions";
import { reviewEssay } from "../data/reviewEssay";
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
    const data = {
      essay,
      question,
      type: essayType,
    };

    //  review
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

      // TEMP: show success message
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <main className="max-w-3xl mx-auto p-6">
      {/* Question */}
      <select
        value={essayType}
        onChange={(e) => {
          const newType = e.target.value;
          setEssayType(newType);
          setQuestion(getRandomQuestion(newType));
        }}
        className="mb-4 p-2 border border-rose-200 rounded-lg"
      >
        <option value="opinion">Opinion</option>
        <option value="discussion">Discussion</option>
        <option value="advantages">Advantages/Disadvantages</option>
        <option value="problem">Problem/Solution</option>
        <option value="double">Double Question</option>
      </select>
      <h2 className="text-xl font-bold mb-4 text-rose-500">
        Practice Question
      </h2>
      <p className="mb-6 text-gray-700">{question}</p>

      {/* Textarea */}
      <textarea
        value={essay}
        onChange={(e) => setEssay(e.target.value)}
        placeholder="Write your essay here..."
        className="w-full h-60 border border-rose-400 focus:outline-none focus:border-rose-500 rounded-xl p-4 mb-4"
      />
      <Button variant="primary" onClick={() => handleSubmit()}>
        Submit Essay
      </Button>

      {/* Feedback */}
      {feedback && (
        <div className="mt-6 p-5 bg-white border border-rose-500 rounded-2xl shadow-sm">
          <h3 className="font-semibold mb-3 text-rose-600">Feedback:</h3>
          <p className="whitespace-pre-line text-gray-700">{feedback}</p>
        </div>
      )}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="secondary" onClick={() => navigate("/lesson")}>
          Back to Lesson{" "}
        </Button>
        <Button
          variant="primary"
          onClick={() => setQuestion(getRandomQuestion(essayType))}
        >
          New Question
        </Button>
           <Button
          variant="secondary"
        >
          View Your Essays
        </Button>
      </div>
    </main>
  );
}
