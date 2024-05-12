import { useAuth } from "@/context/AuthUserContext";
import { ProfileView } from "./profile.view";
import { useToggle } from "@/hooks/use-toggle";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserProfileFormFieldsType } from "@/types/forms";
import { useEffect, useState } from "react";
import { firestoreUpdateDocument } from "@/api/firestore";
import { toast } from "react-toastify";
import {
  StorageReference,
  UploadTask,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "@/config/firebase-config";
import { PhoneMultiFactorGenerator } from "firebase/auth";
import { updateUserIdentificationData } from "@/api/authentication";

export const ProfileContainer = () => {
  const { authUser, reloadAuthUserData } = useAuth();
  const { value: isLoading, setValue: setLoading } = useToggle();

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(
    null
  );

  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    setValue,
    setError,
  } = useForm<UserProfileFormFieldsType>();

  const { displayName, expertise, biography, linkedin, github } =
    authUser.userDocument;

  useEffect(() => {
    const fieldsToUpdate: (
      | "displayName"
      | "expertise"
      | "biography"
      | "linkedin"
      | "github"
    )[] = ["displayName", "expertise", "biography", "linkedin", "github"];

    for (const field of fieldsToUpdate) {
      setValue(field, authUser.userDocument[field]);
    }
  }, [authUser.userDocument, setValue]);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        let imageDataUrl: string | ArrayBuffer | null = null;
        if (e.target) {
          imageDataUrl = e.target.result;
        }
        setImagePreview(imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload = () => {
    let storageRef: StorageReference;
    let uploadTask: UploadTask;

    if (selectedImage !== null) {
      setLoading(true);
      storageRef = ref(
        storage,
        `users-media/${authUser.uid}/avatar/avatar-${authUser.uid}`
      );
      uploadTask = uploadBytesResumable(storageRef, selectedImage);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          setLoading(false);
          toast.error("Une erreur inconnue est survenue");
          setUploadProgress(0);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            updateUserAvatar(downloadURL);
            setSelectedImage(null);
            setTimeout(() => {
              setUploadProgress(0);
            }, 1000);
          });
        }
      );
    }
  };

  const updateUserAvatar = async (photoURL: string) => {
    const body = {
      photoURL: photoURL,
    };

    await updateUserIdentificationData(authUser.uid, body);

    const { error } = await firestoreUpdateDocument(
      "users",
      authUser.uid,
      body
    );
    if (error) {
      setLoading(false);
      toast.error(error.message);
      return;
    }
    reloadAuthUserData();
    setLoading(false);
  };

  const handleUpdateUserDocument = async (
    formData: UserProfileFormFieldsType
  ) => {
    setLoading(true);

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

    toast.success("Ton profil a bien été mis à jour avec succès");
    setLoading(false);
  };

  const onSubmit: SubmitHandler<UserProfileFormFieldsType> = async (
    formData
  ) => {
    if (selectedImage) {
      handleImageUpload();
    }

    if (formData.linkedin && !formData.linkedin.includes("linkedin.com/")) {
      setError("linkedin", {
        type: "manual",
        message: "Cet URL ne correspond pas à un profil Linkedin",
      });
      return;
    }

    if (formData.github && !formData.github.includes("github.com/")) {
      setError("github", {
        type: "manual",
        message: "Cet URL ne correspond pas à un profil Github",
      });
      return;
    }

    if (
      displayName !== formData.displayName ||
      expertise !== formData.expertise ||
      biography !== formData.biography ||
      linkedin !== formData.linkedin ||
      github !== formData.github
    ) {
      if (
        displayName !== formData.displayName ||
        authUser.displayName !== formData.displayName
      ) {
        const body = {
          displayName: formData.displayName,
        };

        const { error } = await updateUserIdentificationData(
          authUser.uid,
          body
        );
        if (error) {
          setLoading(false);
          toast.error(error.message);
          return;
        }
        reloadAuthUserData();
      }

      for (const key in formData) {
        if (
          formData.hasOwnProperty(key) &&
          formData[key as keyof UserProfileFormFieldsType] === undefined
        ) {
          delete formData[key as keyof UserProfileFormFieldsType];
        }
      }

      handleUpdateUserDocument(formData);
      return;
    }
  };

  return (
    <>
      <ProfileView
        imagePreview={imagePreview}
        uploadProgress={uploadProgress}
        handleImageSelect={handleImageSelect}
        form={{
          errors,
          control,
          register,
          handleSubmit,
          onSubmit,
          isLoading,
        }}
      />
    </>
  );
  // <div className="flex justify-center pt-20 pb-40">

  // </div>;
};
