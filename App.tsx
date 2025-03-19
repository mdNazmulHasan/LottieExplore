import React, { useRef } from 'react';
import { View, Button } from 'react-native';
import LottieView from 'lottie-react-native';

export default function App() {
  const animationRef = useRef<LottieView>(null);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <LottieView
      ref={animationRef}
        source={require('./assets/loader.json')}
        autoPlay
        loop
        style={{ width: 200, height: 200 }}
      />
      <Button title="Play" onPress={() => {
        animationRef.current?.play();
      }} />
      <Button title="Pause" onPress={() => {
        animationRef.current?.pause();
      }} />

     </View>
  );
}
