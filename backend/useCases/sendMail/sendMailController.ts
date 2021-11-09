import { Request, Response } from "express";
import { SendMailUseCase } from "./sendMailUseCase";




export class SendMailController {

  async handle(request: Request, response: Response){

    const { nome, email, mensagem } = request.body

    // const nome = 'Italo Ferreira Lopes'
    // const email = 'grd788@gmail.com'
    // const mensagem = 'oefhwoefwef'

    const sendMailUseCase = new SendMailUseCase()

    await sendMailUseCase.execute({
      nome,
      email,
      mensagem
    })

    response.status(201).send("Email enviado! volte para a pagina!")
  }
}