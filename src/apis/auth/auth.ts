export function setTokens({
  access,
  refresh,
}: {
  access: string;
  refresh: string;
}) {
  localStorage.setItem("access", access);
  localStorage.setItem("refresh", refresh);
}

export function clearTokens() {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
}
