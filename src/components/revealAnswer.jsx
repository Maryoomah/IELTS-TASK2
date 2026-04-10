import { useState } from "react";

export default function RevealAnswer({ children }) {
  const [show, setShow] = useState(false);

  return (
    <div>
      {!show ? (
        <button
          onClick={() => setShow(true)}
          className="px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700"
        >
          Reveal Band 7+ Sample Response
        </button>
      ) : (
        <pre className="bg-rose-100 p-4 rounded whitespace-pre-wrap mt-4">
          {children}
        </pre>
      )}
    </div>
  );
}