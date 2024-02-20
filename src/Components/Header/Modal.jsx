import PropTypes from 'prop-types';

const Modal = ({ isOpen, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-20 left-0 right-0 bottom-0 md:inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen  text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-secondarycl bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-secondarycl rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-secondarycl">
            <div className="w-full">
                {children}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;