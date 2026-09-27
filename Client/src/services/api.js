const API_URL = import.meta.env.VITE_API_URL;

export const apiRequest = async (endpoint, options = {}) => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}${endpoint}`, {
    method: options.method || "GET",
    headers: {
      "Content-Type": "application/json",
      ...(token && {
        Authorization: `Bearer ${token}`,
      }),
      ...(options.headers || {}),
    },
    body: options.body
      ? JSON.stringify(options.body)
      : undefined,
  });

  // Check if the response is actually JSON before parsing
  const contentType = response.headers.get("content-type");
  let data;
  
  if (contentType && contentType.includes("application/json")) {
    data = await response.json();
  } else {
    // If it's HTML (like a 404 or 500 error page), capture the text
    const text = await response.text();
    data = { message: text || "Server returned a non-JSON response" };
  }

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};