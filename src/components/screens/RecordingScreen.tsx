import { Dialogs } from '@nativescript/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";

type RecordingScreenProps = {
    navigation: FrameNavigationProp<any, "Record">,
};

export function RecordingScreen({ navigation }: RecordingScreenProps) {
    const [isRecording, setIsRecording] = React.useState(false);
    const [duration, setDuration] = React.useState(0);

    React.useEffect(() => {
        let interval: any;
        if (isRecording) {
            interval = setInterval(() => {
                setDuration(prev => prev + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRecording]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const toggleRecording = () => {
        if (!isRecording) {
            setDuration(0);
        }
        setIsRecording(!isRecording);
    };

    return (
        <flexboxLayout className="flex-col h-full items-center justify-center bg-gray-50">
            <stackLayout className="items-center">
                <label className="text-6xl mb-8">
                    {isRecording ? "🔴" : "⚫️"}
                </label>
                
                <label className="text-4xl font-bold mb-8">
                    {formatTime(duration)}
                </label>

                <button
                    className={`p-8 rounded-full ${isRecording ? 'bg-red-600' : 'bg-indigo-600'} text-white`}
                    onTap={toggleRecording}
                >
                    {isRecording ? "Stop Recording" : "Start Recording"}
                </button>

                {isRecording && (
                    <label className="mt-4 text-gray-600">
                        Recording in progress...
                    </label>
                )}
            </stackLayout>
        </flexboxLayout>
    );
}