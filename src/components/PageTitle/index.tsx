import React, {FC} from 'react';
import {Helmet} from 'react-helmet';

interface ComponentProps {
  title: string;
}

const PageTitle: FC<ComponentProps> = ({title}) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default PageTitle;
