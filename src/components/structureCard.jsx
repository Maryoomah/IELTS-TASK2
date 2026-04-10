export default function StructureCard({ title, details, points }) {
  return (
    <div className="bg-white border border-rose-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
      
      {/* Title */}
      <h3 className="text-lg font-semibold text-rose-600 mb-3">
        {title}
      </h3>

      {/* Main Text */}
      <p className="text-gray-700 leading-relaxed mb-4">
        {details}
      </p>

      {/* Optional Points */}
      {points && (
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
}