import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/ofertas")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Erro ao buscar produtos:", err));
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        🌟 Ofertas do Dia
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
          >
            <a href={product.link} target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-56 object-contain rounded-t-2xl p-4 bg-gray-100"
                />
                {product.discount && (
                  <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    -{product.discount}
                  </span>
                )}
              </div>

              <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {product.title}
                </h2>

                <p className="text-xl font-bold text-green-600 mb-4">
                  {product.price}
                </p>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-medium transition">
                  Ver Oferta
                </button>
              </div>
            </a>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-500 text-center mt-10">
        Os preços e descontos exibidos são atualizados regularmente e podem mudar sem aviso prévio.
      </p>
    </main>
  );
}
