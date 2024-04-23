function Header() {
  return(
      <header className="App-header">
        <img src={process.env.PUBLIC_URL + '/logo.png'} className="App-logo" alt="header" />
        <h1>Challenge</h1>
      </header>
  );
};

export default Header;