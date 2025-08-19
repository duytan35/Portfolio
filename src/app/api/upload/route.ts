import { sanityClient } from "@/sanity/lib/client";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return new Response(JSON.stringify({ error: "No file uploaded" }), {
        status: 400,
      });
    }

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    // Upload image to Sanity
    const imageAsset = await sanityClient.assets.upload("image", buffer, {
      filename: file.name,
    });

    return new Response(
      JSON.stringify({
        message: "Image uploaded successfully",
        url: imageAsset.url,
      }),
      { status: 200 }
    );
  } catch (err: any) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "Image upload failed", details: err.message }),
      { status: 500 }
    );
  }
}
