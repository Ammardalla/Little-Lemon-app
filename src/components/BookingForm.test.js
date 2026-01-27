/* import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm"; */
/* 
test("renders the BookingForm heading", () => {
  const mockTimes = [{ time: "17:00", booked: false }];
  const mockDispatch = jest.fn();
  const mockSubmit = jest.fn();

  render(
    <BookingForm
      availableTimes={mockTimes}
      dispatch={mockDispatch}
      submitForm={mockSubmit}
    />
  );

  const headingElement = screen.getByText(
    "Please fill out the following form to reserve a table:"
  );
  expect(headingElement).toBeInTheDocument();
});
 */


import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookingForm from "./BookingForm";

const mockAvailableTimes = [
  { time: "17:00", booked: false },
  { time: "18:00", booked: true },
];

const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn();

const setup = () =>
  render(
    <BookingForm
      availableTimes={mockAvailableTimes}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );

test("inputs have correct HTML validation attributes", () => {
  setup();

  expect(screen.getByPlaceholderText("👤 Name")).toHaveAttribute("required");
  expect(screen.getByPlaceholderText("👤 Name")).toHaveAttribute("minlength", "3");

  expect(screen.getByPlaceholderText("📞 Phone number")).toHaveAttribute("required");
  expect(screen.getByPlaceholderText("📞 Phone number")).toHaveAttribute("minlength", "4");

  expect(screen.getByPlaceholderText("👤 Number of guests")).toHaveAttribute("min", "1");
  expect(screen.getByPlaceholderText("👤 Number of guests")).toHaveAttribute("max", "20");

  expect(screen.getByRole("button", { name: /reserve/i })).toBeDisabled();
});

test("shows error message when name is invalid", () => {
  setup();

  const nameInput = screen.getByPlaceholderText("👤 Name");

  fireEvent.blur(nameInput);
  fireEvent.change(nameInput, { target: { value: "Jo" } });

  expect(
    screen.getByText("Name must be at least 3 characters")
  ).toBeInTheDocument();
});

test("shows error when phone number is too short", () => {
  setup();

  const phoneInput = screen.getByPlaceholderText("📞 Phone number");

  fireEvent.change(phoneInput, { target: { value: "12" } });
  fireEvent.blur(phoneInput);

  expect(
    screen.getByText("Phone must be at least 4 digits")
  ).toBeInTheDocument();
});

test("shows error when time is not selected", () => {
  setup();

  const selects = screen.getAllByRole("combobox");
  const timeSelect = selects[1];

  fireEvent.blur(timeSelect);

  expect(
    screen.getByText("Please select a time")
  ).toBeInTheDocument();
});

test("form becomes valid when all inputs are correct", () => {
  setup();

  fireEvent.change(screen.getByLabelText(/occasion/i), {
    target: { value: "birthday" },
  });

  fireEvent.change(screen.getByPlaceholderText("👤 Name"), {
    target: { value: "Ahmed" },
  });

  fireEvent.change(screen.getByPlaceholderText("📞 Phone number"), {
    target: { value: "12345" },
  });

  fireEvent.change(screen.getByPlaceholderText("👤 Number of guests"), {
    target: { value: 2 },
  });

  fireEvent.change(screen.getByLabelText(/date/i), {
    target: { value: "2026-01-30" },
  });

  fireEvent.change(screen.getByLabelText(/time/i), {
    target: { value: "17:00" },
  });

  fireEvent.click(screen.getByLabelText("Inside"));

  expect(
    screen.getByRole("button", { name: /reserve/i })
  ).toBeEnabled();
});

test("submits form when valid", () => {
  setup();

  fireEvent.change(screen.getByLabelText(/occasion/i), {
    target: { value: "birthday" },
  });

  fireEvent.change(screen.getByPlaceholderText("👤 Name"), {
    target: { value: "Ahmed" },
  });

  fireEvent.change(screen.getByPlaceholderText("📞 Phone number"), {
    target: { value: "12345" },
  });

  fireEvent.change(screen.getByPlaceholderText("👤 Number of guests"), {
    target: { value: 2 },
  });

  fireEvent.change(screen.getByLabelText(/date/i), {
    target: { value: "2026-01-30" },
  });

  fireEvent.change(screen.getByLabelText(/time/i), {
    target: { value: "17:00" },
  });

  fireEvent.click(screen.getByLabelText("Inside"));

  fireEvent.click(screen.getByRole("button", { name: /reserve/i }));

  expect(mockSubmitForm).toHaveBeenCalledTimes(1);
});