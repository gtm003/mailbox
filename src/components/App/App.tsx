import { Container } from '@mui/material';
import React from 'react';

import { Navigation } from '../Layout/Navigation/Navigation';
import { Letters } from '../Letters/Letters';

const App: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Navigation />
      <Letters />
    </Container>
  );
};

export default App;
