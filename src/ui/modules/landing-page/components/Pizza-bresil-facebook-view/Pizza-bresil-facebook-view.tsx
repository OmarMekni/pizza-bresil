import { LinkTypes } from "@/lib/link-type";
import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/components/design-system/button/button";
import { Logo } from "@/ui/components/design-system/logo/logo";
import { Typography } from "@/ui/components/design-system/typography/typography";
import Image from "next/image";

export const PizzaBresilFacebookView = () => {
  return (
    <Container className="flex justify-between">
      <div className="flex flex-col justify-center max-w-2xl space-y-5">
        <div className="flex items-center gap-2">
          <Logo size="very-small" />
          <Typography variant="caption2" component="span" weight="medium">
            Pizza Brésil
          </Typography>
        </div>
        <Typography variant="h2" component="h2">
          Rejoins-nous sur la page FaceBook de Pizza Brésil
        </Typography>
        <Typography
          variant="body-lg"
          component="p"
          theme="gray"
          className="max-w-lg"
        >
          Rejoins-nous et obtiens de l’aide et des conseils pour préparer de
          stupéfiantes pizzas brésiliennes !{" "}
        </Typography>
        <Button baseUrl="https://www.facebook.com/pizzabresil" linkType={LinkTypes.EXTERNAL}>
          Rejoindre le groupe d'aide
        </Button>
      </div>

      <div className="relative w-[600px] h-[600px]">
        <Image
          fill
          src={"assets/svg/chef-face.svg"}
          alt="Groupe Facebook Pizza Brésil"
        />
      </div>
    </Container>
  );
};
