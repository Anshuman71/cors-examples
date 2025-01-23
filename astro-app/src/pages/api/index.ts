import type { APIRoute } from "astro";

export const ALL: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      name: "API route",
    }),
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "https://rrv7.vercel.app",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    }
  );
};
