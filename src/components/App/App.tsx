import React from 'react';

import { Table } from '../../Table/Table';
import { Layout } from '../Layout/Layout';

const App: React.FC = (): JSX.Element => {
  return (
    <div>
      <Layout>
        <Table />
      </Layout>
    </div>
  );
};

export default App;
