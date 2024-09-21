import { json } from "stream/consumers";
import { comment } from "./data";

export async function GET() {
  return Response.json(comment);
}

export async function POST(req) {
  const commentData = await req.json();
  const newcomment = {
    id: comment.length + 1,
    comment: commentData.text,
  };
  comment.push(newcomment);
  return new Response(JSON.stringify(newcomment), {
    headers: {
      "content-type": "application/json",
    },
    status: 201,
  });
}
