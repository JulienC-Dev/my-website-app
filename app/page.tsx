import Terminal from "./(landing)/_terminal/terminal";

export default function Home() {
  return (
    <main className="flex-grow bg-amber-100 overflow-auto md:my-10 md:mx-10 mt-10 mb-10 border-amber-300 border-2 font-[var(--font-roboto)] text-sm">
      <Terminal />
    </main>
  );
}
