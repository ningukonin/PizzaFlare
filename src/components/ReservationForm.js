import React, { useState } from 'react';
import axios from 'axios';

const ReservationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validate form inputs
    if (!name || !email || !phone || !date || !time || !guests) {
      setError('All fields are required.');
      return;
    }

    try {
      // Send reservation data to the API endpoint
      const response = await axios.post('https://api.example.com/reservations', {
        name,
        email,
        phone,
        date,
        time,
        guests,
      });

      if (response.status === 200) {
        setSuccess('Your reservation has been made successfully!');
        setName('');
        setEmail('');
        setPhone('');
        setDate('');
        setTime('');
        setGuests('');
      } else {
        setError('Failed to make the reservation. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="reservation-form">
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <input
        type="number"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        placeholder="Number of Guests"
      />
      <button type="submit">Reserve</button>
    </form>
  );
};

export default ReservationForm;
