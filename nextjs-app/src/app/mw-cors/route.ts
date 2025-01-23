export async function GET() {
  return new Response("Hello, from /mw-cors!", {
    status: 200,
  });
}
