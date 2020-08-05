import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import DrawerNav from "./DrawerNav";
import StackNav from "./StackNav";
const Route = () => {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
};

export default Route;
