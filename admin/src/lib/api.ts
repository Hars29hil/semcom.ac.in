export const API_BASE_URL = 'http://localhost:5000/api';

const fetcher = async (url: string, options: any = {}) => {
  const token = localStorage.getItem('token');
  const sharedSecret = 'mysecret123';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': token ? `Bearer ${token}` : sharedSecret,
    ...options.headers,
  };

  const response = await fetch(`${API_BASE_URL}${url}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'An error occurred' }));
    throw new Error(error.message || 'API request failed');
  }

  return response.json();
};

export const authApi = {
  login: (credentials: any) => fetcher('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  }),
};

export const facultyApi = {
  getAll: () => fetcher(`/faculty?t=${Date.now()}`),
  update: (id: number, data: any) => fetcher(`/faculty/${id}`, {

    method: 'PUT',
    body: JSON.stringify(data),
  }),
};


export const studentApi = {
  getAll: () => fetcher('/students'),
};

export const uploadApi = {
  uploadImage: (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    return fetch(`${API_BASE_URL.replace('/api', '')}/api/upload`, {
      method: 'POST',
      body: formData,
    }).then(res => res.json());
  }
};

export const eventApi = {
  getAll: () => fetcher('/events'),
  add: (data: any) => fetcher('/events', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  getActivities: () => fetcher('/events/activities'),
  update: (id: number, data: any) => fetcher(`/events/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  delete: (id: number) => fetcher(`/events/${id}`, {
    method: 'DELETE',
  }),
};



export const statsApi = {
  getSummary: () => fetcher('/stats/summary'),
};

export const newsApi = {
  getPressNotes: () => fetcher('/news/press-notes'),
  addPressNote: (data: any) => fetcher('/news/press-notes', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  updatePressNote: (id: number, data: any) => fetcher(`/news/press-notes/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  deletePressNote: (id: number) => fetcher(`/news/press-notes/${id}`, {
    method: 'DELETE',
  }),
  getAnnouncements: () => fetcher('/news/announcements'),
  addAnnouncement: (data: any) => fetcher('/news/announcements', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  updateAnnouncement: (id: number, data: any) => fetcher(`/news/announcements/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  deleteAnnouncement: (id: number) => fetcher(`/news/announcements/${id}`, {
    method: 'DELETE',
  }),
};

