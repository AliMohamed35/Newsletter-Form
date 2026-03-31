import iconList from "../assets/icon-list.svg";
import illustrator from "../assets/illustration-sign-up-desktop.svg";
import Form from "./Form";

function MainCard() {
  const list = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "much more!",
  ];
  return (
    <>
      <div className="text-black bg-white max-w-[730px] p-9 flex gap-12 rounded-2xl">
        <div>
          <h1 className="text-5xl font-bold mb-5">Stay Updated!</h1>
          <p className="mb-5">Join 60,000+ product managers receiving monthly updates on:</p>

          <ul className="mb-5">
            {list.map((l, index) => (
            <li key={index} className="text-[0.8rem] mb-3 font-semibold flex gap-3 items-center js"><img src={iconList} alt="list icon" />{l}</li>
          ))}
          </ul>

          <div className="flex flex-col">
            <Form />
          </div>
        </div>

        <div>
            <img src={illustrator} alt="" />
        </div>
      </div>
    </>
  );
}

export default MainCard;
