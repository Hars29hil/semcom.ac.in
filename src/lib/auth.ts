export type Role = 'admin' | 'counsellor' | 'librarian' | 'vp';

export interface AuthUser {
  username: string;
  role: Role;
  name: string;
}

const AUTH_USER_KEY = 'semcom_admin_user';
const AUTH_TOKEN_KEY = 'semcom_auth_token';

export const getAuthUser = (): AuthUser | null => {
  try {
    const user = localStorage.getItem(AUTH_USER_KEY);
    return user ? JSON.parse(user) : null;
  } catch {
    return null;
  }
};

export const setAuthUser = (user: AuthUser): void => {
  localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
};

export const getToken = (): string | null => {
  return localStorage.getItem(AUTH_TOKEN_KEY);
};

export const setToken = (token: string): void => {
  localStorage.setItem(AUTH_TOKEN_KEY, token);
};

export const isAuthenticated = (): boolean => {
  const token = getToken();
  const user = getAuthUser();
  if (!token || !user) return false;

  // Check if JWT is expired by decoding payload
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const expiry = payload.exp * 1000; // Convert to ms
    return Date.now() < expiry;
  } catch {
    return false;
  }
};

export const logout = (): void => {
  localStorage.removeItem(AUTH_USER_KEY);
  localStorage.removeItem(AUTH_TOKEN_KEY);
  window.location.href = '/login';
};
