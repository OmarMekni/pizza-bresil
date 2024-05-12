import { Container } from "@/ui/components/container/container";
import { Box } from "@/ui/components/design-system/box/box";
import { Typography } from "@/ui/components/design-system/typography/typography";
import Image from "next/image";
import Link from "next/link";
import { LoginForm } from "../login/login.form";
import { ForgetPasswordForm } from "./forget-password.form";
import { FormsType } from "@/types/forms";

interface Props {
  form: FormsType;
}

export const ForgetPasswordView = ({ form }: Props) => {
  return (
    <Container className="grid grid-cols-2 gap-20 mb-32">
      <div className="flex items-center">
        <div className="relative w-full h-[531px]">
          <Image
            fill
            src="/assets/images/character-2.png"
            alt="Description ..."
            className="object-scale-down"
          />
        </div>
      </div>
      <div className="flex items-center">
        <Box padding_y="py-5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" component="h1">
              Mot de passe perdu?
            </Typography>

            <Typography variant="caption4" component="span" theme="primary">
              <Link href="/connexion">Connexion</Link>
            </Typography>
          </div>
          <ForgetPasswordForm form={form}/>
        </Box>
      </div>
    </Container>
  );
};
