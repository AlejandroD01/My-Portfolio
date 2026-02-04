import { PORTFOLIO_SYSTEM } from "@/app/lib/portfolioSystem";


export async function POST(req: Request) {
  const { message } = await req.json();

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "meta-llama/llama-3.1-8b-instruct",

      // 🔥 Aquí agregamos tu system prompt + el mensaje del usuario
      messages: [
        {
          role: "system",
          content: PORTFOLIO_SYSTEM, // tu documentación personal
        },
        {
          role: "user",
          content: message, // lo que pregunta el usuario
        },
      ],
    }),
  });

  if (!response.ok) {
    return Response.json(
      { error: await response.text() },
      { status: response.status }
    );
  }

  const data = await response.json();
  const text = data.choices?.[0]?.message?.content ?? "Sin respuesta";

  return Response.json({ text });
}
