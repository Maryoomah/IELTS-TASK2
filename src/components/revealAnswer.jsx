import { useState } from "react";
export default function RevealAnswer({ children }) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShow(true)}
        className="px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 "
      >
        Reveal Band 7+ Sample Response
      </button>

      {show && (
        <div className="mt-4 w-full rounded-2xl bg-rose-50 p-4 sm:p-6 font-sans text-left">
          {children}
        </div>
      )}
    </div>
  );
}
