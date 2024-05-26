import './Confirm-modal.css';

export const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="confirmation-modal-overlay">
      <div className="confirmation-modal">
        <p>{message}</p>
        <div className="confirmation-modal-buttons">
          <button onClick={onConfirm}>Sí</button>
          <button onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
};
