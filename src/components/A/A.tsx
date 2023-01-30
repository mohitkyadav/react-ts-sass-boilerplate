import React, {FC} from 'react';
import clsx from 'clsx';

interface AProps {
  className?: string;
  href: string;
  target?: string;
  children?: React.ReactNode;
}

export const A: FC<AProps> = ({children, className, href, target = '_blank'}) => {
  return (
    <a className={clsx('A', className)} href={href} rel="noopener noreferrer" target={target}>
      {children}
    </a>
  );
};
