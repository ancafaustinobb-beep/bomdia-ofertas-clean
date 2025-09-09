export default function handler(req, res) {
  const ofertas = [
    {
      "title": "Apple iPhone 13 (128 GB) - Luz das Estrelas",
      "image": "https://m.media-amazon.com/images/I/41Zbbl4P+LL._AC_SX679_.jpg",
      "link": "https://amzn.to/46n1EUG",
      "price": "R$ 4.999,00",
      "discount": "10%"
    },
    {
      "title": "Notebook Lenovo LOQ-e 15IAX9E Intel Core i5-12450HX 16GB 512GB SSD",
      "image": "https://m.media-amazon.com/images/I/71K8YV2I+LL._AC_SX522_.jpg",
      "link": "https://amzn.to/46n1XYZ",
      "price": "R$ 3.499,00",
      "discount": "12%"
    },
    {
      {
  "title": "Notebook VAIO FE15, Intel Core i7 12th, 16GB 512GB SSD, Tela 15,6 Full HD Antirreflexo, Linux - Cinza Grafite",
  "image": "https://m.media-amazon.com/images/I/71wnc1MahXL._AC_SX522_.jpg",
  "link": "https://amzn.to/46suSSe",
  "price": "R$ 5.499,00",
  "discount": "15%"
}

    }
  ];

  res.status(200).json({ status: "ok", data: ofertas });
}
