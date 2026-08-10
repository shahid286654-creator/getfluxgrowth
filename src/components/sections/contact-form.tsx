"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          Array.from(formData.entries()).map(([key, value]) => [
            key,
            String(value),
          ])
        ).toString(),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="glass-card flex flex-col items-center gap-4 rounded-2xl p-10 text-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-brand-500/15 text-brand-300">
          <CheckCircle2 className="size-7" />
        </div>
        <h3 className="text-xl font-semibold">Message sent</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Thanks for reaching out — a member of our team will get back to you
          within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="glass-card space-y-6 rounded-2xl p-8"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="hidden" aria-hidden="true">
        <Label htmlFor="bot-field">Leave this field empty</Label>
        <Input id="bot-field" name="bot-field" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Jane Cooper" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="jane@company.com"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company</Label>
        <Input id="company" name="company" placeholder="Company name" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your current workflow and what's taking up the most time..."
          required
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="w-full gap-2 bg-gradient-to-r from-brand-500 to-fuchsia-500 text-white hover:opacity-90 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>

      {status === "error" && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl border border-red-400/25 bg-red-500/10 p-4 text-sm text-red-200"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0" />
          <p>
            Your message could not be sent. Please check your connection and
            try again.
          </p>
        </div>
      )}
    </form>
  );
}
