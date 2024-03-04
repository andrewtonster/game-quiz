import { Button } from "@/components/ui/button";
import Image from "next/image";
import { prisma } from "@/lib/db";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import SignInButton from "@/components/SignInButton";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";

// SERVER COMPONENT

export default async function Home() {
  const session = await getAuthSession();

  // if logged in just redirect to this
  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Welcome to Quiz App !</CardTitle>
          <CardDescription>This Create Quizzes using AI</CardDescription>
        </CardHeader>
        <CardContent>
          <SignInButton text="Sign In with Google" />
        </CardContent>
      </Card>
    </div>
  );
}
