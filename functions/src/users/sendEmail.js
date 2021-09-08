import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kaurmanjit4056@gmail.com',
        pass: 'manjit4056',
    }
});

export const sendEmail = ({ to, from, subject, message }) => {
    const mailOptions = {
        to,
        from,
        subject,
        text: message,
    };

    return transporter.sendMail(mailOptions);
}