import { RiCamera2Fill } from "react-icons/ri";
import { Avatar } from "../design-system/avatar/avatar";
import clsx from "clsx";
import { useAuth } from "@/context/AuthUserContext";

interface Props {
  handleImageSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  imagePreview: string | ArrayBuffer | null;
  uploadProgress: number;
  isLoading: boolean;
  variant?: "primary" | "outline";
}

export const UploadAvatar = ({
  handleImageSelect,
  imagePreview,
  uploadProgress,
  isLoading,
  variant = "primary",
}: Props) => {
  const { authUser } = useAuth();

  const uploadProgressBarStyle = `fixed top-0 left-0 w-full h-1 bg-secondary animate ${
    uploadProgress > 0 ? "" : "hidden"
  }`;

  return (
    <div className="flex items-center gap-5">
      <div
        className={uploadProgressBarStyle}
        style={{ width: `${uploadProgress}%` }}
      />

      <label
        className={clsx(
          isLoading ? "cursor-not-allowed" : "cursor-pointer",
          variant === "primary" && "bg-primary hover:bg-primary-400 text-white",
          variant === "outline" &&
            "bg-gray-300 hover:bg-gray-600/60 border border-gray-600 text-gray-800",
          "inline-block rounded px-[18px] py-[15px] text-caption2 font-medium animate" 
        )}
      >
        <div className="flex items-center gap-2">
          <RiCamera2Fill />
          <span>Choisir un fichier</span>
        </div>

        <input
          type="file"
          disabled={isLoading}
          onChange={handleImageSelect}
          className="hidden"
        />
      </label>
      <Avatar
        size="large-2"
        alt="Avatar"
        isLoading={isLoading}
        src={
          imagePreview
            ? typeof imagePreview === "string"
              ? imagePreview
              : String(imagePreview)
            : authUser.userDocument.photoURL
            ? authUser.userDocument.photoURL
            : "/assets/svg/camera.svg"
        }
      />
    </div>
  );
};
