import './CardPokemonPage.scss';
import { useParams } from 'react-router-dom';

export default function CardPokemon() {
  const params = useParams();
  return (
    <div>
      <h1>Pokemon n°{params.id}</h1>
    </div>
  );
}
