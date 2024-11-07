import { Dialogs } from '@nativescript/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type RecordScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Record">,
};

export function RecordScreen({ navigation }: RecordScreenProps) {
    const [isRecording, setIsRecording] = React.useState(false);
    const [duration, setDuration] = React.useState(0);

    const toggleRecording = () => {
        setIsRecording(!isRecording);
        if (!isRecording) {
            // Start recording logic here
            Dialogs.alert("Recording started!");
        } else {
            // Stop recording logic here
            Dialogs.alert("Recording stopped!");
        }
    };

    return (
        <flexboxLayout className="flex-1 bg-white">
            <stackLayout className="p-4 space-y-6">
                <label className="text-2xl font-bold text-center">
                    {isRecording ? "Recording..." : "Ready to Record"}
                </label>

                <label className="text-4xl text-center text-red-500">
                    {duration}s
                </label>

                <button
                    className={`p-8 rounded-full ${isRecording ? 'bg-red-500' : 'bg-blue-500'} text-white text-center`}
                    onTap={toggleRecording}
                >
                    {isRecording ? "⏹️ Stop" : "🎙️ Start"}
                </button>

                <stackLayout className="mt-6 p-4 bg-gray-100 rounded-lg">
                    <label className="text-lg font-bold">Recording Features:</label>
                    <label className="text-sm text-gray-600">• Background recording</label>
                    <label className="text-sm text-gray-600">• High-quality audio</label>
                    <label className="text-sm text-gray-600">• Unlimited duration</label>
                    <label className="text-sm text-gray-600">• Auto-save</label>
                </stackLayout>
            </stackLayout>
        </flexboxLayout>
    );
}