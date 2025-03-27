export function ModalLayout(props) {
  const { className, modalStyle, showModal } = props;

  if (showModal) {
    return (
      <div
        className={`w-full z-50 flex items-center justify-center h-full 
        bg-black bg-opacity-40 fixed left-0 top-0 ${className}`}
      >
        <div className={`bg-white rounded-2xl z-10 ${modalStyle}`}>
          {props.children}
        </div>
      </div>
    );
  }
  return null;
}
