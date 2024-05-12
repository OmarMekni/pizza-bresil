import { useAuth } from "@/context/AuthUserContext";
import { ScreenSpinner } from "../design-system/spinner/screen-spinner";
import { useRouter } from "next/router";
import { SessionStatusType } from "@/types/sessionStatusType";
import { GUEST, REGISERED } from "@/lib/session-status";

interface Props {
  children: React.ReactNode;
  sessionStatus?: SessionStatusType;
}
export const Session = ({ children, sessionStatus }: Props) => {
  const router = useRouter();
  const { authUserIsLoading, authUser } = useAuth();

  const onboardingIsCompleted = authUser?.userDocument?.onboardingIsCompleted;

  const shouldRedirectToOnboarding = () => {
    return (
      !authUserIsLoading &&
      authUser &&
      !onboardingIsCompleted &&
      router.asPath !== "/onboarding"
    );
  };

  const shouldNotRedirectToOnboarding = () => {
    return (
      !authUserIsLoading &&
      authUser &&
      onboardingIsCompleted &&
      router.asPath === "/onboarding"
    );
  };

  if (shouldRedirectToOnboarding()) {
    router.push("/onboarding");
    return <ScreenSpinner />;
  }

  if (shouldNotRedirectToOnboarding()) {
    router.push("/mon-espace");
    return <ScreenSpinner />;
  }

  if (sessionStatus === GUEST && !authUserIsLoading) {
    if (!authUser) {
      return <>{children}</>;
    } else {
      router.push("/mon-espace");
    }
  }

  if (sessionStatus === REGISERED && !authUserIsLoading) {
    if (authUser) {
      return <>{children}</>;
    } else {
      router.push("/connexion");
    }
  }

  if (!sessionStatus && !authUserIsLoading) {
    return <>{children}</>;
  }

  return <ScreenSpinner />;
};
