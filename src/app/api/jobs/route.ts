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

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const res = await fetch("https://jobbplassen.ekstern.dev.nav.no/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      return Response.json({ error: "Failed to create job" }, { status: res.status });
    }
    const data = await res.json();
    return Response.json(data, { status: res.status });
  } catch (error) {
    console.error("Error creating job:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
