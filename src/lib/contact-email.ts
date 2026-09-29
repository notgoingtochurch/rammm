import { createServerFn } from "@tanstack/react-start";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactRequestSchema = z.object({
  source: z.string().trim().min(1).max(100),
  name: z.string().trim().max(100).optional().default(""),
  phone: z.string().trim().min(5).max(40),
  comment: z.string().trim().max(2000).optional().default(""),
  website: z.string().max(0).optional().default(""),
});

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export const sendContactEmail = createServerFn({ method: "POST" })
  .validator((input: unknown) => contactRequestSchema.parse(input))
  .handler(async ({ data }) => {
    if (data.website) return { success: true };

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT ?? 465);
    const user = process.env.SMTP_USER;
    const password = process.env.SMTP_PASSWORD;
    const recipient = process.env.CONTACT_EMAIL ?? user;

    if (!host || !user || !password || !recipient || !Number.isFinite(port)) {
      throw new Error("SMTP is not configured");
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: process.env.SMTP_SECURE !== "false",
      auth: { user, pass: password },
    });

    const rows = [
      ["Форма", data.source],
      ["Имя", data.name || "Не указано"],
      ["Телефон", data.phone],
      ["Комментарий", data.comment || "Не указан"],
    ];

    await transporter.sendMail({
      from: `RAM ProMaster Center <${user}>`,
      to: recipient,
      replyTo: user,
      subject: `Новая заявка с сайта: ${data.source}`,
      text: rows.map(([label, value]) => `${label}: ${value}`).join("\n"),
      html: `<h2>Новая заявка с сайта</h2>${rows
        .map(([label, value]) => `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`)
        .join("")}`,
    });

    return { success: true };
  });
