const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const apiRequest = async (endpoint, options = {}) => {
  const token =
    localStorage.getItem("token") ||
    sessionStorage.getItem("token");

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

  const contentType = response.headers.get("content-type");

  let data;

  if (contentType && contentType.includes("application/json")) {
    data = await response.json();
  } else {
    const text = await response.text();

    console.error("Non-JSON backend response:", text);

    throw new Error(
      "Server returned an invalid response. Check backend URL or API route."
    );
  }

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};