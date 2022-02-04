import express, { Request, Response } from 'express'
import cors from 'cors'
 const port = config.get("port") as number;
 const host = config.get("host") as string;

const app = express();
 
app.use(express.json());


 
app.listen(port,8000, () => {
   console.log('lising')
  
});
