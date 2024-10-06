"use client";


import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import TopBar from "./components/TopBar";
import HeroPage from "./screens/Heropage"; // Assuming HeroPage is not in pages

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/pages/homepage"); // Redirect to /homepage if authenticated
    }
  }, [status, router]);

  return (
    <div>
      <TopBar onSignin={signIn} onSignout={signOut} user={session?.user} />
      <HeroPage />
    </div>
  );
}
