import Card from '@/components/Card/Card';
import LoadMore from '@/components/LoadMore/LoadMore';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function ListPage() {
  // Liste des détails complets de Pokémon
  const [pokemonList, setPokemonList] = useState([]);
  // Chargement en attente réponse API
  const [loading, setLoading] = useState(false);
  // page supplémentaire avec 20 pokemon de plus
  const [nextPage, setNextPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${(nextPage - 1) * 20}&limit=20`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPokemonList((prevList) => {
          let newState;

          if (nextPage > 1) {
            // Si je suis en trai d'ajouter de nouveau elements...
            newState = [...prevList, ...data.results];
          } else {
            // Si c'est une nouvelle recherche ...
            newState = data.results;
          }

          return newState;
        });
      })
      .finally(() => setLoading(false));
  }, [nextPage]);

  return (
    <div>
      <h1>Liste des Pokémons</h1>
      <Card
        className="card"
        pokemonCard={pokemonList}
        Onclick={() => {
          console.log('click');
        }}
        as={NavLink}
        to="/:id"
      />
      <LoadMore
        loading={loading}
        setNextPage={() => setNextPage((prevPage) => prevPage + 1)}
      />
    </div>
  );
}
