const Nodemailer = require('nodemailer')
const mailGen = require('mailgen')

const getBill = async (req, res) => {
    const config = {
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        },
    }

    const transporter = Nodemailer.createTransport(config)

    try {
        const { name, email, msg } = req.body

        if (!name || !email || !msg) {
            return res
                .status(500)
                .send({ success: false, message: 'please provide all fields' })
        }

        //email matter

        // const MailGen = new mailGen({
        //     theme: 'default',
        //     product: {
        //         name: 'Mailgen',
        //         link: 'https://mailgen.js',
        //     },
        // })

        // let response = {
        //     body: {
        //         name: 'samarth',
        //         intro: 'your bill had arrived',
        //         table: {
        //             data: [
        //                 {
        //                     item: 'NodeMailer Stack book',
        //                     description: 'A backend app',
        //                     price: '10.99',
        //                 },
        //             ],
        //         },
        //         outro: 'looking forward for more buisseness',
        //     },
        // }

        // let mail = MailGen.generate(response)

        const message = {
            from: 'samarthvalmiki7@gmail.com',
            to: 'samarthvalmiki7@gmail.com',
            subject: 'Regarding MERN Portfolio',
            text: 'hello world ?',
            html: `<h5> Detail Information </h5>
              <ul>
              <li>
              <p>Name : ${name} </p>
              </l1> 
              <li>
              <p>email : ${email} </p>
              </l1> 
              <li>
              <p>message : ${msg} </p>
              </l1> 
              </ul>
            
            `,
        }

        transporter.sendMail(message)

        res.status(200).send({ success: true, mail: 'mail sent suceessfull' })
    } catch (error) {
        console.log(error)

        return res.status(500).send({ success: false, message: error })
    }
}

module.exports = {
    getBill,
}
