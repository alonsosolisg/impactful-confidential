import type { NextApiRequest, NextApiResponse } from "next";
import { mailOptions, transporter } from "../../../config/nodemailer";

interface dataType {
  name: string;
  email: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { data } = req.body as { data: dataType };
      try {
        await transporter.sendMail({
          ...mailOptions(),
          subject: `Confirmation for Impactful Confidential - ${data.name}`,
          text: `Confirmation for Impactful Confidential - ${data.name}`,
          html: `<div>
            <p>Person Name: ${data.name}</p>
            <p>Email: ${data.email}</p>
            <a href="mailto:${data.email}">Send Response</a>
            </div>`,
        });
        return res.status(200).json({ success: "Email sent" });
      } catch (error) {
        console.log(error);
        res.status(400).json({ error });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  }
  res.status(400).json("Bad Request");
}
