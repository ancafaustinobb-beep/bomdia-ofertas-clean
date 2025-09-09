const products = [
  {
    title: 'Samsung Vision AI TV 43" QLED 4K QEF1 2025, Pontos Quânticos, Processador com AI, Art Store, Alexa',
    image: 'https://m.media-amazon.com/images/I/61tXJTyJcFL._AC_SX522_.jpg',
    link: 'https://amzn.to/4gfunhx'
  },
  {
    title: 'Samsung Notebook Galaxy Book4, Windows 11 Home, Intel® Core™ i5, 16GB, 512GB SSD, 15.6" Full HD LED, 1.55 kg - Grafite',
    image: 'https://m.media-amazon.com/images/I/51i0Y6AKnRL._AC_SX679_.jpg',
    link: 'https://amzn.to/4ggUKDR'
  },
  {
    title: 'Samsung Smart TV 50" Crystal UHD 4K U8100F 2025',
    image: 'https://m.media-amazon.com/images/I/81fmTLGD8uL._AC_SX522_.jpg',
    link: 'https://amzn.to/4mTKns9'
  },
  {
    title: 'Samsung Celular Galaxy A26 5G 256GB, 8GB RAM, Câmera de 50MP, IP67, Tela Super AMOLED 6.7", NFC (Verde)',
    image: 'https://m.media-amazon.com/images/I/51RqnFVy3lL._AC_SX679_.jpg',
    link: 'https://amzn.to/41J5xRm'
  },
  {
    title: 'Cafeteira Espresso Automática Série 2200, Walita, Preta, 2 anos de garantia, 1400W, 110v - EP2330/35',
    image: 'https://m.media-amazon.com/images/I/519GeeQLerL._AC_SX679_.jpg',
    link: 'https://amzn.to/4nd0IIR'
  },
  {
    title: 'Philips Walita Preta Fritadeira Airfryer Essential XL Digital, 6.2L de capacidade, Garantia internacional de dois anos, 220V, 2000W',
    image: 'https://m.media-amazon.com/images/I/51uPo-c4iQL._AC_SX679_.jpg',
    link: 'https://amzn.to/45Y6MyI'
  },
  {
    title: 'Celular Samsung Galaxy S25 Ultra 5G, 512GB, 12GB RAM, Câmera Quádrupla de 200+50+10+50, Tela Grande de 6.9", Titânio Preto',
    image: 'https://m.media-amazon.com/images/I/41uS5ZSX9yL._AC_SX679_.jpg',
    link: 'https://amzn.to/3IeJv26'
  },
  {
    title: 'Celular Samsung Galaxy S25 Ultra 5G, 512GB, 12GB RAM, Câmera Quádrupla de 200+50+10+50, Tela Grande de 6.9", Titânio Jetblack',
    image: 'https://m.media-amazon.com/images/I/41dv7LltRmL._AC_SY300_SX300_QL70_ML2_.jpg',
    link: 'https://amzn.to/4nqNYOu'
  },
  {
    title: 'Notebook VAIO FE15, Intel Core i7 12th, 16GB 512GB SSD, Tela 15,6" Full HD Antirreflexo, Linux - Cinza Grafite, VJFE54F11XB2731H',
    image: 'https://m.media-amazon.com/images/I/71wnc1MahXL._AC_SX522_.jpg',
    link: 'https://amzn.to/46suSSe'
  }
];

// Função para mostrar produtos no terminal
products.forEach((p, i) => {
  console.log(`\n${i+1}. ${p.title}`);
  console.log(`   Link: ${p.link}`);
  console.log(`   Imagem: ${p.image}`);
});
console.log(`\n✅ Total de produtos: ${products.length}\n`);
