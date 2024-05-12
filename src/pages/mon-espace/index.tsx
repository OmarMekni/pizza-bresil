import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { ProfileContainer } from "@/ui/modules/user-profile/profile/profile.container";
import { REGISERED } from "@/lib/session-status";

export default function UserAccount() {
  return (
    <>
      <Seo title="Mon espace" description="Description" />

      <Layout withSidebar sessionStatus={REGISERED}>
        <ProfileContainer />
      </Layout>
    </>
  );
}
