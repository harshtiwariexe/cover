import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import { LogoutButton } from "./logout";

export const Page = async () => {
  await requireAuth();
  const data = await caller.getUsers();

  return (
    <div>
      Protected Componnts
      {JSON.stringify(data)}
      <LogoutButton />
    </div>
  );
};

export default Page;
