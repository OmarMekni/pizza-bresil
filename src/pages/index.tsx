
import { Inter } from "next/font/google";
import { Seo } from "@/ui/components/seo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Seo title="Pizza Brésil" description="Application pizza brésil"/>
    <h1>Ciao</h1>
    <h2>Benvenuto</h2>
    <div>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores cum perferendis facere tempore, odio illo quidem labore eligendi nostrum non iusto expedita dicta illum magnam veritatis quos cupiditate, aliquam ex!</p>
    </div>
    </>
  );
}
