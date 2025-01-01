import React, {useState} from 'react';

const ReserveForm = () => {
  const [indoorOutdoor, setIndoorOutdoor] = useState('indoor');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('2');

  const handleIndoorOutdoorChange = (e) => {
    setIndoorOutdoor(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
  };

  return (
    <form className='reserve-form'>
      {/*Radio buttons for indoor/outdoor selection*/}
      <div className='radio-group'>
      <label>
      <input
        type="radio"
        id="indoor"
        name="indoorOutdoor"
        value="indoor"
        checked={indoorOutdoor === 'indoor'}
        onChange={handleIndoorOutdoorChange}
      />
      Indoor
      </label>
      <label>
      <input
        type="radio"
        id="outdoor"
        name="indoorOutdoor"
        value="outdoor"
        checked={indoorOutdoor === 'outdoor'}
        onChange={handleIndoorOutdoorChange}
      />
      Outdoor
      </label>
    </div>

    {/*Date, time, and guests input fields*/}
    <div className ='form-row'>
      <label htmlFor="date">Date</label>
      <input
        type="date"
        id="date"
        name="date"
        value={date}
        onChange={handleDateChange}
      />
    </div>

      {/*Time input field*/}
      <div className ='form-row'>
        <label htmlFor="time">Time</label>
        <input
          type="time"
          id="time"
          name="time"
          value={time}
          onChange={handleTimeChange}
        />
      </div>

      {/*Guests dropdown*/}
      <div className ='form-row'>
        <label htmlFor="guests">Guests</label>
        <select
            id="guests"
            name="guests"
            value={guests}
            onChange={handleGuestsChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5+</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ReserveForm;