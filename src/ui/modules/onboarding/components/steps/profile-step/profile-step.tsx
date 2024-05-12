import { BaseComponentProps } from "@/types/onboarding-steps-list";
import { OnboardingFooter } from "../footer/onboarding-footer";
import { Container } from "@/ui/components/container/container";
import { OnboardingTabs } from "../../tabs/onboarding-tabs";
import { Typography } from "@/ui/components/design-system/typography/typography";
import { ProfileStepForm } from "./profile-step-form";
import { SubmitHandler, useForm } from "react-hook-form";
import { OnboardingProfileFormFieldsType } from "@/types/forms";
import { useToggle } from "@/hooks/use-toggle";
import { firestoreUpdateDocument } from "@/api/firestore";
import { useAuth } from "@/context/AuthUserContext";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { updateUserIdentificationData } from "@/api/authentication";

export const ProfileStep = ({
  prev,
  next,
  isFirstStep,
  isFinalStep,
  stepsList,
  getCurrentStep,
}: BaseComponentProps) => {
  const { authUser, reloadAuthUserData } = useAuth();
  const { value: isLoading, setValue: setLoading } = useToggle();

  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    reset,
    setValue,
  } = useForm<OnboardingProfileFormFieldsType>();

  const { displayName, expertise, biography } = authUser.userDocument;

  //Display value exist
  useEffect(() => {
    const fieldsToUpdate: ("displayName" | "expertise" | "biography")[] = [
      "displayName",
      "biography",
      "expertise",
    ];

    for (const field of fieldsToUpdate) {
      setValue(field, authUser.userDocument[field]);
    }
  }, [authUser.userDocument, setValue]);

  const handleUpdateUserDocument = async (
    formData: OnboardingProfileFormFieldsType
  ) => {
    const { error } = await firestoreUpdateDocument(
      "users",
      authUser.uid,
      formData
    );
    if (error) {
      setLoading(false);
      toast.error(error.message);
      return;
    }
    setLoading(false);
    reset();
    next();
  };

  const onSubmit: SubmitHandler<OnboardingProfileFormFieldsType> = async (
    formData
  ) => {
    setLoading(true);

    if (
      displayName !== formData.displayName ||
      expertise !== formData.expertise ||
      biography !== formData.biography
    ) {
      if (
        displayName !== formData.displayName ||
        authUser.displayName !== formData.displayName
      ) {
        const data = {
          displayName: formData.displayName,
        };

        const { error } = await updateUserIdentificationData(
          authUser.uid,
          data
        );

        if (error) {
          setLoading(false);
          toast.error(error.message);
          return;
        }
      }

      handleUpdateUserDocument(formData);
    }
    setLoading(false);
    next();
  };

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
                Présente-toi !
              </Typography>
              <Typography variant="body-base" component="p" theme="gray">
                Dis-nous tout sur toi ! Remplis notre formulaire de présentation
                pour qu'on puisse mieux te connaître. On veut savoir qui tu es,
                ce que tu fais et comment t'as atterri ici. Plus on en saura sur
                toi, mieux on pourra personnaliser ton expérience sur notre
                plateforme.
              </Typography>
            </div>
          </div>

          <div className="flex items-center h-full col-span-6">
            <div className="flex justify-end w-full">
              <ProfileStepForm
                form={{
                  errors,
                  control,
                  register,
                  handleSubmit,
                  onSubmit,
                  isLoading,
                }}
              />
            </div>
          </div>
        </Container>
      </div>
      <OnboardingFooter
        prev={prev}
        next={handleSubmit(onSubmit)}
        isFirstStep={isFirstStep}
        isFinalStep={isFinalStep}
        isLoading={isLoading}
      />
    </div>
  );
};
