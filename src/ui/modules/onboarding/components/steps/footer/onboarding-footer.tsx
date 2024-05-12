import { Button } from "@/ui/components/design-system/button/button";
import clsx from "clsx";

interface Props {
  next?: () => void;
  prev?: () => void;
  isFirstStep?: () => boolean;
  isFinalStep?: () => boolean;
  isLoading?: boolean;
}

export const OnboardingFooter = ({
  next,
  prev,
  isFirstStep,
  isFinalStep,
  isLoading,
}: Props) => {
  let actionButtonTitle: string;

  if (isFirstStep && isFirstStep()) {
    actionButtonTitle = "Démarrer";
  } else if (isFinalStep && isFinalStep()) {
    actionButtonTitle = "Terminer";
  } else {
    actionButtonTitle = "Continuer";
  }

  return (
    <div className="absolute bottom-0 left-0 w-full p-5 bg-white border-t border-gray-400">
      <div
        className={clsx(
          prev && !next && "justify-start",
          !prev && next && "justify-end",
          prev && next && "justify-between",
          "flex items-center justify-end gap-5"
        )}
      >
        {prev && (
          <Button
            disabled={isLoading}
            variant={!isLoading ? "outline" : "disabled"}
            action={prev}
          >
            Retour
          </Button>
        )}

        {next && (
          <Button isLoading={isLoading} action={next}>
            {actionButtonTitle}
          </Button>
        )}
      </div>
    </div>
  );
};
