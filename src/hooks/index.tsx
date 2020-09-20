import React from 'react';
import { TransactionProvider } from './transactions';

const AppProvider: React.FC = ({ children }) => (
  <TransactionProvider>{children}</TransactionProvider>
);

export default AppProvider;
