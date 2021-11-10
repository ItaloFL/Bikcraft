import nodemailer, { Transporter } from 'nodemailer'
import 'dotenv'
import smtpTransport from 'nodemailer-smtp-transport'

export interface userSettings{
  nome: string
  email: string
  mensagem: string
}

export class SendMailUseCase {

  private client: Transporter

  constructor () {
    const user : string = process.env.API_VALIDATION_USER
    const pass : string = process.env.API_VALIDATION_PASSWORD
    
    console.log(user, pass)

    this.client = nodemailer.createTransport(smtpTransport({
      service: 'gmail',
      port: 465,
      host: 'smtp.gmail.com',
      secure: true,
      auth: {
        user, pass
      }
    }))
  }

  async execute( {nome, email, mensagem}: userSettings){
    await this.client.sendMail({
      from: 'italotestmail@gmail.com',
      to: email,
      subject: `Olá, recebemos sua mensagem! ${nome}`,
      text: mensagem
    })
  }
}
