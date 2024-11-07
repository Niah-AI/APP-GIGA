import { Dialogs } from '@nativescript/core';
import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";

type HomeScreenProps = {
    navigation: FrameNavigationProp<any, "Home">,
};

export function HomeScreen({ navigation }: HomeScreenProps) {
    const features = [
        { title: "Record", icon: "🎙️", screen: "Record" },
        { title: "Transcribe", icon: "📝", screen: "Transcript" },
        { title: "Phone Calls", icon: "📞", screen: "Record" },
        { title: "Import", icon: "📥", screen: "Record" },
        { title: "Summarize", icon: "📋", screen: "Transcript" },
        { title: "Share", icon: "📤", screen: "Transcript" },
    ];

    return (
        <flexboxLayout className="flex-col h-full bg-gray-50">
            <stackLayout className="p-4 bg-indigo-600">
                <label className="text-2xl font-bold text-white">
                    Welcome to GigaDesk
                </label>
                <label className="text-white mt-1">
                    AI-powered transcription & summarization
                </label>
            </stackLayout>
            
            <gridLayout className="p-4" columns="*, *" rows="auto, auto, auto">
                {features.map((feature, index) => (
                    <stackLayout 
                        key={feature.title}
                        className="bg-white m-2 p-4 rounded-lg shadow"
                        col={index % 2} 
                        row={Math.floor(index / 2)}
                        onTap={() => navigation.navigate(feature.screen)}
                    >
                        <label className="text-3xl text-center">{feature.icon}</label>
                        <label className="text-center font-semibold mt-2">{feature.title}</label>
                    </stackLayout>
                ))}
            </gridLayout>

            <button
                className="bg-indigo-600 text-white p-4 m-4 rounded-full"
                onTap={() => navigation.navigate("Record")}
            >
                Start Recording
            </button>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
    },
});