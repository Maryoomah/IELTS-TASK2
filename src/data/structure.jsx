export const Structure = [
  {
    title: "Introduction",
    component: (
      <>
        <p>
          This is the opening paragraph of your essay. Here, you{" "}
          <strong>paraphrase the writing prompt</strong> and present your{" "}
          <strong>thesis statement</strong>.
        </p>

        <p className="mt-4">
          The thesis statement tells the reader your{" "}
          <span className="font-semibold text-rose-500">main position</span> or
          the purpose of your essay.
        </p>
      </>
    ),
  },

  {
    title: "Body Paragraphs",
    component: (
      <>
        <p>
          These paragraphs develop your main ideas. Each body paragraph should
          focus on <strong>one key point</strong>.
        </p>

        <ul className="mt-4 space-y-2">
          <li>• Topic sentence</li>
          <li>• Explanation</li>
          <li>• Example</li>
        </ul>
      </>
    ),
  },

  {
    title: "Conclusion",
    component: (
      <>
        <p>
          This is the final paragraph of your essay. Here, you{" "}
          <strong>restate your thesis</strong>.
        </p>

        <p className="mt-4">
          You should{" "}
          <span className="font-semibold text-rose-500">
            not introduce new ideas
          </span>{" "}
          in the conclusion.
        </p>
      </>
    ),
  },
];
