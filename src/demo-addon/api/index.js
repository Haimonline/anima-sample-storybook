const ANIMA_API_URL = "https://api.animaapp.com";
const PREFIX = "/services/s2f";

const SB_SERVICE_URL = `${ANIMA_API_URL}/${PREFIX}`;

export const authenticate = async (token) => {
  if (!token) throw new Error("No token provided");
  const res = await fetch(`${SB_SERVICE_URL}/validate_token`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  if (res.status === 200) {
    const data = await res.json();
    return { success: true, data };
  }
  if (res.status > 299) {
    const json = await res.json();
    throw new Error(json?.message || "Missing Storybook token");
  }
};

export const syncStorybook = async (token) => {
  if (!token) {
    throw new Error("No token in the query params");
  }
  await authenticate(token);
  await fetch(`${SB_SERVICE_URL}/storybook/sample`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
};
