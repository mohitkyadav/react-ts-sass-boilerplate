import {PageTitle} from 'components';
import React, {FC} from 'react';

import HomeHero from './HomeHero';

const Home: FC = () => (
  <>
    <PageTitle title="Home" />
    <HomeHero />
  </>
);

export default Home;
