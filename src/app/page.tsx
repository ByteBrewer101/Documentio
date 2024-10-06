"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import TopBar from "./components/TopBar";
import Homepage from "./screens/Homepage/Homepage";



export default function Home() {
const session = useSession()
  

  return (
    <div>
      <TopBar onSignin={signIn} onSignout={signOut} user={session.data?.user} />
      <Homepage />
    </div>
  );
 

 

}
