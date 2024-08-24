import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { name, email, subject, message } = req.body;

      if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: "All fields are Required." });
      }
      const savedContact = await prisma.contact.create({
        data: {
          name,
          email,
          subject,
          message,
        },
      });

      res.status(200).json(savedContact);
    } catch (error) {
      console.error("Error Saving Contact Form Data:", error);
      res.status(500).json({ error: "Something went wrong." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: `Method ${req.method} not allowed.` });
  }
}












// import type { NextApiRequest, NextApiResponse } from "next";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "POST") {
//     const { name, email, subject, message } = req.body;

//     if (!name || !email || !subject || !message) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     try {
//       const contact = await prisma.contact.create({
//         data: {
//           name,
//           email,
//           subject,
//           message,
//         },
//       });
//       return res.status(200).json(contact);
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ error: "An error occurred while saving" });
//     }
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

