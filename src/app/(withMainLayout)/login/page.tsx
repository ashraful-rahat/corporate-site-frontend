"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/store";
import Input from "@/components/form/Input";
import Form from "@/components/form/Form";
import { useForm } from "react-hook-form";

interface LoginForm {
  username: string;
  password: string;
}

const LoginPage = () => {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);
  const loading = useAuthStore((state) => state.loading);
  const error = useAuthStore((state) => state.error);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  const form = useForm<LoginForm>({
    defaultValues: { username: "", password: "" },
  });

  React.useEffect(() => {
    if (isLoggedIn) {
      router.push("/dashboard");
    }
  }, [isLoggedIn, router]);

  const onSubmit = async (data: LoginForm) => {
    await login(data.username, data.password);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <Form form={form} onSubmit={onSubmit}>
          <Input
            label="Username"
            {...form.register("username", { required: true })}
            error={form.formState.errors.username?.message}
            autoFocus
          />
          <Input
            label="Password"
            type="password"
            {...form.register("password", { required: true })}
            error={form.formState.errors.password?.message}
          />
          {error && (
            <div className="text-red-500 text-sm mb-2">{error}</div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors mt-4"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage; 