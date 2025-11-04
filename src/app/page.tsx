import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import { caller, getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Client } from "./client";

export default async function Page() {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.getUsers.queryOptions());
  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Client />
      </HydrationBoundary>
    </div>
  );
}
