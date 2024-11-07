import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";

type SettingsScreenProps = {
    navigation: FrameNavigationProp<any, "Settings">,
};

export function SettingsScreen({ navigation }: SettingsScreenProps) {
    return (
        <scrollView className="bg-gray-50">
            <stackLayout className="p-4">
                <label className="text-xl font-bold mb-4">Settings</label>

                <stackLayout className="bg-white rounded-lg p-4 mb-4">
                    <label className="font-semibold mb-2">Language</label>
                    <button className="text-indigo-600">
                        English (US)
                    </button>
                </stackLayout>

                <stackLayout className="bg-white rounded-lg p-4 mb-4">
                    <label className="font-semibold mb-2">Recording Quality</label>
                    <button className="text-indigo-600">
                        High Quality
                    </button>
                </stackLayout>

                <stackLayout className="bg-white rounded-lg p-4 mb-4">
                    <label className="font-semibold mb-2">Storage</label>
                    <button className="text-indigo-600">
                        Manage Storage
                    </button>
                </stackLayout>

                <stackLayout className="bg-white rounded-lg p-4 mb-4">
                    <label className="font-semibold mb-2">Siri Shortcuts</label>
                    <button className="text-indigo-600">
                        Configure Shortcuts
                    </button>
                </stackLayout>

                <button className="bg-red-600 text-white p-4 rounded mt-4">
                    Sign Out
                </button>
            </stackLayout>
        </scrollView>
    );
}