// A class to hold all the widgets that are displayed on the home screen,
// abstracted for convenience of adding activities
class WidgetManager {
    static getTestWidgets() {
        return [
            { name: "Audio Delay Test", color: "#FFFFFF", icon: "fa-solid fa-ear-listen", description: "Play an audio delay test.", link: "/view/pages/audio_delay.html", datalink: "/view/pages/datapage.html" },
            { name: "Perfect Pitch Test", color: "#FFFFFF", icon: "fa-solid fa-music", description: "Test your pitch perception.", link: "/view/pages/perfect_pitch.html", datalink: "/view/pages/datapage.html" },
            { name: "Left Right Audio Test", color: "#FFFFFF", icon: "fa-solid fa-arrows-left-right", description: "Test which ear audio comes from.", link: "/view/pages/ActivityLeftRightKeysTemplate.html", datalink: "/view/pages/datapage.html" }
        ];
    }
}

// Export the class if using ES Modules
export default WidgetManager;
