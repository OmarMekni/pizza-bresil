import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { ProfileContainer } from "@/ui/modules/user-profile/profile/profile.container";
import { REGISERED } from "@/lib/session-status";
import { Session } from "@/ui/components/session/session";
import { OnboardingContainer } from "@/ui/modules/onboarding/onboarding.container";

export default function Onboarding() {
  return (
    <>
      <Seo title="Onboarding" description="Description de la page Onboarding" />

      <Session sessionStatus={REGISERED}>
        <OnboardingContainer />
      </Session>
    </>
  );
}
