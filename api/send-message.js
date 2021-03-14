const emailValidator = require('email-validator')

const nodemailer = require('nodemailer')

export default (req, res) => {
	console.log(req)
	if (req.body.name && req.body.email && req.body.message) {
		if (emailValidator.validate(req.body.email)) {
			const transporter = nodemailer.createTransport({
				service: 'gmail',
				auth: {
					user: process.env.GMAIL_USER,
					pass: process.env.GMAIL_PASSWORD,
				},
			})
			const mailOptions = {
				from: 'imlautaro@nuxt.club',
				to: 'dev.lautaropereyra@gmail.com',
				subject: 'Mensaje desde el sitio Web',
				text: `
					Nombre: ${req.body.name}
					Correo electrónico: ${req.body.email}
					Mensage: ${req.body.message}
				`,
			}
			transporter.sendMail(mailOptions, (err, info) => {
				if (err) {
					console.error(err)
					res.status(400).send('Ha ocurrido un error.')
				} else {
					res.status(201).send('Correo enviado.')
				}
			})
		} else {
			res.status(400).send('Ha ocurrido un error.')
		}
	} else {
		res.status(400).send('Ha ocurrido un error.')
	}
}
