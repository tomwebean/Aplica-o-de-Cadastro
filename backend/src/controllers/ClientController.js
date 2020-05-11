const connection = require('../database/connection');

module.exports = {
  async index (req, res) {
    const { page = 1 } = req.query;
    const [count] = await connection('clients').count();
    const clients = await connection('clients')
    .limit(5)
    .offset((page - 1)* 5)
    .select('*');

  res.header('X-Total-Count', count['count(*)']);

    return res.json(clients);
  },

  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;
    const [id] = await connection('clients').insert({
      name,
      email,
      whatsapp,
      city,
      uf,
    });
  
    return res.json({ id });
  },

  async update(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;
    const { id } = req.params;

    await connection('clients').where('id', id).update({
      name,
      email,
      whatsapp,
      city,
      uf,
    })
    return res.json();
  },


  async delete(req, res) {
    const { id } = req.params;
    await connection('clients').where('id', id).delete()
    return res.json();
  },




  /*async delete(req, res) {
    const { id } = req.params;
    const client_id = req.headers.authorization;

    const client = await connection('clients')
      .where(id)
      .select('client_id')
      .first();

    if (client.client_id == client_id) {
      return res.status(401).json({ error: 'Operation not parmitted.' });
    }

    await connection('clients').where(id, id).delete();

    return res.status(204).send();
  }*/


};