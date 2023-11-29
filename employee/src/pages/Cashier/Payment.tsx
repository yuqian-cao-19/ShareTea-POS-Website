import "./cashier.scss";
import { useState } from "react";

interface Props {
  setPayPage: React.Dispatch<React.SetStateAction<boolean>>;
  num: Number;
}

function Payment({ setPayPage, num }: Props) {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "var(--GREEN-MED)",
        }}
      >
        <div
          style={{ fontSize: "25px", marginLeft: "50px", paddingTop: "50px" }}
        >
          Payment Complete
        </div>
        <div
          style={{ fontSize: "25px", marginLeft: "50px", paddingTop: "50px" }}
        >
          Your number is {num.toString()}
        </div>
        <button
          className="back_to_order_button"
          onClick={() => {
            setPayPage(false);
          }}
        >
          Order
        </button>
      </div>
    </>
  );
}

export default Payment;
