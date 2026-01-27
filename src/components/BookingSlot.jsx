import React from "react";

function BookingSlot({ timeObj }) {
  const style = {
    padding: "10px",
    border: "1px solid gray",
    cursor: timeObj.booked ? "not-allowed" : "pointer",
    backgroundColor: timeObj.booked ? "#f8d7da" : "#d4edda", // أحمر للوقت المحجوز، أخضر للمتاح
    color: timeObj.booked ? "#721c24" : "#155724",
    borderRadius: "5px",
  };

  return (
    <li style={style}>
      {timeObj.time} {timeObj.booked ? "(Booked)" : ""}
    </li>
  );
}

export default BookingSlot;
