"use client";

import { useMemo, useState } from "react";
import { ThemeToggle } from "./components/ThemeToggle";

type SenderKey = "primary" | "secondary";

const senderOptions: { key: SenderKey; label: string; hint: string }[] = [
  { key: "primary", label: "GoDaddy Email 1", hint: "Primary sender" },
  { key: "secondary", label: "GoDaddy Email 2", hint: "Secondary sender" },
];

const templateOptions = [
  { key: "server_payment", label: "Server Payment Successfully" },
  { key: "server_account", label: "Server Account Created Successfully" },
  { key: "market_data", label: "Market Data Purchase Successfully" },
];

export default function Home() {
  const [sender, setSender] = useState<SenderKey>("primary");
  const [to, setTo] = useState("");
  const [template, setTemplate] = useState(templateOptions[0].key);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  const canSend = useMemo(() => to.trim().length > 3, [to]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sender, to, template }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setStatus("error");
        setMessage(data?.message ?? "Failed to send email.");
        return;
      }

      setStatus("sent");
      setMessage("Email sent successfully.");
    } catch {
      setStatus("error");
      setMessage("Network error while sending email.");
    }
  };

  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--text)]">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-10 px-6 py-10 lg:flex-row lg:items-center">
        <section className="flex w-full flex-1 flex-col justify-between gap-10 rounded-[32px] border border-[color:var(--border)] bg-[color:var(--surface)]/90 p-10 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.4)] backdrop-blur">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
                BlackOS Mail
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight">
                GoDaddy Email
                <span className="block text-[color:var(--accent)]">
                  Delivery Panel
                </span>
              </h1>
            </div>
            <ThemeToggle />
          </div>

          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-6 text-sm text-[color:var(--text-muted)]">
            <p className="text-base font-semibold text-[color:var(--text)]">
              Quick send, clean tracking
            </p>
            <p className="mt-2 leading-relaxed">
              Select the sender email, choose a template, and deliver the
              message instantly to the recipient.
            </p>
          </div>

          <div className="grid gap-4 text-sm text-[color:var(--text-muted)] sm:grid-cols-3">
            <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4">
              <p className="text-xs uppercase tracking-[0.2em]">Senders</p>
              <p className="mt-2 text-lg font-semibold text-[color:var(--text)]">
                2 Active
              </p>
            </div>
            <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4">
              <p className="text-xs uppercase tracking-[0.2em]">Templates</p>
              <p className="mt-2 text-lg font-semibold text-[color:var(--text)]">
                3 Ready
              </p>
            </div>
            <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4">
              <p className="text-xs uppercase tracking-[0.2em]">Mode</p>
              <p className="mt-2 text-lg font-semibold text-[color:var(--text)]">
                Public Page
              </p>
            </div>
          </div>
        </section>

        <section className="w-full max-w-xl flex-1 rounded-[28px] border border-[color:var(--border)] bg-[color:var(--surface)] p-8 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.4)]">
          <h2 className="text-2xl font-semibold">Send Email</h2>
          <p className="mt-2 text-sm text-[color:var(--text-muted)]">
            Choose sender, pick template, and enter recipient.
          </p>

          <form className="mt-8 space-y-5" onSubmit={onSubmit}>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
                Sender Email
              </label>
              <div className="grid gap-3 sm:grid-cols-2">
                {senderOptions.map((option) => (
                  <button
                    key={option.key}
                    type="button"
                    onClick={() => setSender(option.key)}
                    className={`rounded-2xl border px-4 py-3 text-left transition ${
                      sender === option.key
                        ? "border-[color:var(--accent)] bg-[color:var(--surface-muted)]"
                        : "border-[color:var(--border)]"
                    }`}
                  >
                    <p className="text-sm font-semibold">{option.label}</p>
                    <p className="text-xs text-[color:var(--text-muted)]">
                      {option.hint}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
                Recipient Email
              </label>
              <input
                type="email"
                value={to}
                onChange={(event) => setTo(event.target.value)}
                required
                className="w-full rounded-2xl border border-[color:var(--border)] bg-transparent px-4 py-3 text-base text-[color:var(--text)] outline-none transition focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[color:var(--accent)]/40"
                placeholder="customer@example.com"
                autoComplete="email"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
                Template
              </label>
              <select
                value={template}
                onChange={(event) => setTemplate(event.target.value)}
                className="w-full rounded-2xl border border-[color:var(--border)] bg-transparent px-4 py-3 text-base text-[color:var(--text)] outline-none transition focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[color:var(--accent)]/40"
              >
                {templateOptions.map((option) => (
                  <option key={option.key} value={option.key}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {message ? (
              <div
                className={`rounded-2xl border px-4 py-3 text-sm ${
                  status === "sent"
                    ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-600"
                    : "border-red-500/40 bg-red-500/10 text-red-500"
                }`}
              >
                {message}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={!canSend || status === "sending"}
              className="flex w-full items-center justify-center rounded-2xl bg-[color:var(--accent)] px-4 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[color:var(--accent-strong)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "sending" ? "Sending..." : "Send Email"}
            </button>
          </form>

          <p className="mt-6 text-xs text-[color:var(--text-muted)]">
            Connect your GoDaddy SMTP credentials in `.env.local` to enable
            sending.
          </p>
        </section>
      </div>
    </div>
  );
}
