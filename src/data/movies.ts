const PUBLIC_URL = process.env.PUBLIC_URL;

export const movies = [
  {
    id: 1,
    title: 'Capitão América: Primeiro Vingador',
    description:
      'Em Capitão América: O Primeiro Vingador, conhecemos a história de Steve Rogers (Chris Evans) e como ele se tornou o melhor soldado do mundo.',
    imageUrl: `${PUBLIC_URL}/images/Filmes/capitao-america.jpg`,
    streamingPlatformLogos: [`${PUBLIC_URL}/Marcas/disney-plus.png`],
    rating: 4,
    mcuOrder: 1,
    releaseYear: 2011,
  },
  {
    id: 2,
    title: 'Capitã Marvel',
    description:
      'Capitã Marvel, parte do exército de elite dos Kree, uma raça alienígena, encontra-se no meio de uma batalha entre seu povo e os Skrulls.',
    imageUrl: `${PUBLIC_URL}/images/Filmes/capita-marvel.jpg`,
    streamingPlatformLogos: [`${PUBLIC_URL}/Marcas/disney-plus.png`],
    rating: 4,
    mcuOrder: 2,
    releaseYear: 2019,
  },
  {
    id: 3,
    title: 'Homem de Ferro',
    description:
      'Tony Stark (Robert Downey Jr.) é um industrial bilionário, que também é um brilhante inventor, ao ser sequestrado, ele é obrigado a construir uma arma devastadora, mas ao invés disso, cria uma armadura capaz de mudar a história.',
    imageUrl: `${PUBLIC_URL}/images/Filmes/homem-de-ferro.jpg`,
    streamingPlatformLogos: [`${PUBLIC_URL}/Marcas/disney-plus.png`],
    rating: 3,
    mcuOrder: 3,
    releaseYear: 2008,
  },
  {
    id: 4,
    title: 'Homem de Ferro 2',
    description:
      'O mundo já sabe que o inventor bilionário Tony Stark (Robert Downey Jr.) é o super-herói blindado Homem de Ferro. Sofrendo pressão do governo, da mídia e do público para compartilhar sua tecnologia com as forças armadas',
    imageUrl: `${PUBLIC_URL}/images/Filmes/homem-de-ferro-2.jpg`,
    streamingPlatformLogos: [`${PUBLIC_URL}/Marcas/disney-plus.png`],
    rating: 4,
    mcuOrder: 4,
    releaseYear: 2010,
  },
  {
    id: 5,
    title: 'Thor',
    description:
      'Quando é banido do reino de Asgard e exilado na Terra, o arrogante guerreiro Thor (Chris Hemsworth) é obrigado a lutar para reaver seus poderes perdidos.',
    imageUrl: `${PUBLIC_URL}/images/Filmes/thor.jpg`,
    streamingPlatformLogos: [`${PUBLIC_URL}/Marcas/disney-plus.png`],
    rating: 4,
    mcuOrder: 6,
    releaseYear: 2011,
  },
];
