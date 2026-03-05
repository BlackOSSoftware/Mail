export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[color:var(--background)] px-6 py-16 text-[color:var(--text)]">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 rounded-[32px] border border-[color:var(--border)] bg-[color:var(--surface)] p-10 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.4)]">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
          Admin Dashboard
        </p>
        <h1 className="text-4xl font-semibold">Welcome, Admin</h1>
        <p className="max-w-2xl text-lg text-[color:var(--text-muted)]">
          You are authenticated via middleware. Add your admin tools, analytics,
          and management UI here.
        </p>
      </div>
    </div>
  );
}
