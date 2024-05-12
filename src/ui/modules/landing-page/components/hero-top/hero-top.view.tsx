import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/components/design-system/button/button";
import { Typography } from "@/ui/components/design-system/typography/typography";
import Image from "next/image";

export const HeroTopView = () => {
  return (
    <Container className="relative pt-40 overflow-hidden pb-52">
      <div className="w-full max-w-2xl space-y-5">
        <Typography variant="h1" component="h1" className="mx-w-lg">
          Rejoins les maîtres de <br /> la pizza brésilienne !
        </Typography>
        <Typography
          variant="body-lg"
          theme="gray"
          component="p"
          className="mx-w-xl"
        >
          Ici, on ne se complique pas la vie, mais on cuisine comme des experts
          ! <br />
          Rejoins notre équipe de passionnés de la pizza.
        </Typography>
        <div className="space-x-5 pt-2.5">
          <Button baseUrl="/connexion/inscription">Commencer</Button>
          <Button
            baseUrl="https://www.google.com/maps/place/Pizza+Br%C3%A9sil/@45.4297921,-73.6415511,15z/data=!4m6!3m5!1s0x4cc911f9a9651f53:0xf40734fd89bb8976!8m2!3d45.4297921!4d-73.6415511!16s%2Fg%2F11y4gzxfch?hl=en&entry=ttu"
            linkType={"external"}
            variant="secondary"
          >
            En savoir plus{" "}
          </Button>
        </div>
      </div>
      <Image
        src="/assets/images/chef-pizza.jpg"
        alt="Illustration d'un chef pour matérialiser l'evolution du level des chef pizzaïolo"
        height={620}
        width={590}
        className="absolute top-0 right-0 z-0 pt-10"
      />
    </Container>
  );
};
