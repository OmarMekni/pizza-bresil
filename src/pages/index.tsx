import { Inter } from "next/font/google";
import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { LandingPageContainer } from "@/ui/modules/landing-page/landing-page.container";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Seo title="Pizza Brésil" description="Application pizza brésil" />

      <Layout isDisplayBreadCrumbs={false}>
        <LandingPageContainer/>
      </Layout>
      
    </>
  );
}
