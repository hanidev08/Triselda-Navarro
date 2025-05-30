import { createContext } from "react";

interface LoaderContextType {
  loaderFinished: boolean;
  setLoaderFinished: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoaderContext = createContext<LoaderContextType | undefined>(
  undefined
);
