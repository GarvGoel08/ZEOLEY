import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { formData } = req.body;

  if (!formData) {
    return res.status(400).json({ message: "All fields are required" });
  }
  let text = `Name:${formData.fname} Email:${formData.mail} Phone Number:${formData.pnumber} Message:${formData.msg}`
  console.log(text)
  if(!formData.fname || !formData.mail || !formData.pnumber){
    return res.status(400).json({ message: "All fields are required" });
  }
  if(!formData.msg){
    formData.msg = ""
  }
    

  try {
    // Configure the transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your app password
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to:process.env.REC_EMAIL,
      subject:"Request for enquiry",
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <h2 style="color: #2c3e50; text-align: center;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.fname}</p>
        <p><strong>Email Address:</strong> ${formData.mail}</p>
        <p><strong>Phone Number:</strong> ${formData.pnumber || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <div style="background: #f4f4f4; padding: 10px; border-radius: 5px;">
          ${formData.msg ? formData.msg.replace(/\n/g, "<br>") : "No message provided"}
        </div>
        <hr>
        <p style="font-size: 12px; color: #888; text-align: center;">This email was generated from your contact form.</p>
      </div>
    `
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to send email", error });
  }
}
