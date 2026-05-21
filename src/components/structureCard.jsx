export default function StructureCard({ title, children }) {
  return (
    <div
      className="
        bg-white
        border border-rose-100
        rounded-3xl
        p-6 sm:p-8
        shadow-lg shadow-rose-100/40
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
      "
    >
      {/* Title */}
      <h3 className="text-2xl font-bold text-rose-500 mb-5">{title}</h3>

      {/* Main Text */}
      <div className="text-[15px] sm:text-base leading-7 text-slate-600 text-left">
        {children}
      </div>

      {/* Optional Points */}
      {/* {points && (
        <ul className="space-y-3 text-slate-600">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-3 leading-relaxed">
              <span className="mt-2 h-2 w-2 rounded-full bg-rose-400 shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
}
