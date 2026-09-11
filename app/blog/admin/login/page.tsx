"use client";

import { useState } from "react";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      window.location.href = "/blog/admin";
    } else {
      setError("Incorrect password.");
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-neutral-900 flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        {/* Logo mark */}
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.4em] text-white mb-2">GREEN WAY SAFARIS</div>
          <div className="text-xs tracking-[0.3em] text-white">JOURNAL ADMIN</div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-b border-neutral-700 pb-2">
            <label className="block text-xs tracking-[0.2em] text-white mb-3">
              PASSWORD
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              required
              autoFocus
              className="w-full bg-transparent focus:outline-none text-sm text-white placeholder-neutral-400"
            />
          </div>

          {error && (
            <p className="text-xs text-red-400">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-neutral-900 py-3 text-xs tracking-[0.2em] hover:bg-neutral-200 transition-colors disabled:opacity-50"
          >
            {loading ? "CHECKING…" : "SIGN IN →"}
          </button>
        </form>
      </div>
    </main>
  );
}
