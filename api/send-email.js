import nodemailer from 'nodemailer'

const emailUser = process.env.EMAIL_USER
const emailPass = process.env.EMAIL_PASSWORD
const contactRecipient = process.env.CONTACT_RECIPIENT || 'manthanchouhan18@gmail.com'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, company, message } = req.body || {}

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    if (!emailUser || !emailPass) {
      return res.status(500).json({ error: 'Email service not configured' })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass
      }
    })

    await transporter.sendMail({
      from: emailUser,
      to: contactRecipient,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${String(message).replace(/\n/g, '<br>')}</p>
        <hr>
        <p><strong>Reply To:</strong> ${email}</p>
      `,
      replyTo: email
    })

    await transporter.sendMail({
      from: emailUser,
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
          Email: ${contactRecipient}<br>
        </p>
      `
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Email error:', error)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
