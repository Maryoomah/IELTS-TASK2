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

  return (
    <LessonLayout title="IELTS Writing Task 2">
      {/* INTRO */}
      <section>
        <h2 className="font-bold">What is IELTS Writing Task 2?</h2>

        <p>
          Writing Task 2 requires you to write a formal academic essay of{" "}
          <strong>at least 250 words within 40 minutes.</strong> It contributes
          66% of your writing score.
        </p>
        <p>
          IELTS Writing Task 2 essays are typically organized into four
          paragraphs: an introduction, two body paragraphs, and a conclusion.
        </p>
        <section>
          <h2 className="text-2xl font-bold my-6 text-rose-500">
            Essay Structure
          </h2>

          <div className="space-y-6 mb-8">
            {Structure.map((item, index) => (
              <StructureCard key={index} {...item} />
            ))}
          </div>
        </section>
        <TipBox>
          There are no correct opinions in IELTS. Examiners score clarity,
          organization, vocabulary, and grammar.
        </TipBox>
      </section>
      <section>
        <h2 className="mb-5 font-bold text-rose-500">
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
              <strong>E — Example:</strong> Give a real or realistic example.
            </li>
            <li>
              <strong>L — Link:</strong> Connect your idea back to the essay
              question.
            </li>
          </ul>

          <p className="mt-3">
            IELTS examiners reward essays where ideas are fully developed, not
            just listed. PEEL helps you achieve higher Task Response and
            Coherence scores.
          </p>
        </TipBox>
      </section>
      <section>
        <h2 className="mb-5 font-bold text-rose-500">
          Using Linking Words Effectively
        </h2>
        <p className="mb-3">
          Linking words (also called cohesive devices) help your ideas flow
          logically from one sentence to another. IELTS examiners use them to
          evaluate your{" "}
          <strong className="text-rose-500">Coherence & Cohesion</strong> score.
        </p>
        <TipBox title="Important Rule">
          Do not overuse linking words. Using many connectors incorrectly can
          reduce your band score. Use them naturally and only when needed.
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
        <a
          href="https://ieltsliz.com/linking-words-for-writing/"
          target="_blank"
          className="my-5 font-bold text-rose-500 italic"
        >
          Check out a more comprehensive list of linking words
        </a>
        <TipBox title="Example Transformation">
          <p className="mb-2">❌ Weak connection:</p>
          <p className="italic">
            Technology helps communication. People talk more online.
          </p>

          <p className="mt-3 mb-2">✅ Improved cohesion:</p>
          <p className="italic">
            Technology helps communication. <strong>As a result</strong>, people
            interact more frequently through online platforms.
          </p>
        </TipBox>{" "}
      </section>

      {/* ESSAY TYPES */}
      <section>
        <h2 className="text-rose-500 mb-5 font-bold">
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
                Spend 3–5 minutes planning your ideas before revealing the model
                structure. IELTS rewards independent thinking.
              </TipBox>

              <RevealAnswer>{type.sketch}</RevealAnswer>
            </Collapsible>
          ))}
        </div>
      </section>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="secondary" onClick={() => navigate("/preview")}>
          Back to Preview
        </Button>
        <Button variant="primary" onClick={() => navigate("/practice")}>
          Practice Now{" "}
        </Button>
      </div>
    </LessonLayout>
  );
}
