import { useLocation, useNavigate } from "react-router-dom";
import DismissMessage from "../components/DismissMessage";
import success from '../assets/icon-success.svg';

function SuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "";

  const handleDismiss = () => {
    navigate("/");
  };

  return (
    <>
      <div className="text-black bg-white max-w-[530px] p-9 rounded-2xl">
        <img src={success} alt="" className="mb-9"/>

        <div>
          <h1 className="text-6xl font-bold mb-4">Thanks for subscribing!</h1>
          <p className="text-gray-600 mb-6">
            A confirmation email has been sent to <strong>{email}</strong>.
            Please open it and click the button inside to confirm your
            subscription.
          </p>
        </div>

        <DismissMessage onClick={handleDismiss} />
      </div>
    </>
  );
}

export default SuccessPage;
