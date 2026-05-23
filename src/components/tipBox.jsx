export default function TipBox({ title, children }) {
  return (
    <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded">
      <strong>{title}</strong>
      <p>{children}</p>
    </div>
  );
} 