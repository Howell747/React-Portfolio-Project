import React from 'react'


const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Chattanooga</h1>
      <div className="links">
        <a href="/">Downtown</a>
        <a href="/southside">SouthSide</a>
        <a href="/northshore">North Shore</a>
        <a href="/stelmo">St. Elmo</a>
      </div>
    </nav>
  );
}
 
export default Navbar;