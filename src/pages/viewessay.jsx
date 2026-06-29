import { useEffect, useState } from "react";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";
import { getUserId } from "../utils/getUserId";

export default function ViewEssays() {
  const [essays, setEssays] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = getUserId();
    fetch(`${import.meta.env.VITE_API_URL}/submissions?user_id=${userId}`)
      .then((res) => res.json())
      .then((data) => setEssays(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="min-h-screen bg-linear-to-br from-rose-50 via-white to-rose-100 px-4 sm:px-6 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Submitted Essays
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-600">
            Review the essays you have submitted during practice.
          </p>
        </div>

        {/* Content */}
        <div className="mt-10">
          {essays.length === 0 ? (
            <div className="bg-white border border-rose-100 rounded-3xl p-8 text-center shadow-xl shadow-rose-100/70">
              <h2 className="text-xl font-bold text-slate-900">
                No essays submitted yet
              </h2>

              <p className="mt-3 text-slate-600">
                Once you submit a practice essay, it will appear here.
              </p>

              <div className="mt-6">
                <Button variant="primary" onClick={() => navigate("/practice")}>
                  Start Practice
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {essays.map((essay) => (
                <div
                  key={essay.id}
                  className="bg-white border border-rose-100 rounded-3xl p-6 sm:p-8 shadow-xl shadow-rose-100/60"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <span className="inline-flex w-fit rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-rose-500">
                      {essay.type}
                    </span>
                  </div>

                  <h2 className="mt-4 text-lg sm:text-xl font-bold text-slate-900 leading-relaxed">
                    {essay.question}
                  </h2>

                  <div className="mt-5 rounded-2xl bg-slate-50 border border-slate-100 p-5">
                    <p className="text-slate-600 whitespace-pre-line leading-relaxed text-sm sm:text-base">
                      {essay.essay}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-8 flex justify-center">
          <Button variant="secondary" onClick={() => navigate("/practice")}>
            Back to Practice
          </Button>
        </div>
      </div>
    </main>
  );
}
