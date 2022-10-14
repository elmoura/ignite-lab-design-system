import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { FunctionComponent } from "react";

export type ButtonProps = {
  children: string;
  asChild?: boolean;
};

export const Button: FunctionComponent<ButtonProps> =
  ({ children, asChild = false }: ButtonProps) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp className={clsx(
        'py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-200 focus:ring-2 ring-white'
      )}>
        {children}
      </Comp>
    );
  }