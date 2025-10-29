export async function GET() {
    const res = await fetch("https://jobbplassen.ekstern.dev.nav.no/api/jobs");
    const data = await res.json();
    return Response.json(data);
}
  