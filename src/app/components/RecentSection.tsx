import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function RecentSection() {
  return (
    <ScrollArea className="h-96 w-full rounded-md border ">
      <div className="flex space-x-2 h-full w-max">
        <div className="bg-red-500 w-[300px] h-full">Hello</div>
        <div className="bg-red-500 w-[300px] h-full">Hello</div>
        <div className="bg-red-500 w-[300px] h-full">Hello</div>
        <div className="bg-red-500 w-[300px] h-full">Hello</div>
        <div className="bg-red-500 w-[300px] h-full">Hello</div>
        <div className="bg-red-500 w-[300px] h-full">Hello</div>
        <div className="bg-red-500 w-[300px] h-full">Hello</div>
        <div className="bg-red-500 w-[300px] h-full">Hello</div>
        <div className="bg-red-500 w-[300px] h-full">Hello</div>
        <div className="bg-red-500 w-[300px] h-full">Hello</div>
        <div className="bg-red-500 w-[300px] h-full">Hello</div>
        <div className="bg-red-500 w-[300px] h-full">Hello</div>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
