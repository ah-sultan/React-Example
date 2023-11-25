import React, { useId } from "react";

const UseIdApp = () => {

    const passwordHint = useId()

  return (
    <>
      <div className="wrapper"> 
        <h3 className="title">useId Example</h3>
        <input type="password" name="" aria-describedby={passwordHint} className="border border-black p-2 mr-2"/>
        <button type="button" id={passwordHint} className="bg-black text-white rounded-none">Submit</button>
      </div>
    </>
  );
};

export default UseIdApp;
