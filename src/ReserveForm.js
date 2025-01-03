import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { initializeTimes, updateTimes } from './reserveAPI';

const ReserveForm = () => {
  const [indoorOutdoor, setIndoorOutdoor] = useState('indoor');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('2');

  // Fetch available times from the API
  const [availableTimes, setAvailableTimes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchInitialTimes = async () => {
      const times = await initializeTimes();
      setAvailableTimes(times);
    };
    fetchInitialTimes();
  }, []);

  const handleIndoorOutdoorChange = (e) => {
    setIndoorOutdoor(e.target.value);
  };

  const handleDateChange = async (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);

    const updatedTimes = await updateTimes(selectedDate);
    setAvailableTimes(updatedTimes);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form className="reserve-form" onSubmit={handleSubmit}>
      <label>
        Indoor/Outdoor:
        <select value={indoorOutdoor} onChange={handleIndoorOutdoorChange}>
          <option value="indoor">Indoor</option>
          <option value="outdoor">Outdoor</option>
        </select>
      </label>
      <label>
        Date:
        <input type="date" value={date} onChange={handleDateChange} />
      </label>
      <label>
        Time:
        <select value={time} onChange={(e) => setTime(e.target.value)}>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </label>
      <label>
        Number of Guests:
        <input
          type="number"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          min="1"
          max="20"
        />
      </label>
      <button type="submit">Reserve</button>
    </form>
  );
};

export default ReserveForm;