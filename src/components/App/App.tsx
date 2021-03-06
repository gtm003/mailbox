import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { useAppSelector } from '../../hooks/useAppSelector';
import { LetterPage } from '../../pages/LetterPage/LetterPage';
import { LettersPage } from '../../pages/LettersPage/LettersPage';
import { NewLettersPage } from '../../pages/NewLettersPage/NewLettersPage';
import { FolderState } from '../../store/folders/initialState';
import { Layout } from '../Layout/Layout';

const App: React.FC = (): JSX.Element => {
  const currentFolderName = useAppSelector((state) => state.folders.current);
  const folders = useAppSelector((state) => state.folders.folders);
  const currentFolderPath = folders.filter(
    (folder: FolderState) => folder.name === currentFolderName
  )[0].path;

  return (
    <div>
      <Layout>
        <Routes>
          <Route path="*" element={<LettersPage />}>
            <Route path={currentFolderPath} element={<LettersPage />} />
          </Route>
          <Route path="/NewLetters/letter/:id" element={<LetterPage />} />
          <Route path="/letter/:id" element={<LetterPage />} />
          <Route path="/NewLetters" element={<NewLettersPage />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
