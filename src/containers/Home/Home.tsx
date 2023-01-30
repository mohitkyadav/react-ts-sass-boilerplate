import React, {FC} from 'react';

import {PageTitle} from 'components';

import HomeHero from './HomeHero';

export const Home: FC = () => (
  <>
    <PageTitle title="Home" />
    <HomeHero />
  </>
);
