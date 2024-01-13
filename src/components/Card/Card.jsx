import './Card.scss';
import {
  CardHeader,
  CardContent,
  Card as CardSemanticUi,
  Image,
} from 'semantic-ui-react';

import { v4 as uuidv4 } from 'uuid';

export default function Card({ pokemonCard }) {
  return (
    <div className="card">
      {pokemonCard.map((pokemon) => (
        <CardSemanticUi className="card__ui" key={uuidv4()}>
          {pokemon.sprites && pokemon.sprites.front_default && (
            <Image
              className="card__img"
              src={pokemon.sprites.front_default}
              wrapped
              ui={false}
            />
          )}
          <CardContent className="card__content">
            <CardHeader className="card__header">
              <span className="number">#{pokemon.order}</span>
              {pokemon.name}
            </CardHeader>
          </CardContent>
        </CardSemanticUi>
      ))}
    </div>
  );
}
