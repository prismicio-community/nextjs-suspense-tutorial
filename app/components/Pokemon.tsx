interface IPokemon {
  name: string;
  url: string;
}

interface IResponse {
  count: number;
  next: string;
  previous: string | null;
  results: IPokemon[];
}

export default async function Pokemon() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  const { results: pokemon } = (await response.json()) as IResponse;

  // Add an artificial delay to simulate a slow API and show the loading UI
  await new Promise((resolve) => {
    setTimeout(resolve, 4000);
  });

  return (
    <div className="flex flex-col items-center justify-center">
      {pokemon?.map((p) => (
        <p key={p.name}>{p.name}</p>
      ))}
    </div>
  );
}
