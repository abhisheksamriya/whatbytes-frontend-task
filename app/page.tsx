import HomeComponents from "@/components/HomeComponent";
import { Suspense } from "react";

export default function Home() {
  return (
<Suspense fallback={<div className="text-center py-20 text-gray-500">Loading...</div>}>
      <HomeComponents />
    </Suspense>
  );
}