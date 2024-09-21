import { comment } from "../data";

export async function GET(_request, { params }) {
  const newcomment = comment.find(
    (comment) => comment.id === parseInt(params.id)
  );
  return Response.json(newcomment);
}

export async function PATCH(req, { params }) {
  try {
    const body = await req.json();
    const { comment } = body;

    const index = comment.findIndex(
      (comment) => comment.id === parseInt(params.id)
    );

    if (index === -1) {
      return new Response("Comment not found", { status: 404 });
    }

    comment[index].comment = comment;
    return new Response(JSON.stringify(comment[index]), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error processing PATCH request:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  const index = comment.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  const deletedComment = comment[index];
  comment.splice(index, 1);
  return Response.json(deletedComment);
}

export async function GET(request) {

  // First of all, get search params
  const searchParams = new URL(request.url).searchParams;
  const searchQuery = searchParams.get("query");

  // Filter comments based on the search query
  const filteredComments = searchQuery
    ? comment.filter((c) => c.text.includes(searchQuery))
    : comment;

  return new Response.JSON(filteredComments);
}
