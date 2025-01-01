import logo from './assets/little-lemon-photos/logo.jpg';

function Header() {
  return (
    <header className='header'>
      <button className='back-button' onClick={() => window.history.back()}>
        &larr;
      </button>
      <img src={logo} alt="logo" />
    </header>
  );
}

export default Header;