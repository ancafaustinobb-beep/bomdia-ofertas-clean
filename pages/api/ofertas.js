// pages/api/ofertas.js

export default function handler(req, res) {
  const ofertas = [
    {
      title: "Apple iPhone 13 (128 GB) - Luz das Estrelas",
      image: "https://m.media-amazon.com/images/I/41Zbbl4P+LL._AC_SX679_.jpg",
      link: "https://amzn.to/46n1EUG",
      price: "R$ 4.999,00",
      discount: "10%"
    },
    {
      title: "Notebook Lenovo LOQ-e 15IAX9E Intel Core i5-12450HX 16GB 512GB SSD",
      image: "https://m.media-amazon.com/images/I/71K8YV2I+LL._AC_SX522_.jpg",
      link: "https://amzn.to/46n1XYZ",
      price: "R$ 3.499,00",
      discount: "12%"
    },
    {
      title: "Notebook VAIO FE15, Intel Core i7 12th, 16GB 512GB SSD, Tela 15,6 Full HD Antirreflexo, Linux - Cinza Grafite",
      image: "https://m.media-amazon.com/images/I/71wnc1MahXL._AC_SX522_.jpg",
      link: "https://amzn.to/46suSSe",
      price: "R$ 5.499,00",
      discount: "15%"
    },
    {
      title: "Fone de Ouvido Bluetooth Sony WH-1000XM5",
      image: "https://m.media-amazon.com/images/I/61xXU1w5+XL._AC_SX679_.jpg",
      link: "https://amzn.to/46abcde",
      price: "R$ 1.799,00",
      discount: "8%"
    },
    {
      title: "Smart TV Samsung 55\" QLED 4K",
      image: "https://m.media-amazon.com/images/I/81Tv+Q3s+XL._AC_SX679_.jpg",
      link: "https://amzn.to/46fghij",
      price: "R$ 4.199,00",
      discount: "10%"
    },
    {
      title: "Smartwatch Apple Watch Series 8",
      image: "https://m.media-amazon.com/images/I/61j8dYl3VML._AC_SX522_.jpg",
      link: "https://amzn.to/46ijklm",
      price: "R$ 2.999,00",
      discount: "12%"
    },
    {
      title: "Tablet Samsung Galaxy Tab S8",
      image: "https://m.media-amazon.com/images/I/71n5kF+qTWL._AC_SX522_.jpg",
      link: "https://amzn.to/46nopqr",
      price: "R$ 3.299,00",
      discount: "10%"
    },
    {
      title: "Câmera Canon EOS Rebel T7",
      image: "https://m.media-amazon.com/images/I/81k2VZ9eNWL._AC_SX679_.jpg",
      link: "https://amzn.to/46stuvw",
      price: "R$ 4.499,00",
      discount: "9%"
    },
    {
      title: "Caixa de Som JBL Flip 6",
      image: "https://m.media-amazon.com/images/I/71F5z+WdLWL._AC_SX522_.jpg",
      link: "https://amzn.to/46xyzab",
      price: "R$ 599,00",
      discount: "15%"
    }
  ];

  res.status(200).json({ status: "ok", data: ofertas });
}
