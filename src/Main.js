import React from 'react';
import { useNavigate } from 'react-router-dom';
import reserve from './assets/little-lemon-photos/reserve.jpg';
import ReserveForm from './ReserveForm';
import {submitAPI} from './reserveAPI';

function Main() {
  return (
    <main className="main">
      <section>
        <img src={reserve} alt="Table Reserved" />
          <div className='form-section'>
            <h2>Reserve a Table</h2>
            <p>Welcome to the Little Lemon Restaurant's "Reserve a Table" page! We're excited to have you join us for a delicious meal. Whether it's a cozy dinner for two or a celebration with friends, our easy reservation system is here to make sure you have a spot to enjoy our tasty dishes.</p>
            <ReserveForm />
          </div>
      </section>
  </main>
  );
}

function submitForm() {
  const form = document.querySelector('.reserve-form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    try {
      const response = await fetch('https://api.example.com/reserve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        window.location.href = '/confirmed';
      } else {
        console.error('Reservation failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
}

document.addEventListener('DOMContentLoaded', submitForm);

export default Main;