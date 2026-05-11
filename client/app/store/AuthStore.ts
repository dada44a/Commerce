import { create } from "zustand";

type User = {
    name: string;
    email: string;
    role: string;
};

type AuthStore = {
    user: User | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<boolean>;
    checkAuth: () => Promise<void>;
    logout: () => Promise<void>;
    error: string | null;
};

export const useAuthStore = create<AuthStore>((set) => ({
    user: null,
    loading: false,
    error: null,

    login: async (email, password) => {
        try {
            set({ loading: true });

            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ email, password }),
            });

            if (!res.ok) {
                const errorData = await res.json();
                set({ loading: false, error: errorData.message || "Login failed" });
                return false;
            }


            const data = await res.json();

            set({
                user: data.user,
                loading: false,
            });

            alert("Logged in successfully!");
            return true;


        } catch (error) {
            console.log(error);

            set({
                loading: false,
                error: "An error occurred while logging in."
            });
            return false;
        }
    },

    checkAuth: async () => {
        try {
            set({ loading: true });

            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });

            if (res.ok) {
                const data = await res.json();
                set({ user: data.user, loading: false });
            } else {
                set({ user: null, loading: false });
            }
        } catch (error) {
            console.log(error);
            set({ user: null, loading: false });
        }
    },

    logout: async () => {
        try {
            set({ loading: true });

            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
                method: "POST",
                credentials: "include",
            });

            set({
                user: null,
                loading: false,
            });

        } catch (error) {
            console.log(error);

            set({
                loading: false,
            });
        }
    }
}));