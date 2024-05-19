import Image from "next/image";
import { Button } from "../design-system/button/button";
import { Typography } from "../design-system/typography/typography";

export const CallsToActionSideBar = () => {
  return (
    <>
      <div className="relative flex flex-col justify-center gap-5 px-8 py-12 overflow-hidden rounded pb-44 bg-primary">
        <Typography
          variant="lead"
          theme="white"
          weight="medium"
          className="text-center"
        >
          Récompense nos efforts
        </Typography>
        <div className="flex justify-center">
          <Button
            variant="success"
            baseUrl="https://www.interac.ca/fr/consommateur/produits/virement-interac/"
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
          className="absolute -bottom-10 transform -translate-x-1/2 left-1/2"
        />
      </div>

      <div className="relative flex flex-col justify-center px-8 py-5  rounded pb-44 bg-secondary-300">
        <Typography
          variant="h5"
          theme="black"
          weight="medium"
          className="text-center pt-2"
        >
          Rejoins-nous sur FaceBook
        </Typography>
        <div className="flex justify-center pt-5 pb-20">
          <Button
            variant="gray-800"
            baseUrl="https://www.facebook.com/pizzabresil/"
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
          className="absolute top-[calc(100%-201px)] left-1/2 transform -translate-x-28"
        />
      </div>
    </>
  );
};
