import { db } from '@vercel/postgres';
 
export default async function handler(request, response) {
  const client = await db.connect();
 
  try {
    await client.sql`CREATE TABLE userPerformance ( User varchar(500), Emulator varchar(500), Components varchar(1000), Performance varchar(1000), Veredict varchar(500) );`;
    const insert = ['Cussy#44431','YUZU 5.4.1','Ryzen 7 5700x - RTX2060 - 32GB RAM', '30FPS estables con bajones','Jugable'];
    await client.sql`INSERT INTO Pets (Name, Owner) VALUES (${insert[0]}, ${insert[1]}, ${insert[2]}, ${insert[3]}, ${insert[4]});`;
  } catch (error) {
    return response.status(500).json({ error });
  }
 
  const pets = await client.sql`SELECT * FROM userPerformance;`;
  return response.status(200).json({ pets });
}