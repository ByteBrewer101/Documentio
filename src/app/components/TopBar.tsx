import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TopBar() {
  return (
    <div className="w-full flex items-center justify-center fixed top-6 z-50 ">
      <div className="bg-black bg-opacity-5 backdrop-blur-xl flex justify-between w-full mx-10 p-4 rounded-xl border border-gray-800  flex items-center justify-center">
        <h1 className="text-white text-3xl font-semibold">Documentio</h1>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
