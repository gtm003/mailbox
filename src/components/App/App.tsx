import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { useAppSelector } from '../../hooks/useAppSelector';
import { LettersPage } from '../../pages/LettersPage/LettersPage';
import { NewLettersPage } from '../../pages/NewLettersPage/NewLettersPage';
import { Layout } from '../Layout/Layout';

const App: React.FC = (): JSX.Element => {
  const currentFolderName = useAppSelector((state) => state.folders.current);
  const folders = useAppSelector((state) => state.folders.folders);
  const currentFolderPath = folders.filter((item) => item.name === currentFolderName)[0].path;

  return (
    <div>
      <Layout>
        <Routes>
          <Route path="*" element={<LettersPage />}>
            <Route
              path={currentFolderPath}
              element={<LettersPage />}
            />
          </Route>
          <Route
            path="/NewLetters"
            element={<NewLettersPage />}
          />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
