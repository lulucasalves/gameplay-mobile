import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from './auth.routes'
import { Signin } from "../screens/Signin";
import { Auth } from "../context/auth";

export function Routes() {
  const { user } = Auth()

  return (
    <NavigationContainer>
      {user.id ? <AuthRoutes /> : <Signin />}
    </NavigationContainer>
  )
}