import Navbar from "@/components/Navbar";
import { Hero_top_right } from "@/components/utils/hero_top_right";

export default function Home() {
  return (
    <div className="text-black">
      <Navbar />
      <Hero_top_right />
    </div>
  );
}