import { BaseComponentProps } from "@/types/onboarding-steps-list";
import { Button } from "@/ui/components/design-system/button/button";
import { OnboardingFooter } from "../footer/onboarding-footer";
import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/components/design-system/typography/typography";
import Image from "next/image";
import { OnboardingTabs } from "../../tabs/onboarding-tabs";

export const WelcomeStep = ({
  prev,
  next,
  isFirstStep,
  isFinalStep,
  stepsList,
  getCurrentStep,
}: BaseComponentProps) => {
  return (
    <div className="relative h-screen pb-[91px]">
      <div className="h-full overflow-auto">
        <Container className="grid h-full grid-cols-12">
          <div className="relative z-10 flex items-center h-full col-span-6 py-10">
            <div className="w-full space-y-5 pb-4.5">
              <OnboardingTabs
                tabs={stepsList}
                getCurrentStep={getCurrentStep}
              />

              <Typography variant="h1" component="h1">
                Bienvenue dans<br/> la cuisine de<br/> Pizza Brésil
              </Typography>
              <Typography variant="body-base" component="p" theme="gray">
                Viens traîner avec des chefs pizzaiolos aussi fous que toi,
                partage tes<br/> recettes et reçois des retours constructifs. Prêt à
                créer de nouveaux<br/> plats ou des recettes incroyables?
              </Typography>
            </div>
          </div>

          <div className="flex items-center h-full col-span-6">
            <div className="w-full">
              <Image
                src="/assets/svg/restaurant.svg"
                alt="Description image"
                width={811}
                height={596}
                priority
              />
            </div>
          </div>
        </Container>
      </div>
      <OnboardingFooter
        next={next}
        isFirstStep={isFirstStep}
        isFinalStep={isFinalStep}
      />
    </div>
  );
};
