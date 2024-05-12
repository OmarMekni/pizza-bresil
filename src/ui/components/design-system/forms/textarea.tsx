import clsx from "clsx";
import { Typography } from "../typography/typography";

interface Props {
  isLoading: boolean;
  placeholder: string;
  rows?: number;
  register: any;
  errors: any;
  errorsMsg?: string;
  id: string;
  required?: boolean;
  isAutocompleted?: boolean;
  label?: string;
}

export const Textarea = ({
  isLoading,
  placeholder,
  rows = 5,
  register,
  errors,
  errorsMsg = "Tu dois renseigner ce champ",
  id,
  required = true,
  isAutocompleted = false,
  label,
}: Props) => {
  return (
    <div className="space-y-2">
      {label && (
        <Typography
          variant="caption4"
          component="div"
          weight="medium"
          theme={errors[id] ? "danger" : "gray"}
        >
          {label}
        </Typography>
      )}

      <textarea
        rows={rows}
        placeholder={placeholder}
        className={clsx(
          isLoading
            ? "bg-gray-300 focus:ring-gray-300 cursor-not-allowed"
            : "bg-white",
          errors[id]
            ? "placeholder-alert-danger text-alert-danger"
            : "placeholder-gray-600",
          "w-full p-4 font-light border rounded focus:outline-none focus:ring-1 focus:ring-primary border-gray-400"
        )}
        disabled={isLoading}
        {...register(id, {
          required: {
            value: required,
            message: errorsMsg,
          },
        })}
        autoComplete={isAutocompleted ? "on" : "off"}
      />

      {errors[id] && (
        <Typography variant="caption4" component="div" theme="danger">
          {errors[id]?.message}
        </Typography>
      )}
    </div>
  );
};
