import { useState } from "react";
import SubmitButton from "./SubmitButton";

function Form() {
    const [value, setValue] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleSubmit =() =>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailRegex.test(value)){
            setError("Valid email required!")
            return;
        }

        setError("");
    }
    
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
            <label htmlFor="">Email Address</label>
            {
                error ? (
                    <span className="text-red-600!">{error}</span>
                ) : ""
            }
        </div>
        <input type="email" className={`border p-3 ${error ? "bg-red-200 border-red-700" : ""}`} placeholder="email@company.com" value={value} onChange={(e) => setValue(e.target.value)}/>

        <SubmitButton onClick={handleSubmit}/>
      </div>
    </>
  );
}

export default Form;
