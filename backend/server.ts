import  Express  from "express";
import 'dotenv'
import { routes } from "./routes/routes"; 
import cors from 'cors'

const app = Express();

app.use(Express.json())
app.use(Express.urlencoded({
  extended: true
}));

app.use(cors())

app.use(routes)

app.listen(3333, () => {
  console.log("💻 Server running in port 5500")
})