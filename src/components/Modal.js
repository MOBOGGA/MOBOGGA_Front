<<<<<<< HEAD
=======
// import { IoClose } from "react-icons/io5";

>>>>>>> main
const Modal = ({ isOpen, onClose, children }) => {
  // 만약 isOpen이 false이면 null을 반환하여 모달을 렌더링하지 않음
  if (!isOpen) return null;

  return (
    <div onClick={onClose} className="modal-overlay">
      <div onClick={(e) => e.stopPropagation()} className="modal">
<<<<<<< HEAD
        <button onClick={onClose} className="modal-close"></button>
=======
        <button onClick={onClose} className="modal-close">
          {/* <IoClose /> */}
        </button>
>>>>>>> main
        {children}
      </div>
    </div>
  );
};

export default Modal;
