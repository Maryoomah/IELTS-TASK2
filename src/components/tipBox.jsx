export default function TipBox({ children }) {
  return (
    <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded">
      <strong>IELTS Tip:</strong>
      <p>{children}</p>
    </div>
  );
}