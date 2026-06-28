/// <reference types="vite/client" />
import { getToken } from './auth';

// ─── Types ───────────────────────────────────────────────────────────────────

export interface ApiResponse<T = unknown> {
  success: boolean;
  data: T;
  message?: string;
}

export interface EventData {
  id?: number;
  title: string;
  date?: string;
  end_date?: string;
  location?: string;
  description?: string;
  highlights?: string;
  schedule?: string;
  image_url?: string;
  departments?: string;
  level?: string;
  type?: string;
  registration_link?: string;
  status?: 'Upcoming' | 'Ongoing' | 'Completed';
  committee?: Array<{ name: string; role: string; email: string; phone: string }>;
}

export interface FacultyData {
  id?: number;
  name: string;
  email: string;
  role?: string;
  short_name?: string;
  image_url?: string;
  qualification?: string;
  area?: string;
  staff_type?: string;
  phone_number?: string;
  is_vp?: boolean;
  bio?: string;
}

export interface PressNote {
  id?: number;
  day: string;
  month: string;
  title: string;
  image_url?: string;
}

export interface Announcement {
  id?: number;
  title: string;
  date: string;
  type: 'bell' | 'file';
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
    role: string;
    short_name: string;
  };
  message?: string;
}

// ─── Core Fetcher ────────────────────────────────────────────────────────────

const getDynamicApiBase = () => {
  const envApiUrl = import.meta.env.VITE_API_URL;
  
  if (envApiUrl && envApiUrl.startsWith('http')) {
    try {
      const url = new URL(envApiUrl);
      // If the built API URL is localhost, but we are accessing it from a network IP,
      // dynamically update it to point to the current network IP but keep the API port.
      if (url.hostname === 'localhost' || url.hostname === '127.0.0.1') {
        url.hostname = window.location.hostname;
      }
      return url.toString().replace(/\/$/, '');
    } catch (e) {
      // Fallback
    }
  }
  
  // If no env variable or if it's relative, default to current host:5000/api in production
  // or just '/api' if we want to rely on proxy/relative routing.
  if (!envApiUrl && !import.meta.env.DEV) {
    return `${window.location.protocol}//${window.location.hostname}:5000/api`;
  }

  return envApiUrl || '/api';
};

export const API_BASE = getDynamicApiBase();

export const fetcher = async <T = unknown>(url: string, options: RequestInit = {}): Promise<T> => {
  const token = getToken();
  const headers: Record<string, string> = {
    ...((options.headers as Record<string, string>) || {}),
  };

  // Only set Content-Type for non-FormData requests
  if (!(options.body instanceof FormData)) {
    headers['Content-Type'] = 'application/json';
  }

  // Only send Authorization if we have a valid JWT token
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  // Remove duplicate slashes if any
  const endpoint = `${API_BASE}${url}`.replace(/([^:]\/)\/+/g, "$1");

  const response = await fetch(endpoint, {
    ...options,
    headers,
  });

  if (response.status === 401 && !url.includes('/login')) {
    sessionStorage.removeItem('semcom_admin_user');
    sessionStorage.removeItem('semcom_auth_token');
    window.location.href = '/login';
    throw new Error('Session expired. Please log in again.');
  }

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'An error occurred' }));
    throw new Error(error.message || 'API request failed');
  }

  return response.json();
};

// ─── Auth API ────────────────────────────────────────────────────────────────

export const authApi = {
  login: (credentials: LoginCredentials): Promise<LoginResponse> =>
    fetcher<LoginResponse>('/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    }),
};

// ─── Faculty API ─────────────────────────────────────────────────────────────

export const facultyApi = {
  getAll: (): Promise<ApiResponse<FacultyData[]>> =>
    fetcher(`/faculty?t=${Date.now()}`),
  add: (data: Partial<FacultyData>): Promise<ApiResponse<{ id: number }>> =>
    fetcher(`/faculty`, {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  update: (id: number, data: Partial<FacultyData>): Promise<ApiResponse<null>> =>
    fetcher(`/faculty/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
  delete: (id: number): Promise<ApiResponse<null>> =>
    fetcher(`/faculty/${id}`, {
      method: 'DELETE',
    }),
};

// ─── Upload API ──────────────────────────────────────────────────────────────

export const uploadApi = {
  uploadImage: (file: File): Promise<{ success: boolean; imageUrl: string }> => {
    const formData = new FormData();
    formData.append('file', file);
    return fetcher('/upload', {
      method: 'POST',
      body: formData,
    });
  },
};

export const uploadFile = async (file: File): Promise<{ success: boolean; imageUrl: string }> => {
  const formData = new FormData();
  formData.append('file', file);

  return fetcher<{ success: boolean; imageUrl: string }>('/upload', {
    method: 'POST',
    body: formData
  });
};

// ─── Event API ───────────────────────────────────────────────────────────────

export const eventApi = {
  getAll: (): Promise<ApiResponse<EventData[]>> => fetcher('/events'),
  add: (data: Partial<EventData>): Promise<ApiResponse<null>> =>
    fetcher('/events', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  getActivities: (): Promise<ApiResponse<unknown[]>> => fetcher('/events/activities'),
  update: (id: number, data: Partial<EventData>): Promise<ApiResponse<null>> =>
    fetcher(`/events/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
  delete: (id: number): Promise<ApiResponse<null>> =>
    fetcher(`/events/${id}`, {
      method: 'DELETE',
    }),
};

// ─── Stats API ───────────────────────────────────────────────────────────────

export const statsApi = {
  getSummary: (): Promise<ApiResponse<{
    totalPrograms: number;
    totalFaculty: number;
    totalEvents: number;
    recentActivities?: any[];
  }>> => fetcher('/stats/summary'),
};

// ─── News API ────────────────────────────────────────────────────────────────

export const newsApi = {
  getPressNotes: (): Promise<ApiResponse<PressNote[]>> => fetcher('/news/press-notes'),
  addPressNote: (data: Partial<PressNote>): Promise<ApiResponse<null>> =>
    fetcher('/news/press-notes', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  updatePressNote: (id: number, data: Partial<PressNote>): Promise<ApiResponse<null>> =>
    fetcher(`/news/press-notes/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
  deletePressNote: (id: number): Promise<ApiResponse<null>> =>
    fetcher(`/news/press-notes/${id}`, {
      method: 'DELETE',
    }),
  getAnnouncements: (): Promise<ApiResponse<Announcement[]>> => fetcher('/news/announcements'),
  addAnnouncement: (data: Partial<Announcement>): Promise<ApiResponse<null>> =>
    fetcher('/news/announcements', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  updateAnnouncement: (id: number, data: Partial<Announcement>): Promise<ApiResponse<null>> =>
    fetcher(`/news/announcements/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
  deleteAnnouncement: (id: number): Promise<ApiResponse<null>> =>
    fetcher(`/news/announcements/${id}`, {
      method: 'DELETE',
    }),
};

// ─── Config API ──────────────────────────────────────────────────────────────

export const configApi = {
  getAll: (): Promise<Record<string, string>> => fetcher('/config'),
  update: (key: string, value: string): Promise<ApiResponse<null>> =>
    fetcher('/config', {
      method: 'POST',
      body: JSON.stringify({ key, value }),
    }),
};

// ─── Inquiries API ───────────────────────────────────────────────────────────

export const inquiriesApi = {
  submit: (data: any): Promise<ApiResponse<{ id: number }>> =>
    fetcher('/inquiries', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
};
