import path from 'path'
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  const jsonDirectory = path.join(process.cwd(), '/src/utils');
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + '/performance.json', 'utf8');
  //Return the content of the data file in json format
  const obj = JSON.parse(fileContents);
  res.status(200).json(obj);
}