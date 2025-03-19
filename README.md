# 🎥 Mastering Lottie in React Native: Smooth Animations Made Easy!

Welcome to the **Lottie React Native Guide** repository! 🚀 This repo contains all the code and resources from our **Lottie React Native tutorial video**.

---

## 🔧 Installation

### 1️⃣ Install Lottie in Your React Native Project

```sh
npm install lottie-react-native
```

For **iOS**, run:

```sh
cd ios && pod install && cd ..
```

For **Expo**, install via:

```sh
expo install lottie-react-native
```

---

## 🚀 Usage

Import **LottieView** and render an animation in your React Native component:

```jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('./assets/animation.json')}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: 200,
    height: 200,
  },
});

export default App;
```

---

## 🛠 Troubleshooting

### ❌ "Unimplemented component LottieAnimationView" Error?
- Ensure you installed **Lottie properly**:
  ```sh
  npm install lottie-react-native
  ```
- If using iOS, reinstall pods:
  ```sh
  cd ios && pod install && cd ..
  ```
- Restart the development server:
  ```sh
  npx react-native start --reset-cache
  ```

---

## 📂 File Structure

```
📂 my-lottie-app
 ├️ 📂 assets
 │   ├️ animation.json  # Lottie animation file
 ├️ 📂 src
 │   ├️ App.js          # Main React Native component
 ├️ package.json
 ├️ README.md
```

---

## 🎬 Watch the Video Tutorial

🎥 **Full tutorial on YouTube**: [🔗 Watch Here](#) *(Add link when available)*  

If this helped, **star ⭐ the repo** and **subscribe for more tutorials!** 🚀

---

## 📝 Resources

- **Lottie React Native Docs**: [🔗 Official Docs](https://github.com/lottie-react-native/lottie-react-native)
- **LottieFiles**: [🔗 Free Animations](https://lottiefiles.com/)

---

## 🤝 Contribute & Support

Found an issue? Feel free to **open a pull request** or report a bug in the **Issues** tab!  

Happy Coding! 💻🔥

