const express = require('express');
const mysql = require('mysql2');  // Use mysql2 em vez de mysql

const app = express();
const port = 3000;

app.use(express.json());

// Configuração da conexão com o MySQL
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'autokit'
});

conn.connect((err) => {
  if (err) {
    console.error('Erro ao conectar com o banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL.');
});

// Definir uma rota de teste
app.get('/', (req, res) => {
  res.send('Servidor backend está funcionando!');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
