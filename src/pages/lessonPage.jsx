import { useState, useEffect } from "react";
import LessonLayout from "../components/lessonLayout";
import Collapsible from "../components/collapsible";
import TipBox from "../components/tipBox";
import { essayTypes } from "../data/ieltsTask2";
import RevealAnswer from "../components/revealAnswer";
import Button from "../components/button";
import { Structure } from "../data/structure";
import StructureCard from "../components/structureCard";
import { useNavigate } from "react-router-dom";

export default function Lesson() {
  const navigate = useNavigate();

  const sections = [
    { id: "intro", title: "Introduction" },
    { id: "structure", title: "Structure" },
    { id: "peel", title: "PEEL Method" },
    { id: "linking", title: "Linking Words" },
    { id: "types", title: "Essay Types" },
  ];

  const [activeSection, setActiveSection] = useState("intro");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setProgress((scrollTop / docHeight) * 100);

      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <LessonLayout title="IELTS Writing Task 2">
      {/* ✅ MOBILE PROGRESS BAR */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 lg:hidden z-50">
        <div
          className="h-1 bg-rose-500 transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex">
        {/* SIDEBAR */}
        <aside className="hidden lg:flex flex-col w-64 h-screen sticky top-0 bg-white border-r p-6">
          <h2 className="font-bold text-lg mb-6">Lesson</h2>

          <nav className="flex flex-col gap-2">
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollTo(sec.id)}
                className={`cursor-pointer text-left text-sm transition ${
                  activeSection === sec.id
                    ? "text-rose-500 font-semibold"
                    : "text-gray-500 hover:text-rose-300"
                }`}
              >
                {sec.title}
              </button>
            ))}
          </nav>

          <div className="mt-10">
            <p className="text-sm mb-2">Progress</p>
            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
              <div
                className="bg-rose-500 h-2"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </aside>

        {/* MOBILE NAV */}

        <select
          onChange={(e) => scrollTo(e.target.value)}
          className="lg:hidden fixed top-4 left-1/2 -translate-x-1/2 bg-white border px-4 py-2 rounded-xl shadow"
        >
          {sections.map((sec) => (
            <option key={sec.id} value={sec.id}>
              {sec.title}
            </option>
          ))}
        </select>
        {/* MAIN CONTENT */}

        <main className="flex-1 px-4 sm:px-6 lg:px-10 py-10 space-y-8">
          {/* INTRO */}
          <section id="intro" className="max-w-4xl mx-auto">
            <h2 className="font-bold text-xl mb-4">
              What is IELTS Writing Task 2?
            </h2>
            <p>
              Writing Task 2 requires you to write a formal academic essay of{" "}
              <strong>at least 250 words within 40 minutes.</strong> It
              contributes 66% of your writing score.
            </p>
            <p>
              IELTS Writing Task 2 essays are typically organized into four
              paragraphs: an introduction, two body paragraphs, and a
              conclusion.
            </p>
          </section>

          {/* STRUCTURE */}
          <section id="structure" className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold my-6 text-rose-500">
              Essay Structure
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 mb-8">
              {Structure.map((item, index) => (
                <StructureCard key={index} {...item} />
              ))}
            </div>

            <TipBox>
              There are no correct opinions in IELTS. Examiners score clarity,
              organization, vocabulary, and grammar.
            </TipBox>
          </section>

          {/* PEEL */}
          <section id="peel" className="max-w-4xl mx-auto">
            <h2 className="mb-5 font-bold text-rose-500 text-2xl">
              How to Develop Strong Body Paragraphs
            </h2>

            <TipBox title="PEEL Method">
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>P — Point:</strong> State your main idea clearly.
                </li>
                <li>
                  <strong>E — Explain:</strong> Explain why the idea is true.
                </li>
                <li>
                  <strong>E — Example:</strong> Give a real or realistic
                  example.
                </li>
                <li>
                  <strong>L — Link:</strong> Connect your idea back to the essay
                  question.
                </li>
              </ul>

              <p className="mt-3">
                IELTS examiners reward essays where ideas are fully developed,
                not just listed. PEEL helps you achieve higher Task Response and
                Coherence scores.
              </p>
            </TipBox>
          </section>

          {/* LINKING */}
          <section id="linking" className="max-w-4xl mx-auto">
            <h2 className="mb-5 font-bold text-rose-500 text-2xl">
              Using Linking Words Effectively
            </h2>

            <p className="mb-3">
              Linking words (also called cohesive devices) help your ideas flow
              logically from one sentence to another. IELTS examiners use them
              to evaluate your{" "}
              <strong className="text-rose-500">Coherence & Cohesion</strong>{" "}
              score.
            </p>

            <TipBox title="Important Rule">
              Do not overuse linking words. Using many connectors incorrectly
              can reduce your band score. Use them naturally and only when
              needed.
            </TipBox>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="font-semibold">Adding Ideas</h4>
                <ul className="list-disc pl-6">
                  <li>Furthermore</li>
                  <li>Moreover</li>
                  <li>In addition</li>
                  <li>Additionally</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">Giving Examples</h4>
                <ul className="list-disc pl-6">
                  <li>For example</li>
                  <li>For instance</li>
                  <li>Such as</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">Contrasting Ideas</h4>
                <ul className="list-disc pl-6">
                  <li>However</li>
                  <li>On the other hand</li>
                  <li>Nevertheless</li>
                  <li>Although</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">Concluding</h4>
                <ul className="list-disc pl-6">
                  <li>In conclusion</li>
                  <li>Overall</li>
                  <li>To summarize</li>
                </ul>
              </div>
            </div>

            <TipBox title="Example Transformation">
              <p className="mb-2">❌ Weak connection:</p>
              <p className="italic">
                Technology helps communication. People talk more online.
              </p>

              <p className="mt-3 mb-2">✅ Improved cohesion:</p>
              <p className="italic">
                Technology helps communication. <strong>As a result</strong>,
                people interact more frequently through online platforms.
              </p>
            </TipBox>
          </section>

          {/* TYPES */}
          <section id="types" className="max-w-4xl mx-auto">
            <h2 className="text-rose-500 mb-5 font-bold text-2xl">
              The 5 Types of IELTS Essays
            </h2>

            <div className="space-y-4">
              {essayTypes.map((type) => (
                <Collapsible key={type.id} title={type.title}>
                  <p>{type.description}</p>

                  <h4 className="font-semibold">Sample Question</h4>
                  <p className="italic">{type.question}</p>

                  <h4 className="font-semibold">Structure</h4>
                  <ul className="list-disc pl-6">
                    {type.structure.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  <TipBox title="Try First">
                    Spend 3–5 minutes planning your ideas before revealing the
                    model structure. IELTS rewards independent thinking.
                  </TipBox>

                  <RevealAnswer>{type.sketch}</RevealAnswer>
                </Collapsible>
              ))}
            </div>
          </section>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" onClick={() => navigate("/preview")}>
              Back to Preview
            </Button>
            <Button variant="primary" onClick={() => navigate("/practice")}>
              Practice Now
            </Button>
          </div>
        </main>
      </div>
    </LessonLayout>
  );
}
