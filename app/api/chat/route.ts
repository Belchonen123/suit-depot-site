import { NextResponse } from "next/server";
import { composeAnswer, retrieve } from "@/lib/rag";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const maxMessageLength = 800;

function normalize(input: unknown) {
  return String(input ?? "").trim().slice(0, maxMessageLength);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const messages = Array.isArray(body?.messages) ? (body.messages as ChatMessage[]) : [];
  const latest = normalize(messages.at(-1)?.content || body?.message);

  if (!latest) {
    return NextResponse.json({ error: "Message is required" }, { status: 400 });
  }

  const chunks = retrieve(latest, 4);
  const response = composeAnswer(latest, chunks);

  return NextResponse.json({
    ...response,
    retrieval: {
      query: latest,
      chunkCount: chunks.length,
    },
  });
}
