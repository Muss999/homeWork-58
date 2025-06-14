import {
    useState,
    type MouseEventHandler,
    type PropsWithChildren,
} from "react";

interface Props extends PropsWithChildren {
    type: string;
    onDismiss?: MouseEventHandler;
}

const LevelTwo = ({ type, onDismiss, children }: Props) => {
    const [showAlert, setShowAlert] = useState(true);

    const handleClose = () => {
        setShowAlert(false);
    };

    return (
        <>
            {showAlert && (
                <div className={`alert alert-${type}`}>
                    {children}
                    {onDismiss ? (
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={handleClose}
                        ></button>
                    ) : null}
                </div>
            )}
        </>
    );
};

export default LevelTwo;
