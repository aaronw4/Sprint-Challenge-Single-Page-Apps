import React from "react";
import EnhancedSearchForm from './SearchForm';

export default function WelcomePage(props) {

  return (
    <section>
      <header className='welcome'>
        <h1>Welcome to the ultimate fan site for....</h1>
        <img
          className="main-img"
          src="https://vignette.wikia.nocookie.net/logopedia/images/b/b1/Rick_and_Morty.svg/revision/latest?cb=20180522080112"
          alt="rick"
        />
      </header>
      <EnhancedSearchForm/>
    </section>
  );
}
