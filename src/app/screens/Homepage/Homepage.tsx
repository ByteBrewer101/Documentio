import FeedComponent from "@/app/components/FeedComponent";
import RecentSection from "@/app/components/RecentSection";

export default function Homepage() {
  return (
    <div className="flex flex-col mt-40 px-10 space-y-4 xl:mx-40 mb-40">
      <div>
        <RecentSection />
      </div>
      <div>
        <FeedComponent />
      </div>
    </div>
  );
}
