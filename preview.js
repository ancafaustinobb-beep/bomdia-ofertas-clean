const axios = require('axios');

async function preview() {
  try {
    const res = await axios.get('http://localhost:3000/api/ofertas');
    const products = res.data;
    console.log('\n=== Vitrine de Ofertas ===\n');
    products.forEach((p, i) => {
      console.log(`${i+1}. ${p.title}`);
      console.log(`   Link: ${p.link}`);
      console.log(`   Imagem: ${p.image}\n`);
    });
  } catch (err) {
    console.error('Erro ao buscar produtos:', err.message);
  }
}

preview();
