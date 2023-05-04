import { db } from '@vercel/postgres';
const bodyParser = require('body-parser');

export default async function handler(request, response) {
  
  if(request.method == "POST"){
    const res = request.body;
    console.log("ADD DATA"+res)
  
    try {
      console.log("conn db")
      const client = await db.connect();
      await client.sql`INSERT INTO userPerformance VALUES (DEFAULT, ${res.username}, ${res.emulator}, ${res.components}, ${res.performance}, ${res.veredict});`;
    } catch (error) {
      if(error.code == "23505") return response.status(500).json({ mensaje:"ERROR: Ya introduciste un valor con ese usuario" });
      else return response.status(500).json({ error });
    }
  }

  return response.status(200).json({ mensaje: 'Datos recibidos' });
}