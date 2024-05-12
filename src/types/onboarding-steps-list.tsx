
export interface BaseComponentProps{ 
  next: () => void;
  prev: () => void;
  isFirstStep: () => boolean;
  isFinalStep: () => boolean;
  stepsList: onboardingStepsListIntrerface[];
  getCurrentStep: () => onboardingStepsListIntrerface | undefined;
}



export interface onboardingStepsListIntrerface{
    id: number;
    label: string;
    component:{
        step: React.ComponentType<BaseComponentProps>
    }
}