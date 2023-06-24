export type Product = {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
};

const products: Product[] = [
  {
    id: '1',
    title: 'Abstract Galaxy',
    description:
      'A mesmerizing abstract artwork inspired by the beauty of galaxies.',
    image: '/assets/abstract-galaxy.png',
    price: 220.45,
  },
  {
    id: '2',
    title: 'Dreamy Landscape',
    description:
      'A dreamy and serene landscape painting that transports you to another world.',
    image: '/assets/digitalsculpture.png',
    price: 100.75,
  },
  {
    id: '3',
    title: 'Digital Sculpture',
    description:
      'A stunning digital sculpture with intricate details and exquisite craftsmanship.',
    image: '/assets/dreamylandscape.png',
    price: 1023.2,
  },
  {
    id: '4',
    title: 'Fantasy Creatures',
    description:
      'An enchanting collection of fantasy creatures in vibrant colors and magical settings.',
    image: '/assets/fantasycreatures.png',
    price: 2039.9,
  },
];

export default products;
