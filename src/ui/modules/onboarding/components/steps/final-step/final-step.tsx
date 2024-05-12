import { useAuth } from "@/context/AuthUserContext";
import { useToggle } from "@/hooks/use-toggle";
import { BaseComponentProps } from "@/types/onboarding-steps-list";
import { OnboardingFooter } from "../footer/onboarding-footer";
import { Container } from "@/ui/components/container/container";
import { OnboardingTabs } from "../../tabs/onboarding-tabs";
import { Typography } from "@/ui/components/design-system/typography/typography";
import { Logo } from "@/ui/components/design-system/logo/logo";
import { useCallback, useEffect, useRef } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

import confetti from "canvas-confetti";
import { firestoreUpdateDocument } from "@/api/firestore";
import { toast } from "react-toastify";

export const FinalStep = ({ isFinalStep }: BaseComponentProps) => {
  const { authUser, reloadAuthUserData } = useAuth();
  const { value: isLoading, toggle } = useToggle();

  //setting confetti animation
  const refAnimationInstance = useRef<((opts: any) => void) | null>(null);
  const getInstance = useCallback((instance: any) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio: number, opts: any) => {
    if (refAnimationInstance.current !== null) {
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      });
    }
  }, []);

  const fire = useCallback(() => {
    confetti({
      particleCount: Math.floor(200 * 0.25),
      spread: 26,
      startVelocity: 55,
      origin: { y: 0.7 },
    });

    confetti({
      particleCount: Math.floor(200 * 0.2),
      spread: 60,
      origin: { y: 0.7 },
    });

    confetti({
      particleCount: Math.floor(200 * 0.35),
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      origin: { y: 0.7 },
    });

    confetti({
      particleCount: Math.floor(200 * 0.1),
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 0.8,
      origin: { y: 0.7 },
    });

    confetti({
      particleCount: Math.floor(200 * 0.1),
      spread: 120,
      startVelocity: 45,
      origin: { y: 0.7 },
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      fire();
    }, 50);
  }, [fire]);

  const handleCloseOnboarding = async () => {
    toggle();
    const data = {
      onboardingIsCompleted: true,
    };
    const { error } = await firestoreUpdateDocument(
      "users",
      authUser.uid,
      data
    );
    if (error) {
      toggle();
      toast.error(error.message);
      return;
    }
    reloadAuthUserData();
    toggle();
  };

  return (
    <>
      <ReactCanvasConfetti
        refConfetti={getInstance}
        style={{
          zIndex: 9999,
          position: "fixed",
          width: "100%",
          height: "100%",
          top: -80,
          left: -0,
        }}
      />

      <div className="relative h-screen pb-[91px]">
        <div className="h-full overflow-auto">
          <Container className="h-full">
            <div className="relative z-10 flex items-center h-full py-10">
              <div className="w-full max-w-xl mx-auto space-y-5 pb-4.5">
                <div className="flex justify-center">
                  <Logo size="large" />
                </div>
                <Typography variant="h1" component="h1" className="text-center">
                  Félicitations!
                </Typography>
                <Typography
                  variant="body-base"
                  component="p"
                  theme="gray"
                  className="text-center"
                >
                  Tu fais maintenant partie des chefs pizzaïolos de Pizza Brésil
                  ! Nous sommes ravis de t'accueillir parmi nous. Tu vas pouvoir
                  te lancer dans cette aventure, partager tes recettes les plus
                  folles et rencontrer des chefs aussi passionnés que toi.
                  Alors, prépare-toi, car notre communauté est prête à te
                  pousser vers l'excellence et à te propulser au sommet de
                  l'arbre des maîtres pizzaïolos !
                </Typography>
              </div>
            </div>
          </Container>
        </div>
        <OnboardingFooter
          isFinalStep={isFinalStep}
          next={handleCloseOnboarding}
          // next={confetti}
          isLoading={isLoading}
        />
      </div>
    </>
  );
};
