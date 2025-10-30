export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const backendUrl = `https://jobbplassen.ekstern.dev.nav.no/api/jobs/${id}/cover`;
    const res = await fetch(backendUrl);

    if (!res.ok) {
      console.log(`Cover image not found for job ${id}: ${res.status}`);
      return new Response(null, { status: 404 });
    }

    const imageData = await res.arrayBuffer();
    const contentType = res.headers.get('content-type') || 'image/jpeg';

    return new Response(imageData, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error(`Error fetching cover image for job ${id}:`, error);
    return new Response(null, { status: 500 });
  }
}
