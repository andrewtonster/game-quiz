import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import React from "react";
import QuizMeCard from "@/components/QuizMeCard";
type Props = {};

// it becomes a server component if you make it async
const Dashboard = async (props: Props) => {
  const session = await getAuthSession();

  if (!session?.user) {
    redirect("/");
  }
  return (
    <main className="p-8 mx-auto max-w-7x1">
      <div className="flex items-center">
        <h2 className="mr-2 text-3x1 font-bold tracking-tight">Dashboard</h2>
      </div>
      <div className="grid gap-4 mt-4 md:grid-cols-2">
        <QuizMeCard />
      </div>
      <div className="grid gap-4 mt-4 md:grid-cols-2">
        {/* <HistoryCard/> */}
      </div>
    </main>
  );
};

export default Dashboard;
