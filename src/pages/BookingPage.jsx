import { useReducer } from "react";
import BookingForm from "../components/BookingForm";
import BookingSlot from "../components/BookingSlot";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../api";

// ---------- initializeTimes لقراءة times و booked من localStorage ----------
export function initializeTimes(date = new Date()) {
  let dateObj = typeof date === "string" ? new Date(date) : date;
  if (!(dateObj instanceof Date) || isNaN(dateObj)) dateObj = new Date();

  const storedBookings = JSON.parse(localStorage.getItem("bookings")) || {};
  const times = fetchAPI(dateObj);

  return times.map(time => {
    const bookingKey = `${dateObj.toISOString().split('T')[0]}-${time}`;
    return { time, booked: storedBookings[bookingKey] || false };
  });
}

// ---------- timesReducer لتحديث times عند تغيير التاريخ أو حجز وقت ----------
export function timesReducer(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES": {
      const dateObj = typeof action.date === "string" ? new Date(action.date) : action.date;
      const times = fetchAPI(dateObj);
      const storedBookings = JSON.parse(localStorage.getItem("bookings")) || {};

      return times.map(time => {
        const bookingKey = `${dateObj.toISOString().split('T')[0]}-${time}`;
        return { time, booked: storedBookings[bookingKey] || false };
      });
    }

    case "BOOK_TIME":
      return state.map(t =>
        t.time === action.time ? { ...t, booked: true } : t
      );

    default:
      return state;
  }
}

function BookingPage() {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);

  function submitForm(formData) {
    const success = submitAPI(formData);

    if (success) {
      navigate("/confirmed");
    } else {
      alert("Booking failed. Please try again.");
    }
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1 id="form-h1">Reserve a Table</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />

      <h2 id="slot-h2">Available Times</h2>
      <ul id="slot-ul">
        {availableTimes.map(t => (
          <BookingSlot key={t.time} timeObj={t} />
        ))}
      </ul>
    </div>
  );
}

export default BookingPage;
