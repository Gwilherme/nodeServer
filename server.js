
const express = require('express');
const { db } = require('./connection/firebase'); // Importa a configuração do Firebase

// Configurações do servidor
const port = 3000;
let app = express();

// Middleware para JSON
app.use(express.json());


/*-------------------------------------------------------------------------------------------*/
/* Usuario */

// Endpoint para criar um usuário (POST /users)
app.post('/users', async (req, res) => {
  try {
    const { name, email } = req.body; // Dados enviados no corpo da requisição
    const userRef = await db.collection('users').add({ name, email });
    res.status(201).send({ id: userRef.id, message: 'Usuário criado com sucesso!' });
  } catch (error) {
    res.status(500).send({ error: 'Erro ao criar usuário', details: error.message });
  }
});

// Endpoint para buscar todos os usuários (GET /users)
app.get('/users', async (req, res) => {
  try {
    const snapshot = await db.collection('users').get();
    const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send({ error: 'Erro ao buscar usuários', details: error.message });
  }
});

// Endpoint para buscar um usuário específico (GET /users/:id)
app.get('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const userDoc = await db.collection('users').doc(userId).get();

    if (!userDoc.exists) {
      return res.status(404).send({ error: 'Usuário não encontrado' });
    }

    res.status(200).json({ id: userDoc.id, ...userDoc.data() });
  } catch (error) {
    res.status(500).send({ error: 'Erro ao buscar usuário', details: error.message });
  }
});

// Endpoint para atualizar um usuário (PUT /users/:id)
app.put('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, email } = req.body;
    await db.collection('users').doc(userId).update({ name, email });
    res.status(200).send({ message: 'Usuário atualizado com sucesso!' });
  } catch (error) {
    res.status(500).send({ error: 'Erro ao atualizar usuário', details: error.message });
  }
});

// Endpoint para deletar um usuário (DELETE /users/:id)
app.delete('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    await db.collection('users').doc(userId).delete();
    res.status(200).send({ message: 'Usuário deletado com sucesso!' });
  } catch (error) {
    res.status(500).send({ error: 'Erro ao deletar usuário', details: error.message });
  }
});

/*-------------------------------------------------------------------------------------------*/

/*-------------------------------------------------------------------------------------------*/
/* Notas */

// Endpoint para criar uma nota (POST /note)
app.post('/note', async (req, res) => {
  try {
    const { date, note, user } = req.body; // Dados enviados no corpo da requisição
    const userRef = await db.collection('note').add({ date, note, user });
    res.status(201).send({ id: userRef.id, message: 'nota criado com sucesso!' });
  } catch (error) {
    res.status(500).send({ error: 'Erro ao criar nota', details: error.message });
  }
});

// Endpoint para buscar todos os notas (GET /note)
app.get('/note', async (req, res) => {
  try {
    const snapshot = await db.collection('note').get();
    const note = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(note);
  } catch (error) {
    res.status(500).send({ error: 'Erro ao buscar notas', details: error.message });
  }
});

// Endpoint para buscar uma nota específico (GET /note/:id)
app.get('/note/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const userDoc = await db.collection('note').doc(userId).get();

    if (!userDoc.exists) {
      return res.status(404).send({ error: 'nota não encontrado' });
    }

    res.status(200).json({ id: userDoc.id, ...userDoc.data() });
  } catch (error) {
    res.status(500).send({ error: 'Erro ao buscar nota', details: error.message });
  }
});

// Endpoint para atualizar uma nota (PUT /note/:id)
app.put('/note/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const { date, note, user } = req.body;
    await db.collection('note').doc(userId).update({ date, note, user });
    res.status(200).send({ message: 'nota atualizado com sucesso!' });
  } catch (error) {
    res.status(500).send({ error: 'Erro ao atualizar nota', details: error.message });
  }
});

// Endpoint para deletar uma nota (DELETE /note/:id)
app.delete('/note/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    await db.collection('note').doc(userId).delete();
    res.status(200).send({ message: 'nota deletado com sucesso!' });
  } catch (error) {
    res.status(500).send({ error: 'Erro ao deletar nota', details: error.message });
  }
});


/*-------------------------------------------------------------------------------------------*/


// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor 1 rodando em http://localhost:${port}`);
});
