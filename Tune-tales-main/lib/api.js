// lib/api.js
const API = process.env.NEXT_PUBLIC_API_URL;
const FRONTEND = process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";

/**
 * Redirect the browser to backend /login which starts Spotify OAuth.
 */
export function spotifyLogin() {
  // navigate the browser to backend /login which will start OAuth flow
  window.location.href = `${API}/login`;
}

/**
 * Get currently authenticated Spotify user (backend session must exist).
 * Returns user JSON or null.
 */
export async function getUser() {
  try {
    const res = await fetch(`${API}/me`, {
      method: "GET",
      credentials: "include" // IMPORTANT: send cookies
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("getUser error:", err);
    return null;
  }
}

export async function getWrappedData() {
  try {
    const res = await fetch(`${API}/analyze`, {
      method: "GET",
      credentials: "include"
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error("Wrapped fetch error:", err);
    return null;
  }
}
