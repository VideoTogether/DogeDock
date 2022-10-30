import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Page, App as A, Views, View } from 'framework7-react';

function App() {

  const f7params = {
    name: 'App Store',
    theme: 'ios',
    autoDarkTheme: true,
  };
  return (
    <A>
      <View>
        <Button>123</Button>
      </View>
    </A>


  );
}

export default App;
