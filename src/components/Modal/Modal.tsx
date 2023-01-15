import { X } from "phosphor-react";
import { ModalBody, ModalHeader, Overlay } from "./style";

interface IModal {
  title: string;
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

// TODO - Fix modal position
export function Modal({ title, visible, onClose, children }: IModal) {
  const handleClose = () => {
    onClose();
  };

  return visible ? (
    <Overlay>
      <ModalBody>
        <ModalHeader>
          <h1>{title}</h1>

          <button onClick={handleClose}>
            <X size={32} weight="light" />
          </button>
        </ModalHeader>

        {children}
      </ModalBody>
    </Overlay>
  ) : (
    <></>
  );
}
