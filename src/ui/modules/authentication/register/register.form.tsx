import { FormsType } from "@/types/forms";
import { Button } from "@/ui/components/design-system/button/button";
import { Input } from "@/ui/components/design-system/forms/input";

interface Props {
  form: FormsType;
}

export const RegisterForm = ({ form }: Props) => {
  const { onSubmit, errors, isLoading, register, handleSubmit } = form;
  console.log("form", form);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4">
      <Input
        isLoading={isLoading}
        placeholder="Johndoe@gmail.com"
        type="email"
        register={register}
        errors={errors}
        errorsMsg="Tu dois renseigner ce champ"
        id="email"
      />

      <Input
        isLoading={isLoading}
        placeholder="Mot de passe"
        type="password"
        register={register}
        errors={errors}
        errorsMsg="Tu dois renseigner ce champ"
        id="password"
      />
      <Input
        isLoading={isLoading}
        placeholder="Comment nous as-tu connus ?"
        type="text"
        register={register}
        errors={errors}
        errorsMsg="Tu dois renseigner ce champ"
        id="how_did_hear"
      />
      <Button isLoading={isLoading} type="submit" fullWith>
        S'inscrire
      </Button>
    </form>
  );
};
