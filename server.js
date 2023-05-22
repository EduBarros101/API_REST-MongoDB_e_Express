import app from './src/app.js'

const port = process.env.PORT || 3000

// const rotas = {
//   '/': 'Curso de NodeJS.',
//   '/livros': 'Página de livros.',
//   '/autores': 'Lista de autores.',
//   '/editora': 'Página de editora.',
//   '/sobre': 'Informações sobre o projeto.',
// }

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' })
//   res.end(rotas[req.url])
// })

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}.`)
})
