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
import Section from "../components/section";
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

      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <LessonLayout title="IELTS Writing Task 2">
        {/* Mobile progress bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-rose-100 lg:hidden z-50">
          <div
            className="h-1 bg-rose-500 transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="min-h-screen bg-linear-to-br from-rose-50 via-white to-rose-100">
          <div className="flex">
            {/* Sidebar */}
            <aside className="hidden lg:flex flex-col w-72 h-screen sticky top-0 bg-white/80 backdrop-blur border-r border-rose-100 p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-rose-500 font-semibold">
                   Lesson Outline
                </p>

               
              </div>

              <nav className="mt-8 flex flex-col gap-2">
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollTo(sec.id)}
                    className={`text-left px-4 py-3 rounded-xl text-sm transition ${
                      activeSection === sec.id
                        ? "bg-rose-500 text-white font-semibold shadow-md shadow-rose-200"
                        : "text-slate-500 hover:bg-rose-50 hover:text-rose-500"
                    }`}
                  >
                    {sec.title}
                  </button>
                ))}
              </nav>

              <div className="mt-auto">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-500">Progress</span>
                  <span className="font-semibold text-rose-500">
                    {Math.round(progress)}%
                  </span>
                </div>

                <div className="w-full bg-rose-100 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-rose-500 h-2 transition-all duration-200"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </aside>

            {/* Mobile nav */}
            <div className="lg:hidden fixed bottom-4 left-0 right-0 z-40 px-4">
              <select
                value={activeSection}
                onChange={(e) => scrollTo(e.target.value)}
                className="w-full bg-white border border-rose-100 px-4 py-3 rounded-xl shadow-lg text-sm text-slate-700"
              >
                {sections.map((sec) => (
                  <option key={sec.id} value={sec.id}>
                    {sec.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Main content */}
            <main className=" px-3 sm:px-6 lg:px-12 py-24 lg:py-12">
              <div className="w-full md:max-w-4xl mx-auto space-y-10">
                {" "}
                {/* Intro */}
                <section
                  id="intro"
                  className="bg-white border border-rose-100 rounded-3xl p-6 sm:p-8 shadow-xl shadow-rose-100/60"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-rose-500 font-semibold lg-hidden">
                    Lesson Introduction
                  </p>

                  <h2 className="mt-3 font-extrabold text-2xl sm:text-3xl text-slate-900">
                    What is IELTS Writing Task 2?
                  </h2>

                  <div className="mt-5 space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                    <p>
                      Writing Task 2 requires you to write a formal academic
                      essay of{" "}
                      <strong>at least 250 words within 40 minutes.</strong> It
                      contributes 66% of your writing score.
                    </p>

                    <p>
                      IELTS Writing Task 2 essays are usually organised into
                      four paragraphs: an introduction, two body paragraphs, and
                      a conclusion.
                    </p>
                  </div>
                </section>
                {/* Structure */}
                <section
                  id="structure"
                  className="bg-white border border-rose-100 rounded-3xl p-6 sm:p-8 shadow-xl shadow-rose-100/60"
                >
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Essay Structure
                  </h2>

                  <p className="mt-3 text-slate-600 text-sm sm:text-base">
                    A strong IELTS essay is not just about ideas. It is about
                    organising those ideas clearly.
                  </p>

                  <div className="mt-6 grid gap-6 grid-cols-1">
                    {Structure.map((item, index) => (
                      <StructureCard key={index} title={item.title}>
                        {item.component}
                      </StructureCard>
                    ))}
                  </div>

                  <div className="mt-6">
                    <TipBox title="IELTS TIP">
                      There are no correct opinions in IELTS. Examiners score
                      clarity, organisation, vocabulary, and grammar.
                    </TipBox>
                  </div>
                </section>
                {/* PEEL */}
                <section
                  id="peel"
                  className="bg-white border border-rose-100 rounded-3xl p-5 sm:p-8 shadow-xl shadow-rose-100/60"
                >
                  <h2 className="font-extrabold text-slate-900 text-2xl sm:text-3xl">
                    How to Develop Strong Body Paragraphs
                  </h2>

                  <p className="mt-3 text-slate-600 text-sm sm:text-base">
                    Body paragraphs should not just mention ideas. They should
                    explain and develop them.
                  </p>

                  <div className="mt-6">
                    <TipBox title="PEEL Method">
                      <ul className="space-y-3">
                        <li>
                          <strong>P — Point:</strong> State your main idea
                          clearly.
                        </li>
                        <li>
                          <strong>E — Explain:</strong> Explain why the idea is
                          true.
                        </li>
                        <li>
                          <strong>E — Example:</strong> Give a real or realistic
                          example.
                        </li>
                        <li>
                          <strong>L — Link:</strong> Connect your idea back to
                          the essay question.
                        </li>
                      </ul>

                      <p className="mt-4">
                        IELTS examiners reward essays where ideas are fully
                        developed, not just listed. PEEL helps you achieve
                        higher Task Response and Coherence scores.
                      </p>
                    </TipBox>
                  </div>
                </section>
                {/* Linking */}
                <section
                  id="linking"
                  className="bg-white border border-rose-100 rounded-3xl p-5 sm:p-8 shadow-xl shadow-rose-100/60"
                >
                  <h2 className="font-extrabold text-slate-900 text-2xl sm:text-3xl">
                    Using Linking Words Effectively
                  </h2>

                  <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
                    Linking words, also called cohesive devices, help your ideas
                    flow logically from one sentence to another. IELTS examiners
                    use them to evaluate your{" "}
                    <strong className="text-rose-500">
                      Coherence & Cohesion
                    </strong>{" "}
                    score.
                  </p>

                  <div className="mt-6">
                    <TipBox title="Important Rule">
                      Do not overuse linking words. Using many connectors
                      incorrectly can reduce your band score. Use them naturally
                      and only when needed.
                    </TipBox>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5 mt-6">
                    {[
                      {
                        title: "Adding Ideas",
                        words: [
                          "Furthermore",
                          "Moreover",
                          "In addition",
                          "Additionally",
                        ],
                      },
                      {
                        title: "Giving Examples",
                        words: ["For example", "For instance", "Such as"],
                      },
                      {
                        title: "Contrasting Ideas",
                        words: [
                          "However",
                          "On the other hand",
                          "Nevertheless",
                          "Although",
                        ],
                      },
                      {
                        title: "Concluding",
                        words: ["In conclusion", "Overall", "To summarize"],
                      },
                    ].map((group, index) => (
                      <div
                        key={index}
                        className="rounded-2xl border border-rose-100 bg-rose-50/60 p-5"
                      >
                        <h4 className="font-bold text-slate-900">
                          {group.title}
                        </h4>

                        <ul className="mt-3 space-y-2 text-sm text-slate-600">
                          {group.words.map((word) => (
                            <li key={word}>• {word}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <TipBox title="Example">
                      <p className="mb-2">❌ Weak connection:</p>
                      <p className="italic text-slate-600">
                        Technology helps communication. People talk more online.
                      </p>

                      <p className="mt-4 mb-2">✅ Improved cohesion:</p>
                      <p className="italic text-slate-600">
                        Technology helps communication.{" "}
                        <strong>As a result</strong>, people interact more
                        frequently through online platforms.
                      </p>
                    </TipBox>
                  </div>
                </section>
                {/* Types */}
                <section
                  id="types"
                  className="bg-white border border-rose-100 rounded-3xl p-4 sm:p-8 shadow-xl shadow-rose-100/60"
                >
                  <h2 className="text-slate-900 font-extrabold text-2xl sm:text-3xl">
                    The 5 Types of IELTS Essays
                  </h2>

                  <p className="mt-3 text-slate-600 text-sm sm:text-base">
                    Each essay type has a slightly different structure. Open
                    each one to study the question and suggested plan.
                  </p>

                  <div className="mt-6 space-y-4">
                    {essayTypes.map((type) => (
                      <Collapsible key={type.id} title={type.title}>
<div className="space-y-5 text-slate-600 leading-7 text-[15px] sm:text-base font-sans overflow-hidden">                          <p>{type.description}</p>

                          <div>
                            <h4 className="font-semibold text-slate-900">
                              Sample Question
                            </h4>
                            <p className="italic mt-1">{type.question}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-slate-900">
                              Structure
                            </h4>
                            <ul className="list-disc pl-6 mt-1">
                              {type.structure.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>

                          <TipBox title="Before you reveal">
                            Spend 3–5 minutes planning your ideas before
                            revealing the model structure. IELTS rewards
                            independent thinking.
                          </TipBox>

                          <RevealAnswer>{type.modelEssay}</RevealAnswer>
                        </div>
                      </Collapsible>
                    ))}
                  </div>
                </section>
                {/* Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="secondary"
                    onClick={() => navigate("/preview")}
                  >
                    Back to Preview
                  </Button>

                  <Button
                    className="md:hidden"
                    variant="primary"
                    onClick={() => navigate("/practice")}
                  >
                    Practice Now
                  </Button>
                </div>
              </div>
            </main>
          </div>
        </div>
        {/* Floating Practice Button */}
        <div className="hidden lg:block fixed bottom-6 right-6 z-50">
          <Button
            variant="primary"
            onClick={() => navigate("/practice")}
            className="shadow-2xl shadow-rose-300/50"
          >
            Start Practice →
          </Button>
        </div>
      </LessonLayout>
    </main>
  );
}
