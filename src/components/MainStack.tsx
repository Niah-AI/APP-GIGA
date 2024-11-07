import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { HomeScreen } from "./HomeScreen";
import { RecordScreen } from "./RecordScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#3B82F6",
                },
                headerTintColor: "#ffffff",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: "GigaDesk"
                }}
            />
            <StackNavigator.Screen
                name="Record"
                component={RecordScreen}
                options={{
                    title: "Record Audio"
                }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);