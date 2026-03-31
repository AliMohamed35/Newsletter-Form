import iconList from "../assets/icon-list.svg";
import Form from "./Form";
import illustratorMobile from "../assets/illustration-sign-up-mobile.svg";
import illustratorDesktop from "../assets/illustration-sign-up-desktop.svg";

function MainCard() {
  const list = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "much more!",
  ];
  return (
    <>
      <div className="text-black bg-white max-w-[730px] md:p-9 flex flex-col md:flex-row gap-6 md:gap-12 rounded-2xl overflow-hidden">
        {/* Mobile illustration - visible only on small screens, positioned at top */}
        <div className="block md:hidden w-full">
          <img src={illustratorMobile} alt="Sign up illustration" className="w-full" />
        </div>

        <div className="p-4 md:p-0">
          <h1 className="text-3xl md:text-5xl font-bold mb-5">Stay Updated!</h1>
          <p className="mb-5">Join 60,000+ product managers receiving monthly updates on:</p>

          <ul className="mb-5">
            {list.map((l, index) => (
            <li key={index} className="text-[0.8rem] mb-3 font-semibold flex gap-3 items-center"><img src={iconList} alt="list icon" />{l}</li>
          ))}
          </ul>

          <div className="flex flex-col">
            <Form />
          </div>
        </div>

        {/* Desktop illustration - hidden on mobile */}
        <div className="hidden md:block">
          <img src={illustratorDesktop} alt="Sign up illustration" />
        </div>
      </div>
    </>
  );
}

export default MainCard;
