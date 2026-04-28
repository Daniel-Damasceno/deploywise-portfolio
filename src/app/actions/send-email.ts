"use server";

import { Resend } from "resend";
import * as z from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  company: z.string().min(2),
  project: z.string().min(10),
});

export async function sendEmail(data: z.infer<typeof contactFormSchema>) {
  // Verificação de ambiente para garantir que as variáveis estão configuradas
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
    console.error("Variáveis de ambiente RESEND_API_KEY e CONTACT_EMAIL não configuradas.");
    return { success: false, error: "Serviço de e-mail não configurado no servidor." };
  }

  const result = contactFormSchema.safeParse(data);

  if (!result.success) {
    return { success: false, error: "Dados inválidos." };
  }

  const { name, email, company, project } = result.data;

  try {
    // O domínio onboarding@resend.dev só permite enviar para o mesmo e-mail da conta do Resend para testes.
    // Em produção, você deverá verificar seu próprio domínio no Resend e substituir este 'from'.
    const emailResponse = await resend.emails.send({
      from: "DeployWise <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL,
      subject: `Novo Orçamento de ${company}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Novo Contato pelo Site</h2>
          <p>Você recebeu um novo pedido de orçamento na landing page.</p>
          <hr />
          <ul style="list-style: none; padding: 0;">
            <li><strong>Nome:</strong> ${name}</li>
            <li><strong>E-mail:</strong> ${email}</li>
            <li><strong>Empresa:</strong> ${company}</li>
          </ul>
          <h3>Mensagem/Projeto:</h3>
          <p style="background: #f4f4f4; padding: 12px; border-radius: 4px; white-space: pre-wrap;">${project}</p>
        </div>
      `,
    });

    if (emailResponse.error) {
      console.error("Erro da API Resend:", emailResponse.error);
      return { success: false, error: emailResponse.error.message };
    }

    return { success: true };
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return { success: false, error: "Falha ao enviar e-mail. Tente novamente mais tarde." };
  }
}
