// app/(auth)/verify-email/page.tsx

import VerifyCard from "@/components/auth/verify-card";
import AuthBackground from "@/components/auth/auth-background";

export default function VerifyEmailPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <AuthBackground />

      <div className="container mx-auto flex min-h-screen items-center justify-center px-6">
        <VerifyCard />
      </div>
    </main>
  );
}