import { useState, useEffect } from "react";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [formData, setFormData] = useState({
    occasion: "",
    name: "",
    phone: "",
    guests: "",
    date: "",
    smoking: false,
    time: "",
    tableType: "",
  });

    // ---------- تخزين الأخطاء لكل حقل ----------
  const [errors, setErrors] = useState({
    occasion: "",
    name: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
    tableType: "",
  });
  const [touched, setTouched] = useState({
  occasion: false,
  name: false,
  phone: false,
  guests: false,
  date: false,
  time: false,
  tableType: false,
});

    // ---------- حالة للتحقق إذا النموذج صالح ----------
  const [isFormValid, setIsFormValid] = useState(false);

  // ---------- التحقق من كل الحقول عند كل تغيير ----------
  useEffect(() => {
    const newErrors = {};
        newErrors.occasion = formData.occasion ? "" : "Please select an occasion";
    newErrors.name =
      formData.name.length >= 3 ? "" : "Name must be at least 3 characters";
    newErrors.phone =
      formData.phone.length >= 4 ? "" : "Phone must be at least 4 digits";
    newErrors.guests =
      formData.guests >= 1 ? "" : "Guests must be at least 1";
    newErrors.date = formData.date ? "" : "Please select a date";
    newErrors.time = formData.time ? "" : "Please select a time";
    newErrors.tableType = formData.tableType ? "" : "Please select table location";

    setErrors(newErrors);

    // إذا لم يكن هناك أي رسالة خطأ → النموذج صالح
    setIsFormValid(Object.values(newErrors).every((err) => !err));
  }, [formData]);

    const handleBlur = (e) => {
      const { name } = e.target;
      setTouched({ ...touched, [name]: true });
    };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (name === "date" && value) {
      const dateObj = new Date(value);
      if (!isNaN(dateObj)) {
        dispatch({ type: "UPDATE_TIMES", date: dateObj });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      alert("Please fix the errors before submitting the form!");
      return;
    }

    // ---------- تحديث LocalStorage ----------
    const bookingKey = `${new Date(formData.date).toISOString().split('T')[0]}-${formData.time}`;
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || {};
    storedBookings[bookingKey] = true;
    localStorage.setItem("bookings", JSON.stringify(storedBookings));

    // ---------- تحديث state فوراً لإظهار اللون الأحمر ----------
    dispatch({ type: "BOOK_TIME", time: formData.time });

    // ---------- إرسال النموذج للـ API ----------
    submitForm(formData);

    setFormData({
      occasion: "",
      name: "",
      phone: "",
      guests: "",
      date: "",
      smoking: false,
      time: "",
      tableType: "",
    });
  };

  return (
    <form id="reserv-form" onSubmit={handleSubmit}>
      <h2>Please fill out the following form to reserve a table:</h2>
<label htmlFor="occasion">Occasion</label>
      <select name="occasion" id="occasion" value={formData.occasion} onChange={handleChange} onBlur={handleBlur} required>
        <option value="">Choose occasion</option>
        <option value="birthday">🎂 Birthday</option>
        <option value="anniversary">❤️ Anniversary</option>
        <option value="engagement">💍 Engagement</option>
        <option value="business">💼 Business meeting</option>
        <option value="dining">🍽️ Dining only</option>
      </select>
            {touched.occasion && errors.occasion && <p className="error">{errors.occasion}</p>}

      <input
        type="text"
        name="name"
        minLength={3}
        maxLength={14}
        placeholder="👤 Name"
        value={formData.name}
        onBlur={handleBlur}
        onChange={handleChange}
        required
      />
      {touched.name && errors.name && <p className="error">{errors.name}</p>}

      <input
        type="tel"
        name="phone"
        minLength={4}
        maxLength={16}
        placeholder="📞 Phone number"
        value={formData.phone}
        onBlur={handleBlur}
        onChange={handleChange}
        required
      />
      {touched.phone && errors.phone && <p className="error">{errors.phone}</p>}

      <input
        type="number"
        name="guests"
        min={1}
        max={20}
        placeholder="👤 Number of guests"
        value={formData.guests}
        onBlur={handleBlur}
        onChange={handleChange}
        required
      />
      {touched.guests && errors.guests && <p className="error">{errors.guests}</p>}
<label htmlFor="date">Date</label>
      <input
      id="date"
        type="date"
        name="date"
        value={formData.date}
        onBlur={handleBlur}
        onChange={handleChange}
        required
      />
      {touched.date && errors.date && <p className="error">{errors.date}</p>}
<label htmlFor="time">Time</label>
      <select name="time" id="time" value={formData.time} required onBlur={handleBlur} onChange={handleChange}>
        <option value="">Select a time</option>
        {availableTimes.map(t => (
          <option key={t.time} value={t.time} disabled={t.booked}>
            {t.time} {t.booked ? "(Booked)" : ""}
          </option>
        ))}
      </select>
      {touched.time && errors.time && <p className="error">{errors.time}</p>}

      <label>
        <input
          type="checkbox"
          name="smoking"
          checked={formData.smoking}
          onChange={handleChange}
        />
        Smoking table
      </label>

 <fieldset>
  <legend>📍 Table location</legend>

  <label htmlFor="inside">
    <input
      id="inside"
      type="radio"
      name="tableType"
      value="inside"
      checked={formData.tableType === "inside"}
      onChange={handleChange}
    />
    Inside
  </label>

  <label htmlFor="outside">
    <input
      id="outside"
      type="radio"
      name="tableType"
      value="outside"
      checked={formData.tableType === "outside"}
      onChange={handleChange}
    />
    Outside
  </label>
</fieldset>

      <button type="submit" disabled={!isFormValid} aria-label="Reserve table">
        Reserve
      </button>
    </form>
  );
}

export default BookingForm;
