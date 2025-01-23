export async function GET() {
  return new Response("Hello, from /cors-api!", {
    status: 200,
  });
}
