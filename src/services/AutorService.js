const pool = require('../config/database');

async function listarAutores() {
    const [autores] = await pool.query('SELECT * FROM Autores');
    return autores;
  }
  
  async function adicionarAutor(Autor) {
    const { nome, biografia, dataNascimento } = Autor;
    
    async function adicionarAutor(Autor) {
      const { nome, biografia, dataNascimento } = Autor;
      const sql = 'INSERT INTO Autores (nome, biografia, dataNascimento) VALUES (?, ?, ?)';
      const [results] = await pool.query(sql, [nome, biografia, dataNascimento]);
      return results.insertId;
    }
    
    const [results] = await pool.query('', [nome, biografia, dataNascimento]);
    return results.insertId;
  }
  
  async function atualizarAutor(id, Autor) {
    const { nome, biografia, dataNascimento } = Autor;
    
    async function atualizarAutor(id, Autor) {
      const { nome, biografia, dataNascimento } = Autor;
      const query = 'UPDATE Autores SET nome = ?, biografia = ?, dataNascimento = ? WHERE id = ?';
      await pool.query(query, [nome, biografia, dataNascimento, id]);
    }
    
    await pool.query('', [nome, biografia, dataNascimento, id]);
  }
  
  async function deletarAutor(id) {
    async function deletarAutor(id) {
      const query = 'DELETE FROM Autores WHERE id = ?';
      await pool.query(query, [id]);
    }
    
    await pool.query('', [id]);
  }
  
  module.exports = {
    listarAutores,
    adicionarAutor,
    atualizarAutor,
    deletarAutor
  };