import './Footer.scss';
import { Segment } from 'semantic-ui-react';

export default function Footer() {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <Segment basic>
      <footer className="footer">
        <a href="https://pokeapi.co/">PokéAPI</a>
        <a href="https://github.com/celiamartinelli"> GitHub </a>
        <a href="https://www.linkedin.com/in/celiamartinelli/"> LinkedIn </a>
        <p className="footer__copyright">Pokédex - Copyright © - {year}</p>
      </footer>
    </Segment>
  );
}
