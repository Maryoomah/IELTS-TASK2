import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landingPage";
import LessonPreview from "./pages/lessonPreview";
import Lesson from "./pages/lessonPage";
import Practice from "./pages/practicePage";

export default function App() {
  const [appState, setAppState] = useState({
    question: null,
    answer: "",
    showFeedback: false,
    feedback: {
      band: null,
      corrections: [],
      suggestions: [],
    },
  });
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/preview" element={<LessonPreview />} />
      <Route path="/lesson" element={<Lesson />} />
      <Route
        path="/practice"
        element={<Practice appState={appState} setAppState={setAppState} />}
      />
    </Routes>
  );
}
