import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { ForgetPasswordContainer } from "@/ui/modules/authentication/forget-password/forget-password.container";
import { GUEST } from "@/lib/session-status";

export default function ForgetPassword() {
  return (
    <>
      <Seo title="Mots de passe perdu" description="Page d'inscription" />

      <Layout sessionStatus={GUEST}>
        <ForgetPasswordContainer />
      </Layout>
    </>
  );
}
