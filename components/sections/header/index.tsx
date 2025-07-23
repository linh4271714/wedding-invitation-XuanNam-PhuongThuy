import CTA from "./CTA";
import Hero from "./Hero";
import Nav from "./Nav";

export default function Header() {
  return (
    <article className="w-full">
      <CTA />
      <header className="flex justify-between items-center max-w-8xl h-16 m-auto px-6">
        <Hero />
        <Nav />
      </header>
    </article>
  );
}
