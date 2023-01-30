import React, {FC} from 'react';
import clsx from 'clsx';

import './HashLink.scss';

interface HashLinkProps {
  className?: string;
  id: string;
}

export const HashLink: FC<HashLinkProps> = ({className, id}) => {
  return (
    <a className={clsx('HashLink', className)} href={`#${id}`}>
      #
    </a>
  );
};
