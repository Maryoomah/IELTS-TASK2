export default function Section({
  id,
  children,
  className = "",
  containerClassName = "",
  ...props
}) {
  return (
    <section id={id} className={`py-20 lg:py-24 ${className}`} {...props}>
      <div
        className={`
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          ${containerClassName}
        `}
      >
        {children}
      </div>
    </section>
  );
}
