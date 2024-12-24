import React, { useRef, useEffect, useState } from "react";
import "./Modal.css";

interface ModalProps {
    isOpen: boolean | null;
    onClose: () => void;
    children: React.ReactNode;
    minWidth?: number;
    maxWidth?: number;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, minWidth, maxWidth }) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const dialog = dialogRef.current;

        const handleDialogClose = () => {
            setIsAnimating(false);
            onClose();
        };

        if (dialog) {
            dialog.addEventListener("close", handleDialogClose);
        }

        if (isOpen === true) {
            setIsAnimating(true);
            dialog?.showModal();
        } else if (isOpen === false) {
            closeModal();
        }

        return () => {
            if (dialog) {
                dialog.removeEventListener("close", handleDialogClose);
            }
        };
    }, [isOpen]);

    const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
        if (event.target === dialogRef.current) {
            closeModal();
        }
    };

    const closeModal = () => {
        setIsAnimating(false);
        const dialog = dialogRef.current;
        setTimeout(() => {
            onClose();
            dialog?.close();
        }, 200);
    };

    return (
        <dialog
            ref={dialogRef}
            className={`modal ${isAnimating ? "open" : "close"}`}
            onClick={handleBackdropClick}
        >
            <div style={{ minWidth, maxWidth }} className="content">
                <button className="closeIcon" onClick={closeModal}>
                    &times;
                </button>
                {children}
            </div>
        </dialog>
    );
};

export default Modal;
