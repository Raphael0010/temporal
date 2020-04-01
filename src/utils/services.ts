export const logged = (): void => {
  localStorage.setItem("login", "true");
};

export const logout = (): void => {
  localStorage.removeItem("login");
  localStorage.removeItem("email");
};
export const isLogged = (): boolean => {
  if (localStorage.getItem("login") === "true") {
    return true;
  } else {
    return false;
  }
};

export const putEmail = (data: string): void => {
  localStorage.setItem("email", data);
};

export const getEmail = (): string | null => {
  return localStorage.getItem("email");
};
