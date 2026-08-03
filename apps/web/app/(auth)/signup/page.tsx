import AuthBackground from "@/components/auth/auth-background";
import AuthBranding from "@/components/auth/auth-branding";
import SignupForm from "@/components/auth/signup-form";

export default function SignupPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <AuthBackground />

      <div className="container relative mx-auto flex min-h-screen items-center px-6 py-10">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          <AuthBranding />

          <SignupForm />
        </div>
      </div>
    </main>
  );
}