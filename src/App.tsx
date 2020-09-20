import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import AppProvider from './hooks';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#5636D3" />
      <AppProvider>
        <Routes />
      </AppProvider>
    </>
  );
};

export default App;
