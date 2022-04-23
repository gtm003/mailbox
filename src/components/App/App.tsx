import React from 'react';

import { Layout } from '../Layout/Layout';
import { Table } from '../Table/Table';

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
