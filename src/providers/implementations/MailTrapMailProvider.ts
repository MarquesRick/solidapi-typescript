import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";

// yarn add nodemailer 
// yarn add @types/nodemailer -D
export class MailTrapMailProvider implements IMailProvider{
    private transporter: Mail;

    constructor(){
        this.transporter = nodemailer.createTransport({
            host: 'smtp.mailtrap.io',
            port: 2525,
            auth:{
                user: '6643a234de76fc',
                pass: 'e17c7c3fe5be1d'
            }
        });
    }

    async sendMail(message: IMessage): Promise<void>{
        await this.transporter.sendMail({
           to: {
               name: message.to.name,
               address: message.to.email,
           },
            from: {
                name: message.from.name,
                address: message.from.email,
            },
            subject: message.subject,
            html: message.body
        })
    }
}