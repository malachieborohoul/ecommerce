import express, {type Express, type Request, type Response} from 'express'
import { PORT } from './secrets.js'


const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => { 
  console.log(`Example app listening on port ${PORT}!`) 
})  