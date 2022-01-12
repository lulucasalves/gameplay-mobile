import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from './auth.routes'
import { Signin } from "../screens/Signin";
import { Home } from "../screens/Home";
import { AppointmentsDetails } from "../screens/AppointmentsDetails";
import { AppointmentsCreate } from "../screens/AppointmentsCreate";

export function Routes() {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  )
}