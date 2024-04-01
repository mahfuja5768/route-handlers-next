import comments from "@/app/data/comments";
import { redirect } from "next/navigation";

export async function GET(_request, { params }) {
  const commentId = parseInt(params.id);

  if (parseInt(commentId) > comments.length) {
    redirect("/api/comments");
  }

  const comment = comments.find((comment) => comment.id === commentId);
  return Response.json(comment);
}

export async function PATCH(request, { params }) {
  const comment = await request.json();
  const commentId = parseInt(params.id);
  const commentIndex = comments.findIndex(
    (comment) => comment.id === commentId
  );
  comments[commentIndex].text = comment.text;
  return Response.json(comments[commentIndex]);
}

export async function DELETE(request, { params }) {
  const commentId = parseInt(params.id);
  const commentIndex = comments.findIndex(
    (comment) => comment.id === commentId
  );
  const commentTODelete = comments[commentIndex];
  comments.splice(commentIndex, 1);
  return Response.json(commentTODelete);
}
