const BACKEND_URL = process.env.BACKEND_URL || "https://jobbplassen.ekstern.dev.nav.no";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const res = await fetch(`${BACKEND_URL}/api/jobs/${id}`, {
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

