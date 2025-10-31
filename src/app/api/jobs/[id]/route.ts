export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const res = await fetch(`https://jobbplassen.ekstern.dev.nav.no/api/jobs/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      return Response.json({ error: "Failed to delete job" }, { status: res.status });
    }
    return Response.json({ message: "Job deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting job:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

