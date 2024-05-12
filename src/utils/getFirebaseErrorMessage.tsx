import errors from "@/config/locales/errors.json";

type FirebaseErrorType = {
  [key: string]: string;
};

type FirebaseErrors = {
  [key: string]: FirebaseErrorType;
};

const firebaseErrors: FirebaseErrors = {
  ...errors,
  an_unknown_error_has_occured: {
    an_unknown_error_has_occured: errors.an_unknown_error_has_occured,
  },
};

export function getFirebaseErrorMessage(
  method: string,
  errorCode: string
): string {
  const defaultErrorMessage = errors.an_unknown_error_has_occured;

  if (!firebaseErrors[method]) {
    return defaultErrorMessage;
  }

  if (!firebaseErrors[method][errorCode]) {
    return defaultErrorMessage;
  }

  const errorMessage = firebaseErrors[method][errorCode];

  return errorMessage;
}
