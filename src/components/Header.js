import React from "react";
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <header className='header'>
      <Link to='/'>
        <h1>Rick &amp; Morty Fan Page</h1>
      </Link>
    </header>
  );
}
