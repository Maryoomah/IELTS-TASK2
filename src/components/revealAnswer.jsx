import { useState } from "react";

export default function RevealAnswer({ children }) {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setShow(true)}
        className="px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700"
      >
        Reveal Band 7+ Sample Response
      </button>

      {show && (
<div className="mt-4 w-full rounded-2xl bg-rose-50 px-5 py-5 sm:px-8 sm:py-6 font-sans text-left max-w-none">
  {children}
</div>     
      )}
    </div>
  );
}