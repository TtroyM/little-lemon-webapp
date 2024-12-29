import logo from './assets/little-lemon-photos/logo.jpg';

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <h1>Little Lemon</h1>
    </header>
  );
}

export default Header;