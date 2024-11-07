import { Dialogs } from '@nativescript/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type HomeScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Home">,
};

export function HomeScreen({ navigation }: HomeScreenProps) {
    return (
        <flexboxLayout className="flex-1 bg-white">
            <stackLayout className="p-4 space-y-4">
                <label className="text-3xl font-bold text-center text-blue-600">
                    GigaDesk
                </label>
                <label className="text-lg text-center text-gray-600">
                    AI-Powered Audio Recording & Transcription
                </label>

                <gridLayout rows="auto, auto, auto" columns="*, *" className="mt-6">
                    <button 
                        className="bg-blue-500 text-white p-4 m-2 rounded-lg text-center col-0 row-0"
                        onTap={() => navigation.navigate("Record")}
                    >
                        🎙️ Record
                    </button>
                    <button 
                        className="bg-green-500 text-white p-4 m-2 rounded-lg text-center col-1 row-0"
                        onTap={() => navigation.navigate("Transcribe")}
                    >
                        📝 Transcribe
                    </button>
                    <button 
                        className="bg-purple-500 text-white p-4 m-2 rounded-lg text-center col-0 row-1"
                        onTap={() => navigation.navigate("Phone")}
                    >
                        📱 Phone Calls
                    </button>
                    <button 
                        className="bg-yellow-500 text-white p-4 m-2 rounded-lg text-center col-1 row-1"
                        onTap={() => navigation.navigate("Import")}
                    >
                        📥 Import
                    </button>
                    <button 
                        className="bg-red-500 text-white p-4 m-2 rounded-lg text-center col-0 row-2"
                        onTap={() => navigation.navigate("Summary")}
                    >
                        📊 Summarize
                    </button>
                    <button 
                        className="bg-indigo-500 text-white p-4 m-2 rounded-lg text-center col-1 row-2"
                        onTap={() => navigation.navigate("Share")}
                    >
                        📤 Share
                    </button>
                </gridLayout>

                <stackLayout className="mt-6 p-4 bg-gray-100 rounded-lg">
                    <label className="text-lg font-bold text-center">
                        Features
                    </label>
                    <label className="text-sm text-gray-600 mt-2">
                        • Unlimited audio recording
                    </label>
                    <label className="text-sm text-gray-600">
                        • Multi-language transcription
                    </label>
                    <label className="text-sm text-gray-600">
                        • AI-powered summarization
                    </label>
                    <label className="text-sm text-gray-600">
                        • Secure call recording
                    </label>
                    <label className="text-sm text-gray-600">
                        • Siri shortcuts support
                    </label>
                </stackLayout>
            </stackLayout>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
    }
});