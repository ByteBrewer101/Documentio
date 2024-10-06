import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface AppbarProps {
  user?: {
    name?: string | null;
  };
  // TODO: can u figure out what the type should be here?
  onSignin: any;
  onSignout: any;
}

export default function TopBar({onSignin,onSignout,user}:AppbarProps) {
  return (
    <div className="w-full flex items-center justify-center fixed top-6 z-50 ">
      <div className="bg-black bg-opacity-5 backdrop-blur-xl flex justify-between w-full mx-10 p-4 rounded-xl border border-gray-800  flex items-center justify-center">
        <h1 className="text-white text-3xl font-semibold">Documentio</h1>

        <div className="flex space-x-4">
          <Button
            onClick={user ? onSignout : onSignin}
            className="text-white px-4 text-sm rounded-xl"
          >
            {user ? "Logout" : "Login"}
          </Button>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
