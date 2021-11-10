import  Express  from "express";
import cors from 'cors'
import 'dotenv'
import { routes } from "./routes/routes"; 

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