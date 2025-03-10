"use client";

import { FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        toast.success("Subscribed successfully!");
        setEmail("");
      } else {
        const data = await res.json();
        toast.error(data.error || "Failed to subscribe.");
      }
    } catch {
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1">
      <Toaster position="top-right" reverseOrder={false} />
      <h3 className="mb-4 text-lg font-semibold">Weekly Newsletter</h3>
      <p className="mb-4 text-sm">Get blog articles and offers via email</p>
      <form className="space-y-2" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-slate-600"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          disabled={loading}
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
    </div>
  );
};
