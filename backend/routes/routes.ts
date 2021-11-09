import { Router } from "express";
import { SendMailController } from "../useCases/sendMail/sendMailController"; 


const routes = Router()

const sendMailController = new SendMailController()

routes.post("/sendMail", sendMailController.handle)

export { routes }