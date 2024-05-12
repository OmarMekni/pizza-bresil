import { LinkTypes } from "@/lib/link-type";
import { Container } from "../../container/container";
import { Button } from "../button/button";
import { Typography } from "../typography/typography";
import Image from "next/image";

export const CallToActionView = () => {
  return (
    <div className="relative overflow-hidden bg-primary">
      <Container className="py-20">
        <div className="relative z-10 max-w-3xl space-y-5">
          <Typography variant="h2" theme="white" component="h2">
            Développe tes compétences dès maintenant
          </Typography>
          <div>
            <Button
              variant="gray-800"
              baseUrl="/"
              
              linkType={LinkTypes.EXTERNAL}
            >
              Formation master pizzaïolo
            </Button>
          </div>
        </div>
        <div>
          <Image
            width={1210}
            height={1210}
            src="/assets/svg/bomb.svg"
            alt="une bombe"
            className="absolute -bottom-[620px] right-[0px]"
          />
        </div>
      </Container>
    </div>
  );
};
