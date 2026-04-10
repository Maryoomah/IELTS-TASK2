import { useState } from "react";

export default function Collapsible({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-xl overflow-hidden shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-4 font-semibold bg-rose-100 hover:bg-rose-200 flex justify-between"
      >
        {title}
        <span>{open ? "−" : "+"}</span>
      </button>

      {open && <div className="p-6 space-y-5">{children}</div>}
    </div>
  );
}