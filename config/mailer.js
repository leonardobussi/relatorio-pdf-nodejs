const nodemailer = require("nodemailer");

const html = `<h1>Teste dos deuses</h1>`;

const mailerConfig = async ({ body = html, from, subject = "teste", file }) => {
  let transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    secure: false, // Usually true if connecting to port 465
    auth: {
      // credenciais do email trap
      user: "",
      pass: "",
    },
  });

  return await transporter.sendMail({
    from,
    to: "email-de-envio-@gmail.com",
    subject,
    html: body,
    attachments: [file],
  });
};

module.exports = { mailerConfig };
