import { FormsType } from "@/types/forms";
import { Button } from "@/ui/components/design-system/button/button";
import { Input } from "@/ui/components/design-system/forms/input";
import { Textarea } from "@/ui/components/design-system/forms/textarea";
import { Typography } from "@/ui/components/design-system/typography/typography";
import { UploadAvatar } from "@/ui/components/upload-avatar/upload-avatar";

interface Props {
  form: FormsType;
  imagePreview: string | ArrayBuffer | null;
  uploadProgress: number;
  handleImageSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ProfileForm = ({
  form,
  imagePreview,
  uploadProgress,
  handleImageSelect,
}: Props) => {
  const { register, errors, isLoading, onSubmit, handleSubmit } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
      <div className="flex items-center justify-between py-5">
        <div>
          <UploadAvatar
            handleImageSelect={handleImageSelect}
            imagePreview={imagePreview}
            uploadProgress={uploadProgress}
            isLoading={isLoading}
            variant="outline"
          />
        </div>
        <div className="flex items-end gap-1">
          <Typography variant="h1" component="div">
            1586
          </Typography>
          <Typography
            variant="caption4"
            component="div"
            theme="gray"
            className="mb-3"
          >
            Abonnés
          </Typography>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-6 space-y-4">
          <Input
            label="Nom d'utilisateur"
            isLoading={isLoading}
            placeholder="Jhon Doe"
            type="text"
            register={register}
            errors={errors}
            errorsMsg="Tu dois reinsegner un pseudo"
            id="displayName"
          />

          <Input
            label="Expertise"
            isLoading={isLoading}
            placeholder="Chef débutant"
            type="text"
            register={register}
            errors={errors}
            errorsMsg="Tu dois reinsegner ton expertise"
            id="expertise"
          />
        </div>

        <div className="col-span-6 space-y-4">
          <Input
            label="Linkedin"
            isLoading={isLoading}
            placeholder="linkedin.com/jhon-doe"
            type="url"
            register={register}
            errors={errors}
            errorsMsg="Tu dois indiquer ton profile linkedin"
            id="linkedin"
            required={false}
          />

          <Input
            label="GitHub"
            isLoading={isLoading}
            placeholder="github.com/jhonDoe"
            type="url"
            register={register}
            errors={errors}
            errorsMsg="Tu dois indiquer ton profile GitHub"
            id="github"
            required={false}
          />
        </div>
      </div>

      <Textarea
        label="Biographie"
        rows={16}
        isLoading={isLoading}
        placeholder="Indique ta biographie..."
        register={register}
        errors={errors}
        errorsMsg="Tu dois indiquer ta biographie"
        id="biography"
        required={false}
      />

      <div className="flex justify-end">
        <Button isLoading={isLoading} type="submit">
          Enregistrer
        </Button>
      </div>
    </form>
  );
};
