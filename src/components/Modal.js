import styles from "./styles/Modal.module.css";

const Modal = ({ isOpen, onClose, children }) => {
  // 만약 isOpen이 false이면 null을 반환하여 모달을 렌더링하지 않음
  if (!isOpen) return null;

  return (
<<<<<<< HEAD

=======
>>>>>>> 6e34255 (modal 구현)
    <div onClick={onClose} className={styles.modal_overlay}>
      <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
