export default function Button({
  children,
  variant = "primary", // "primary" | "secondary"
  loading = false, // 👈 add this
  disabled = false,
  onClick,
  type = "button",
  className = "",
}) {
  const isDisabled = loading || disabled;
  const base =
    "px-6 py-3 text-sm md:text-base font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-rose-600  text-white hover:bg-rose-700 focus:ring-rose-400 shadow-sm cursor-pointer" ,

    secondary:
      "border-2 border-rose-600 text-rose-600 bg-white hover:bg-rose-50 focus:ring-rose-300 cursor-pointer",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {loading ? "Loading..." : children}{" "}
    </button>
  );
}
