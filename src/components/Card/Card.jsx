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
    <div>
      {pokemonCard.map((pokemon) => (
        <CardSemanticUi key={uuidv4()}>
          {pokemon.sprites && pokemon.sprites.front_default && (
            <Image src={pokemon.sprites.front_default} wrapped ui={false} />
          )}
          <CardContent>
            <CardHeader>
              <span className="number">#{pokemon.order}</span>
              {pokemon.name}
            </CardHeader>
          </CardContent>
        </CardSemanticUi>
      ))}
    </div>
  );
}
