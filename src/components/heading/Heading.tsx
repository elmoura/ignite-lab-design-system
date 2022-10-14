import { clsx } from 'clsx';
import { FunctionComponent, ReactNode } from "react";
import { Slot } from '@radix-ui/react-slot';

type HeadingSizes = 'sm' | 'md' | 'lg';

export interface HeadingProps {
  size?: HeadingSizes;
  asChild?: boolean;
  children: ReactNode;
}

export const Heading: FunctionComponent<HeadingProps> = ({ asChild, children, size = 'md' }: HeadingProps) => {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp className={
      clsx('text-gray-100 font-sans',
        {
          'text-lg': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg',
        }
      )
    }>{children}</Comp>
  );
}