const baseURL = import.meta.env.VITE_API_BASE_URL;

export async function joinWaitlist({ name, email, referredBy }) {
  const response = await fetch(`${baseURL}/api/waitlist`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, referredBy }),
  });

  if (!response.ok) {
    throw new Error("Failed to join the waitlist");
  }

  return await response.json();
}
