import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const BASE_API = process.env.NEXT_PUBLIC_API_BASE_URL!

// Cookie utility functions
const setCookie = (name: string, value: string, days: number = 7) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

const deleteCookie = (name: string) => {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
};

interface User {
  id: string;
  username: string;
  email: string;
 
}

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  getToken: () => string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
  // Placeholder for other API actions
  // fetchProfile?: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      isLoggedIn: false,
      user: null,
      token: null,
      loading: false,
      error: null,
      getToken: () => {
        return get().token || localStorage.getItem('token');
      },
      setToken: (token: string) => {
        localStorage.setItem('token', token);
        set({ token });
      },
      clearToken: () => {
        localStorage.removeItem('token');
        set({ token: null });
      },
      login: async (username, password) => {
        set({ loading: true, error: null });
        try {
          const res = await fetch(`${BASE_API}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
          });
          if (!res.ok) {
            const data = await res.json();
            set({ loading: false, error: data.message || 'Login failed' });
            return false; 
          }

          const { data } = await res.json();

          const {user} = data

          // Store token in both Zustand state and localStorage
          if (data.token) {
            get().setToken(data.token);
          }
          // Set username in cookie
          setCookie('username', data.username, 7); // Cookie expires in 7 days

          set({
            isLoggedIn: true,
            user: user, // Store the full user object
            loading: false,
            error: null,
          });
          return true;
        } catch {
          set({ loading: false, error: 'Network error' });
          return false;
        }
      },
      logout: () => {
        // Clear username cookie
        deleteCookie('username');
        // Remove token from both Zustand state and localStorage
        get().clearToken();
        set({ isLoggedIn: false, user: null, error: null });
      },
      // fetchProfile: async () => {},
    }),
    {
      name: 'auth-storage', // name of the item in storage
      partialize: (state) => ({
        isLoggedIn: state.isLoggedIn,
        user: state.user,
        token: state.token,
      }),
    }
  )
)
