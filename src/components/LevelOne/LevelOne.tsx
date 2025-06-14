import type { MouseEventHandler, PropsWithChildren } from "react";
import type { typeConfigArr } from "../helpers/types";

interface Props extends PropsWithChildren {
    show: boolean;
    title: string;
    onClose: MouseEventHandler;
    configArr: typeConfigArr[];
}
const LevelOne = ({ show, title, onClose, configArr, children }: Props) => {
    return (
        <>
            <div
                className="modal-backdrop show"
                style={{ display: show ? "block" : "none" }}
            />
            <div
                className="modal show"
                style={{ display: show ? "block" : "none" }}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">{title}</h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={onClose}
                            ></button>
                        </div>
                        {children}
                        <div className="modal-footer">
                            {configArr.map((btnConfig, index) => {
                                return (
                                    <button
                                        key={index}
                                        type="button"
                                        className={`btn btn-${btnConfig.type}`}
                                        onClick={btnConfig.onClick}
                                    >
                                        {btnConfig.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LevelOne;
