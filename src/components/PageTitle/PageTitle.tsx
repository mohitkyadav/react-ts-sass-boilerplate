import React, {FC} from 'react';
import {Helmet} from 'react-helmet';

interface PageTitleProps {
  title: string;
}

export const PageTitle: FC<PageTitleProps> = ({title}) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};
