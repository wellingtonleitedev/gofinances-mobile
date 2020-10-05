import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider';
import database from './config/database';
import sync from './config/sync';
import Routes from './routes';

const App: React.FC = () => {
  sync();

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#5636D3" />
      <DatabaseProvider database={database}>
        <Routes />
      </DatabaseProvider>
    </>
  );
};

export default App;
