import { clsx } from 'clsx';
import { FunctionComponent, ReactNode } from "react";
import { Slot } from '@radix-ui/react-slot';

type TextSizes = 'sm' | 'md' | 'lg';

export interface TextProps {
  size?: TextSizes;
  asChild?: boolean;
  children: ReactNode;
}

export const Text: FunctionComponent<TextProps> = ({ asChild, children, size = 'md' }: TextProps) => {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp className={
      clsx('text-gray-100 font-sans',
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg',
        }
      )
    }>{children}</Comp>
  );
}