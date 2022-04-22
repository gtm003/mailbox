import React, { ReactNode } from 'react';

import { Letters } from '../Letters/Letters';

import { Navigation } from './Navigation/Navigation';

import styles from './Layout.module.scss';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navigation />
      <Letters />
      {children}
    </div>
  );
};
