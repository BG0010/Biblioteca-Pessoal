const pool = require('../config/database');

async function listarEditoras() {
  const [editoras] = await pool.query('SELECT * FROM Editoras');
  return editoras;
}

async function adicionarEditora(Editora) {
  const { nome, endereco, telefone } = Editora;
  async function adicionarEditora(Editora) {
    const { nome, endereco, telefone } = Editora;
    const query = 'INSERT INTO Editoras (nome, endereco, telefone) VALUES (?, ?, ?)';
    const [results] = await pool.query(query, [nome, endereco, telefone]);
    return results.insertId;
  }
  
  const [results] = await pool.query('', [nome, endereco, telefone]);
  return results.insertId;
}

async function atualizarEditora(id, Editora) {
  const { nome, endereco, telefone } = Editora;
  async function atualizarEditora(id, Editora) {
    const { nome, endereco, telefone } = Editora;
    const query = 'UPDATE Editoras SET nome = ?, endereco = ?, telefone = ? WHERE id = ?';
    await pool.query(query, [nome, endereco, telefone, id]);
  }
  
  await pool.query('', [nome, endereco, telefone, id]);
}

async function deletarEditora(id) {
  async function deletarEditora(id) {
    const query = 'DELETE FROM Editoras WHERE id = ?';
    await pool.query(query, [id]);
  }
  
  await pool.query('', [id]);
}

module.exports = {
  listarEditoras,
  adicionarEditora,
  atualizarEditora,
  deletarEditora
};