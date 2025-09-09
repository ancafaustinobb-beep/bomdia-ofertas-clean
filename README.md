# Bom Dia Ofertas 🚀

Vitrine de Ofertas do Dia pronta para Next.js e deploy no Vercel.

## Como adicionar novos produtos
Edite /pages/api/ofertas.js e adicione objetos ao array 'produtos' com campos:
id, nome, precoAntigo, precoAtual, desconto, link, imagem.

## Rodando localmente
npm install
npm run dev
Abrir: http://localhost:3000

## Deploy no Vercel via CLI
cd pasta/do/projeto
vercel --confirm
vercel --prod --confirm