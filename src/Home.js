import React from 'react';
import './index.css';

export const Home = () => {
return(
<div id="wrapper">
  <header className="header">
    <h1>mari goto</h1>
  </header>
  <main>
    <section>
      <h2>hum_or_rec@outlook.com</h2><br/>
      <a href="https://github.com/marigotten" target="_blank" rel="noopener noreferrer">
      <span className="iconify" data-icon="fa-brands:github-square" data-inline="false"></span>
      </a>
    </section>
  </main>
</div>
);
}
export default Home;