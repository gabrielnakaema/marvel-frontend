const PUBLIC_URL = process.env.PUBLIC_URL;

export const comics = [
  {
    id: 1,
    title: 'Thor: Vikings',
    description:
      'Garth Ennis e sua violência atacam novamente na HQ que leva a violência das histórias de Thor ao limite! Na minissérie de 2003 vemos vikings de um passado distante voltando a vida.',
    imageUrl: `${PUBLIC_URL}/images/HQs/thor-vikings.jpg`,
    rating: 5,
    availableAtLogos: [
      `${PUBLIC_URL}/images/Marcas/americanas.jpg`,
      `${PUBLIC_URL}/images/Marcas/amazon.jpg`,
    ],
  },
  {
    id: 2,
    title: 'Surfista Prateado: Parábola',
    description:
      'O único oponente do Devorador de Mundos é o herói que ele aprisionou na Terra: o Surfista Prateado, Galactus jurou não consumir o planeta, mas e se, em vez disso, ele transformar a civilização em seus adoradores?',
    imageUrl: `${PUBLIC_URL}/images/HQs/surfista-prateado.jpg`,
    rating: 5,
    availableAtLogos: [
      `${PUBLIC_URL}/images/Marcas/americanas.jpg`,
      `${PUBLIC_URL}/images/Marcas/amazon.jpg`,
    ],
  },
  {
    id: 3,
    title: 'Wolverine: Origens',
    description:
      'Origem é uma minissérie em quadrinhos publicada pela Marvel Comics em seis edições, entre 2001 e 2002. A história conta a revelação do passado do personagem Wolverine.',
    imageUrl: `${PUBLIC_URL}/images/HQs/wolverine-origem.jpg`,
    rating: 4,
    availableAtLogos: [
      `${PUBLIC_URL}/images/Marcas/americanas.jpg`,
      `${PUBLIC_URL}/images/Marcas/amazon.jpg`,
    ],
  },
];
