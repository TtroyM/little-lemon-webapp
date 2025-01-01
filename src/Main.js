import reserve from './assets/little-lemon-photos/reserve.jpg';
import ReserveForm from './ReserveForm';

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

export default Main;