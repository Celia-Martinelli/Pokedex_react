import './Footer.scss';
import { Segment } from 'semantic-ui-react';

export default function Footer() {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <Segment basic>
      <footer className="footer">
        <div className="footer__container">
          <a className="footer__link" href="https://pokeapi.co/">
            PokéAPI
          </a>
          <a className="footer__link" href="https://github.com/celiamartinelli">
            GitHub
          </a>
          <a
            className="footer__link"
            href="https://www.linkedin.com/in/celiamartinelli/"
          >
            LinkedIn
          </a>
          <p className="footer__copyright">Pokédex - Copyright © - {year}</p>
        </div>
      </footer>
    </Segment>
  );
}
