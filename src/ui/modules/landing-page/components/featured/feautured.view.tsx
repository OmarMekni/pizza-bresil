import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/components/design-system/button/button";
import { Typography } from "@/ui/components/design-system/typography/typography";
import { SocialNetworksButtons } from "@/ui/components/navigation/social-networks-buttons";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";
interface FeaturesListInterface {
  imagePath: string;
  imageAlt: string;
  title: string;
  description: string;
}

const featuresData: FeaturesListInterface[] = [
  {
    imagePath: "/assets/svg/floppy.svg",
    imageAlt: "illustration",
    title: "Recettes",
    description: "Consulte et partage des recettes pour les pizzaïolos",
  },
  {
    imagePath: "/assets/svg/gamepad.svg",
    imageAlt: "illustration",
    title: "Entrainement",
    description: "Entraîne-toi à devenir meilleur et trouve de l’inspiration",
  },
  {
    imagePath: "/assets/svg/speaker.svg",
    imageAlt: "illustration",
    title: "Visibilité",
    description: "Expose tes idées et crée-toi des opportunités !",
  },
  {
    imagePath: "/assets/svg/compass.svg",
    imageAlt: "illustration",
    title: "Relations",
    description: "Connecte-toi avec des chefs professionnels et booste ta carrière !",
  },
];

export const FeaturedView = () => {
  const featuredList = featuresData.map((feature) => (
    <div
      key={uuidv4()}
      className="flex flex-col items-center justify-center bg-white rounded p-7"
    >
      <div className="relative w-[130px] h-[130px] rounded-full mb-6 p-10 overflow-hidden">
        <Image
          fill
          src={feature.imagePath}
          alt={feature.imageAlt}
          className="object-scale-down blur-2xl"
        />
        <Image
          fill
          src={feature.imagePath}
          alt={feature.imageAlt}
          className="object-scale-down"
        />
      </div>
      <Typography
        variant="lead"
        component="h3"
        weight="medium"
        className="text-center mb-2.5"
      >
        {feature.title}
      </Typography>
      <Typography
        variant="body-base"
        component="p"
        theme="gray"
        className="text-center"
      >
        {feature.description}
      </Typography>
    </div>
  ));

  return (
    <div className="bg-gray-300">
      <Container className="grid grid-cols-12 gap-24 py-24">
        <div className="grid grid-cols-2 gap-7 col-span-7">{featuredList}</div>
        <div className="flex flex-col justify-between col-span-5 gap-10">
          <div>
            <Typography variant="h2" component="h2" className="mb-5">
              L'endroit le plus délicieux pour devenir chef pizzaïolo
            </Typography>

            <Typography
              variant="body-lg"
              theme="gray"
              component="p"
              className="mb-8"
            >
              Partage de recettes, de conseils, de vidéos, de techniques
              culinaires et de formations. Rejoins la <br/>communauté et allume le
              four. Let's go !
            </Typography>

            <Button
              variant="secondary"
              baseUrl="/"
              icon={{ icon: RiArrowRightLine }}
              iconPosition="left"
            >
              Commencer
            </Button>
          </div>
          <div>
            <Typography
              variant="caption3"
              theme="gray"
              component="div"
              className="mb-4"
            >
              Nos réseaux sociaux
            </Typography>
            <SocialNetworksButtons />
          </div>
        </div>
      </Container>
    </div>
  );
};
