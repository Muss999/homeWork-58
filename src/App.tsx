import { useState } from "react";
import LevelOne from "./components/LevelOne/LevelOne";

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
        <>
            <button
                type="button"
                className="btn btn-success"
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
        </>
    );
};

export default App;
