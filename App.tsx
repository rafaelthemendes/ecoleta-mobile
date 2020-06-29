import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { Ubuntu_700Bold, useFonts } from "@expo-google-fonts/ubuntu";
import { AppLoading } from "expo";
import { StatusBar } from "expo-status-bar";
import React from "react";
import Routes from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold,
  });

  return !fontsLoaded ? (
    <AppLoading />
  ) : (
    <>
      <Routes />
      <StatusBar style="dark" backgroundColor="transparent" translucent />
    </>
  );
}
