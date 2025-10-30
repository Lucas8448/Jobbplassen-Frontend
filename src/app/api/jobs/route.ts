export async function GET() {
  try {
    const res = await fetch("https://jobbplassen.ekstern.dev.nav.no/api/jobs");
    if (!res.ok) {
      return Response.json({ error: "Failed to fetch jobs" }, { status: res.status });
    }
    const data = await res.json();
    return Response.json(data);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
