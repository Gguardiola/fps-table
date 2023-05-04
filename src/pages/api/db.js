import { db } from '@vercel/postgres';

export default async function handler(request, response) {
  const client = await db.connect();
  console.log("FECHTING DATA")
 
  try {
 /*    const insert = ['Cussy#44431','YUZU 5.4.1','Ryzen 7 5700x - RTX2060 - 32GB RAM', '30FPS estables con bajones','Jugable'];
    await client.sql`INSERT INTO userPerformance VALUES (DEFAULT, ${insert[0]}, ${insert[1]}, ${insert[2]}, ${insert[3]}, ${insert[4]});`;
    console.log("INSERT") */
  } catch (error) {
    return response.status(500).json({ error });
  }
 
  const userPerformance = await client.sql`SELECT * FROM userPerformance;`;
  const {rows: data} = userPerformance;
  console.log(data)
  return response.status(200).json({ data });
}
