import { useState } from "react";
import LevelOne from "./components/LevelOne/LevelOne";
import LevelTwo from "./components/LevelTwo/LevelTwo";

const App = () => {
    const [showModal, setShowModal] = useState(false);
    const configArr = [
        {
            type: "primary",
            label: "Continue",
            onClick: () => console.log("Clicked continue"),
        },
        {
            type: "danger",
            label: "Close",
            onClick: () => console.log("Clicked close"),
        },
    ];

    return (
        <div className="container">
            <button
                type="button"
                className="btn btn-success mb-3 mt-3"
                onClick={() => {
                    setShowModal(true);
                }}
            >
                Show Modal
            </button>

            <LevelOne
                show={showModal}
                title="some title"
                onClose={() => setShowModal(false)}
                configArr={configArr}
            >
                <p>This is modal content</p>
            </LevelOne>
            <LevelTwo type="danger" onDismiss={() => {}}>
                This is danger alert
            </LevelTwo>
            <LevelTwo type="primary">This is primary alert</LevelTwo>
        </div>
    );
};

export default App;
