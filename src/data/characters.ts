const PUBLIC_URL = process.env.PUBLIC_URL;

export const characters = [
  {
    id: 1,
    name: 'Homem-Aranha',
    description:
      'Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha.',
    appearances: ['Homem-Aranha'],
    fanRating: 5,
    imageUrl: `${PUBLIC_URL}/images/Personagens/homem-aranha.jpg`,
  },
  {
    id: 2,
    name: 'Wanda Maximoff',
    description:
      'Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário. Durante anos, ela e seu irmão gêmeo, Pietro, acreditavam que eram filhos de um casal de ciganos.',
    appearances: [
      'Vingadores - Era de Ultron',
      'Capitão América - Guerra Civil',
      'Vingadores - Guerra Infinita',
      'Vingadores - Ultimato',
      'WandaVision',
    ],
    fanRating: 4,
    imageUrl: `${PUBLIC_URL}/images/Personagens/wanda-maximoff.jpg`,
  },
  {
    id: 3,
    name: 'Thanos',
    description:
      "A lua Titã era governada por Mentor (A'Lars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos.  Ao contrário do irmão, Thanos, era bem mais poderoso e almejava ainda mais.",
    appearances: [
      'Vingadores',
      'Guardiões da Galáxia - vol. I',
      'Vingadores - Guerra Infinita',
      'Vingadores - Ultimato',
    ],
    fanRating: 5,
    imageUrl: `${PUBLIC_URL}/images/Personagens/thanos.jpg`,
  },
  {
    id: 4,
    name: 'Hulk',
    description:
      'Na história original dos quadrinhos, o Hulk é um selvagem e poderoso alter ego do Dr. Robert Bruce Banner, um cientista que foi atingido por raios gama enquanto salvava um adolescente durante o teste militar.',
    appearances: [
      'Vingadores',
      'Vingadores - Era de Ultron',
      'Thor - Ragnarok',
      'Vingadores - Guerra Infinita',
      'Vingadores - Ultimato',
    ],
    fanRating: 4,
    imageUrl: `${PUBLIC_URL}/images/Personagens/hulk.jpg`,
  },
];
