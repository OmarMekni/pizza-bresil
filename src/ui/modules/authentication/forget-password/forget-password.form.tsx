import { FormsType } from "@/types/forms";
import { Button } from "@/ui/components/design-system/button/button";
import { Input } from "@/ui/components/design-system/forms/input";

interface Props {
  form: FormsType;
}

export const ForgetPasswordForm = ({ form }: Props) => {
  const { onSubmit, errors, isLoading, register, handleSubmit } = form;
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
        isAutocompleted
      />

      <Button isLoading={isLoading} type="submit" fullWith>
        Envoyer
      </Button>
    </form>
  );
};
