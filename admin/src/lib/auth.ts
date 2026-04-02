export type Role = 'admin' | 'counsellor';

export interface User {
  username: string;
  role: Role;
  name: string;
}

export const getAuthUser = (): User | null => {
  const user = localStorage.getItem('semcom_admin_user');
  return user ? JSON.parse(user) : null;
};

export const setAuthUser = (user: User) => {
  localStorage.setItem('semcom_admin_user', JSON.stringify(user));
};

export const logout = () => {
  localStorage.removeItem('semcom_admin_user');
  window.location.href = '/login';
};
