import nodemailer from 'nodemailer'
import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

// Create transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASSWORD || 'your-app-password'
  }
})

app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, company, message } = req.body

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Send email to company
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'manthanchouhan18@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><strong>Reply To:</strong> ${email}</p>
      `,
      replyTo: email
    })

    // Send confirmation to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'We received your message - iMann',
      html: `
        <h2>Thank You, ${name}!</h2>
        <p>We have received your message and will get back to you shortly.</p>
        <p>Our team will review your inquiry and contact you soon.</p>
        <hr>
        <p>Best regards,<br><strong>iMann Team</strong></p>
        <p>
          <strong>Contact:</strong><br>
          Email: manthanchouhan18@gmail.com<br>
          Phone: +91 9009855911<br>
          Address: MIG Colony, B159 Ground Floor, Indore, India
        </p>
      `
    })

    res.json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Email error:', error)
    res.status(500).json({ error: 'Failed to send email' })
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Email server running on port ${PORT}`)
})
