import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as fs from 'fs';
import * as handlebars from 'handlebars';
import * as path from 'path';
import { ConfigService } from '@nestjs/config';


@Injectable()
//export class CorreoService {
  //constructor(private readonly mailerService: MailerService) {}

  //async (to: string, subject: string, text: string) {
export class CorreoService {
  private transporter;

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: configService.get<string>('MAIL_HOST'),
          port: configService.get<number>('MAIL_PORT'),
          secure: false,
          auth: {
            user: configService.get<string>('MAIL_USER'),
            pass: configService.get<string>('MAIL_PASS'),
          },
    });
  }

  async sendPaymentConfirmation(to: string, subject: string, plantilla: string, contexto: any) {

    //const templatePath = `C:/Users/khris/OneDrive/Escritorio/cineUDONE2024/cineUDONE2024/apps/back-venta-boletos/src/app/paymentinfo/templates/${plantilla}.hbs`;
    //const templatePath = path.join(__dirname, 'templates', `${plantilla}.hbs`);
    
    // Obtener la ruta base del proyecto
    const projectRoot = process.cwd();
    // Construir la ruta completa al archivo
    const templatePath = path.join(projectRoot, `apps/back-venta-boletos/src/app/paymentinfo/templates/${plantilla}.hbs`);
    const templateContent = fs.readFileSync(templatePath, 'utf8');

    // Compilar la plantilla con Handlebars
    const template = handlebars.compile(templateContent);
    const html = template(contexto);

    const mailOptions = {
      from: 'khristianhfs06@gmail.com', // Cambia esto por tu correo
      to,
      subject,
      html: html,
    };

    await this.transporter.sendMail(mailOptions);
  }
}