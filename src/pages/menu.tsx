import { Inter } from "next/font/google";
import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { Container } from "@/ui/components/container/container";
import Image from "next/image";
import { Typography } from "@/ui/components/design-system/typography/typography";
import { Button } from "@/ui/components/design-system/button/button";

const inter = Inter({ subsets: ["latin"] });

export default function Menu() {
  return (
    <>
      <Seo title="Menu Pizza Brésil" description="Menu pizza brésil" />

      <Layout isDisplayBreadCrumbs={false}>
        <div className=" bg-heavenly-light pb-20">
          <Container className="flex py-20 space-x-10">
            <div className="flex flex-col space-y-10">
              <div className="relative justify-center gap-5 px-5 py-12 rounded pb-80 bg-secondary-300">
                <Typography
                  variant="h5"
                  theme="black"
                  weight="medium"
                  className="text-center pt-5 pb-10"
                >
                  Rejoins-nous sur FaceBook
                </Typography>
                <div className="flex justify-center pt-5">
                  <Button
                    variant="gray-800"
                    baseUrl="https://www.facebook.com/pizzabresil"
                    linkType="external"
                  >
                    Rejoindre
                  </Button>
                </div>
                <Image
                  width={186}
                  height={201}
                  src="/assets/svg/chef-face.svg"
                  alt="Description chef"
                  className="absolute  transform translate-x-12 translate-y-16"
                  // className="absolute bottom-10 transform -translate-x-1/2 left-1/2"
                />
              </div>

              <div className="relative flex flex-col h-full rounded bg-gray-600 py-12 ">
                <Typography
                  variant="h5"
                  theme="white"
                  weight="medium"
                  className="text-center pt-20 pb-10"
                >
                  Récompense nous efforts
                </Typography>
                <div className="flex justify-center pt-8">
                  <Button
                    variant="success"
                    baseUrl="https://www.interac.ca/fr/contenu/vie/dix-facons-dutiliser-virement-interac-pour-vous-faciliter-la-vie/"
                    linkType="external"
                  >
                    Faire un don libre
                  </Button>
                </div>
                <Image
                  width={183}
                  height={183}
                  src="/assets/svg/pig.svg"
                  alt="Description pig"
                  // className="absolute translate-x-5 translate-y-50"
                  className="absolute bottom-28  translate-x-20 "
                />
              </div>
            </div>

            <Image
              src="/assets/images/menu.jpg"
              alt="Menu pizza Brésil"
              height={500}
              width={700}
            />
          </Container>
        </div>
      </Layout>
    </>
  );
}
