export default function LessonLayout({ title, children }) {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
        <header className="mb-2">
          <h1 className="text-4xl font-bold text-rose-600">{title}</h1>
        </header>   

        <article className="space-y-6 leading-7">{children}</article>
    
    </main>
  );
}
