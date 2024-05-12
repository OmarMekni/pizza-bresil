import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/components/design-system/typography/typography";
import Image from "next/image";
import { RiPlayCircleLine } from "react-icons/ri";

export const CurrentCourseCtaView = () => {
  return (
    <div className="bg-gray-300">
      <Container className="py-24 text-center">
        <Typography variant="h2" component="h2" className="mb-3">
          Formation en art culinaire spécialisée en pizza brésilienne
        </Typography>
        <Typography variant="lead" component="h3" className="mb-5">
          Apprends à cuisiner comme de vrais chefs pizzaïolos brésiliens
        </Typography>
        <Typography
          variant="caption3"
          theme="gray"
          component="p"
          className="mb-16"
        >
          Si tu veux avoir la pizza brésilienne ici au Canada, suis cette
          formation complète !
        </Typography>
        <a href="https://www.instagram.com/pizzabresil" target="_blank">
          <div className="relative bg-gray-400 rounded h-[780px]">
            <div className="flex flex-col items-center justify-center gap-2 relative h-full text-white bg-gray z-10 rounded opacity-0 hover:opacity-95 animate">
              <RiPlayCircleLine size={42} />
              <Typography
                variant="caption2"
                theme="white"
                className="uppercase"
                weight="medium"
              >
                Lire la formation
              </Typography>
            </div>
            <Image
              fill
              src="assets/images/pizza-class.jpg"
              alt=""
              className="object-cover object-center rounded"
            />
          </div>
        </a>
      </Container>
    </div>
  );
};
