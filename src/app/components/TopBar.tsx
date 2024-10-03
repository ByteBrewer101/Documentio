import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TopBar() {
  return (
    <div className="absolute bg-green-500 flex justify-between w-1/2 p-4 rounded-xl ">
      <h1 className="text-5xl">Title</h1>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
