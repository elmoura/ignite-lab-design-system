import { Slot } from "@radix-ui/react-slot";
import { FunctionComponent, InputHTMLAttributes, ReactNode } from "react";

export type TextInputProps = InputHTMLAttributes<HTMLInputElement>;

export type TextInputRootProps = {
  children: ReactNode;
}

const TextInputRoot = ({ children }: TextInputRootProps) => {
  return (
    <div className="flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800  focus-within:ring-2 ring-cyan-200">
      {children}
    </div>
  )
};

export type TextInputIconProps = { children: ReactNode };

const TextInputIcon = (props: TextInputIconProps) => {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      {props.children}
    </Slot>
  )
};

export const TextInputInput: FunctionComponent<TextInputProps> = ({ ...rest }: TextInputProps) => {
  return (
    <input type="text" className="bg-transparent outline-none flex-1 text-gray-100 text-xs placeholder:text-gray-400" {...rest} />
  )
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};