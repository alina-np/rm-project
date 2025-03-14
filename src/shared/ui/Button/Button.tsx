import { ButtonHTMLAttributes } from "react";

export enum ButtonTheme {
  SQUARE = "square",
  ROUNDE = "rounde",
}

interface ButtonsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme: ButtonTheme;
}

export function Button({ children, theme, ...otherProps }: ButtonsProps) {
  const squareClasses =
    "h-8 border border-solid border-lime-50 bg-lime-50 text-black hover:bg-transparent hover:text-white";
  const roundClasses =
    "w-10 h-10 fixed bottom-10 right-0 xl:right-10 z-10 rounded-full border-2 border-solid border-[#12999E] hover:border-lime-300";

  const themeClasses = theme === ButtonTheme.SQUARE ? squareClasses : roundClasses;
  
  return (
    <button
      className={`flex items-center justify-center cursor-pointer transition-colors ${themeClasses}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
