import "dotenv/config";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();

app.use(express.json());

const allowedOrigins = [
  process.env.ALLOWED_ORIGIN,
  process.env.OTHER_ALLOWED_ORIGIN,
  process.env.DEV_ALLOWED_ORIGIN,
].filter((origin) => origin !== undefined);

app.use(
  cors({
    origin: allowedOrigins,
  }),
);

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_USER,
    pass: process.env.ZOHO_APP_PASS,
  },
});

app.post("/contact", async (req, res) => {
  const { name, email, subject, message, website } = req.body;

  if (website) return res.status(200).json({ ok: true });

  if (!name || !subject || !email || !message) {
    return res.status(400).json({ error: "Please enter all fields" });
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Email" <${process.env.ZOHO_USER}>`,
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject: `From ${name}: ${subject}`,
      text: `${message}`,
    });
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
