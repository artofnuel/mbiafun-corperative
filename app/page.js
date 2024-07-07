import Hello from "./components/home/Hello";
import Hero from "./components/home/Hero";
import Mission from "./components/home/Mission";
import Services from "./components/home/Services";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Hero />
      <Mission />
      <Services />
    </main>
  );
}
