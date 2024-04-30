
import { Inter } from "next/font/google";
import { Seo } from "@/ui/components/seo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Seo title="Pizza dd Brésil" description="Application pizza brésil"/>
    <h1>Ciao</h1>
    <h2>Benvenuto</h2>
    </>
  );
}
