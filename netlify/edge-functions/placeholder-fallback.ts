import type { Context } from "https://edge.netlify.com";

const normalCache = "public, max-age=900, s-maxage=604800, must-revalidate";
const shortCache = "public, max-age=900, s-maxage=3600, must-revalidate";

export default async (request: Request, context: Context) => {
  // Get the normal response and always add the CORS header
  const response = await context.next();
  response.headers.set("Access-Control-Allow-Origin", "*");
  // Parse the request URL to get the file and folder names, then determine how to proceed
  const url = new URL(request.url);
  const [folder, filename] = url.pathname.split("/").slice(-2);
  switch (response.status) {
    case 200:
      // Success: Return response with shorter cache life for placeholders
      if (folder === "_placeholder") {
        response.headers.set("Cache-Control", shortCache);
      } else {
        response.headers.set("Cache-Control", normalCache);
      }
      return response;
    case 404:
      // Not Found: If query is for fallback, rewrite the URL to the placeholder
      if (
        folder !== "_placeholder" &&
        url.searchParams.has("fallback", "true")
      ) {
        return new URL(`/_placeholder/${filename}`, url);
      }
      // Otherwise return the 404 with the shorter cache life
      response.headers.set("Cache-Control", shortCache);
      return response;
    default:
      // Probably another error, so force revalidation
      response.headers.set("Cache-Control", "no-cache");
      return response;
  }
};
