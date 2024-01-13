import Card from '@/components/Card/Card';
import LoadMore from '@/components/LoadMore/LoadMore';
import { useEffect, useState } from 'react';

export default function ListPage() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextPage, setNextPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${(nextPage - 1) * 20}&limit=20`
    )
      .then((response) => response.json())
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
      <Card pokemonCard={pokemonList} />
      <LoadMore
        loading={loading}
        setNextPage={() => setNextPage((prevPage) => prevPage + 1)}
      />
    </div>
  );
}
