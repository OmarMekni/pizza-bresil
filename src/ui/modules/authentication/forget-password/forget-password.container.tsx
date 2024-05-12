import { sendEmailToResetPassword } from "@/api/authentication";
import { useToggle } from "@/hooks/use-toggle";
import { ForgetPasswordFormFielsType } from "@/types/forms";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ForgetPasswordView } from "./forget-password.view";

export const ForgetPasswordContainer = () => {
  const router = useRouter();
  const { value: isLoading, setValue: setIsLoading } = useToggle();

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<ForgetPasswordFormFielsType>();

  const handleResetPassword = async ({email}: ForgetPasswordFormFielsType) => {

    const { error } = await sendEmailToResetPassword(email);
    
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    toast.success(`Un e-mail a été expédie à l'adresse ${email}`);
    setIsLoading(false);
    reset();
    router.push("/connexion");
  };

  const onSubmit: SubmitHandler<ForgetPasswordFormFielsType> = async (
    formData
  ) => {
    setIsLoading(true);
    handleResetPassword(formData);
  };

  return (
    <ForgetPasswordView
      form={{
        errors,
        register,
        handleSubmit,
        onSubmit,
        isLoading,
      }}
    />
  );
};
