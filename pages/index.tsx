import Image from "next/image";
import { Inter } from "next/font/google";
import { Nav } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Nav />
    </div>
  );
}
