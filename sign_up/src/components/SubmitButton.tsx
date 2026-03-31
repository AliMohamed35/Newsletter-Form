interface SubmitButtonProps {
  onClick: () => void;
}
function SubmitButton({ onClick }: SubmitButtonProps) {
  return (
    <>
      <button
        onClick={onClick}
        className="cursor-pointer bg-[#232742] hover:bg-linear-to-r hover:transition duration-300 ease-in hover:from-red-500 via-amber-500 to-rose-400 mt-5 text-white! p-2 rounded-xs"
      >
        Subscribe to monthly newsletter
      </button>
    </>
  );
}

export default SubmitButton;
