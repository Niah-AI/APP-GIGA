import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";

type TranscriptScreenProps = {
    navigation: FrameNavigationProp<any, "Transcript">,
};

export function TranscriptScreen({ navigation }: TranscriptScreenProps) {
    const [isProcessing, setIsProcessing] = React.useState(true);
    const [transcript, setTranscript] = React.useState("");

    React.useEffect(() => {
        // Simulate transcript processing
        setTimeout(() => {
            setIsProcessing(false);
            setTranscript("This is a sample transcript of the recorded audio. The AI has processed the audio and generated this text. You can now edit, summarize, or share this content.");
        }, 2000);
    }, []);

    return (
        <flexboxLayout className="flex-col h-full bg-gray-50">
            <stackLayout className="p-4">
                <label className="text-xl font-bold mb-4">
                    Transcript
                </label>

                {isProcessing ? (
                    <stackLayout className="items-center justify-center p-8">
                        <label className="text-gray-600">
                            Processing audio...
                        </label>
                        <activityIndicator busy={true} />
                    </stackLayout>
                ) : (
                    <stackLayout>
                        <textView
                            className="bg-white p-4 rounded-lg"
                            text={transcript}
                            editable={true}
                        />
                        
                        <button
                            className="bg-indigo-600 text-white p-4 mt-4 rounded"
                            onTap={() => {/* Handle summarize */}}
                        >
                            Summarize
                        </button>
                        
                        <button
                            className="bg-green-600 text-white p-4 mt-2 rounded"
                            onTap={() => {/* Handle share */}}
                        >
                            Share
                        </button>
                    </stackLayout>
                )}
            </stackLayout>
        </flexboxLayout>
    );
}