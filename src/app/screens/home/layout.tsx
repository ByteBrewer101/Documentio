"use client"
import TopBar from "@/app/components/TopBar";
import { signIn, signOut, useSession } from "next-auth/react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {

    const session = useSession()

  return <div>
    <TopBar onSignin={signIn} onSignout={signOut} user={session.data?.user} />
    {children}
    </div>;
}
