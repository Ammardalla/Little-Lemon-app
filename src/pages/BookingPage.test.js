/* import { render, screen } from "@testing-library/react";
import BookingPage, { initializeTimes, timesReducer } from "./BookingPage";

describe("BookingPage component and functions", () => {
  test("renders 'Reserve a Table' heading", () => {
    render(<BookingPage />);
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
  });

  // 2️⃣ اختبار initializeTimes
  test("initializeTimes returns the correct initial times array", () => {
    const times = initializeTimes();
    expect(times).toEqual([
      { time: "10:00", booked: false },
      { time: "11:00", booked: false },
      { time: "16:00", booked: false },
      { time: "17:00", booked: false },
      { time: "20:00", booked: false },
      { time: "21:00", booked: false },
    ]);
  });

  // 3️⃣ اختبار updateTimes (UPDATE_TIMES) في timesReducer
  test("UPDATE_TIMES returns the same state initially", () => {
    const initialState = [
      { time: "10:00", booked: false },
      { time: "11:00", booked: false },
    ];

    const newState = timesReducer(initialState, { type: "UPDATE_TIMES", date: "2026-01-21" });
    expect(newState).toEqual(initialState);
  });
}); */

import { render, screen } from "@testing-library/react";
import BookingPage, { initializeTimes, timesReducer } from "./BookingPage";
import { fetchAPI } from "../api";
import { MemoryRouter } from "react-router-dom";


// Mock للـ API
jest.mock("../api", () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn(),
}));

describe("BookingPage component and functions", () => {
    beforeEach(() => {
    fetchAPI.mockReturnValue(["17:00"]);
  });

  test("renders 'Reserve a Table' heading", () => {
    render(
      <MemoryRouter>
        <BookingPage />
      </MemoryRouter>
    );    expect(screen.getByText("Reserve a Table")).toBeInTheDocument();
  });

  // ===============================
  // 1️⃣ اختبار initializeTimes
  // ===============================
  test("initializeTimes returns non-empty array of times from fetchAPI", () => {
    fetchAPI.mockReturnValue(["17:00", "18:30", "20:00"]);

    const result = initializeTimes(new Date("2026-01-21"));

    expect(fetchAPI).toHaveBeenCalledTimes(1);

    expect(result).toEqual([
      { time: "17:00", booked: false },
      { time: "18:30", booked: false },
      { time: "20:00", booked: false },
    ]);
  });

  // ===============================
  // 2️⃣ اختبار UPDATE_TIMES
  // ===============================
  test("timesReducer UPDATE_TIMES updates state based on selected date", () => {
    fetchAPI.mockReturnValue(["19:00", "21:30"]);

    const initialState = [];

    const action = {
      type: "UPDATE_TIMES",
      date: "2026-01-21",
    };

    const newState = timesReducer(initialState, action);

    expect(fetchAPI).toHaveBeenCalledTimes(1);

    expect(newState).toEqual([
      { time: "19:00", booked: false },
      { time: "21:30", booked: false },
    ]);
  });
});
