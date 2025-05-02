import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'http://192.168.219.105:8090/login' }} // <-- 여기에 네 로컬 서버 IP 주소+포트
        style={{ flex: 1 }}
      />
    </SafeAreaView>
  );
};

export default App;