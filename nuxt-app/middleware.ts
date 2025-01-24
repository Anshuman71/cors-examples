import { next } from "@vercel/edge";

const allowedOrigins = ["https://rrv7.vercel.app"];

const corsOptions = {
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export default function middleware(request: Request) {
  // Check the origin from the request

  const origin = request.headers.get("origin") ?? "";
  const isAllowedOrigin = allowedOrigins.includes(origin);

  // Handle preflighted requests
  const isPreflight = request.method === "OPTIONS";

  if (isPreflight) {
    const preflightHeaders = {
      ...(isAllowedOrigin && { "Access-Control-Allow-Origin": origin }),
      ...corsOptions,
    };

    return Response.json({ preflight: true }, { headers: preflightHeaders });
  }

  // Handle simple requests
  const response = new Response();

  if (isAllowedOrigin) {
    response.headers.set("Access-Control-Allow-Origin", origin);
  }

  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return next(response);
}

export const config = {
  matcher: "/api/mw-cors",
};
