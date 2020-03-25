const crypto = require('crypto');
const connection = require('../database/connection');


module.exports = {

    /** Busca os dados no banco  */

    async index(request, response) {
        const ongs = await connection('ongs').select('*');
     
       return response.json(ongs);
     },

     /** Insere os dados no banco */

    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body;

    const id = crypto.randomBytes(4).toString('HEX');
    
    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    return response.json({ id });
    }
};