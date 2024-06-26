import Hello from "./components/home/Hello";
import Hero from "./components/home/Hero";
import Mission from "./components/home/Mission";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Hero />
      <Mission />
    </main>
  );
}
