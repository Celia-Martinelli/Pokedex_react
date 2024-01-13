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
          <Image src="" wrapped ui={false} />
          <CardContent>
            <CardHeader>
              {pokemon.name}
              <span className="number">#{pokemon.order}</span>
            </CardHeader>
          </CardContent>
        </CardSemanticUi>
      ))}
    </div>
  );
}
