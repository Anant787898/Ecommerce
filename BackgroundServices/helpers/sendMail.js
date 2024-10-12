import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

function createTransporter(config) {
  const transporter = nodemailer.createTransporter(config);
  return transporter;
}

let configurations = {
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  requireTls: true,
  auth: {
    user: process.env.EMAIL,
    password: process.env.PASSWORD,
  },
};

const sendMail = async (messageoption) => {
  const transporter = await createTransporter(configurations);
  await transporter.verify();

  await transporter.sendMail(messageoption, (error, info) => {
    if (error) {
      console.log(error);
    }
    console.log(info.response);
  });
};

export default sendMail;
