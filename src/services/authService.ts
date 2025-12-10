export const mockLoginRedirect = (role: "client" | "admin") => {
  if (role === "client") {
    window.location.href = "/dashboard";
  }

  if (role === "admin") {
    window.location.href = "/operator";
  }
};
