import { sanityClient } from "@/sanity/lib/client";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
      });
    }

    await sanityClient.createIfNotExists({
      _id: `subscriber-${email.replace(/[@.]/g, "-")}`,
      _type: "Subscriber",
      email,
    });

    return new Response(
      JSON.stringify({ message: "Subscribe successfully!" }),
      {
        status: 200,
      }
    );
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 500,
    });
  }
}
