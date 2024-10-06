import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function RecentSection() {
  return (
    <ScrollArea className="h-96 w-full rounded-lg  ">
      <div className="flex space-x-2 h-full w-max">
        <div className="bg-blue-500 w-[300px] h-full transition-all duration-200 transform-gpu hover:w-[600px] ">
          Hello
        </div>
        <div className="bg-blue-500 w-[300px] h-full transition-all duration-200 hover:w-[600px] ">
          Hello
        </div>
        <div className="bg-blue-500 w-[300px] h-full transition-all duration-200 hover:w-[600px] ">
          Hello
        </div>
        <div className="bg-blue-500 w-[300px] h-full transition-all duration-200 hover:w-[600px] ">
          Hello
        </div>
        <div className="bg-blue-500 w-[300px] h-full transition-all duration-200 hover:w-[600px] ">
          Hello
        </div>
        <div className="bg-blue-500 w-[300px] h-full transition-all duration-200 hover:w-[600px] ">
          Hello
        </div>
        <div className="bg-blue-500 w-[300px] h-full transition-all duration-200 hover:w-[600px] ">
          Hello
        </div>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
