import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ShoppingHome from "../screens/Shopping/ShoppingHome";
import Detail from "../screens/Shopping/Detail";
const Stack = createStackNavigator();
const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Shop" component={ShoppingHome} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default StackNav;
