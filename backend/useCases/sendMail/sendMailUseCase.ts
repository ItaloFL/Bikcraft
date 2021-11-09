import nodemailer, { Transporter } from 'nodemailer'
import smtpTransport from 'nodemailer-smtp-transport'
import 'dotenv'

export interface userSettings{
  nome: string
  email: string
  mensagem: string
}

export class SendMailUseCase {

  private client: Transporter

  constructor () {

    // const mail = process.env.API_MAIL_USER
    // const pass = process.env.API_MAIL_PASSWORD
    
    this.client = nodemailer.createTransport(smtpTransport({
      service: 'gmail',
      port: 465,
      host: 'smtp.gmail.com',
      secure: true,
      auth: {
        user: 'italotestmail@gmail.com',
        pass: 'byxqbcokjkbaclzo'
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
