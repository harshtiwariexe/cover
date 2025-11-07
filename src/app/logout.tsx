"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner"; // optional, replace with alert() if you don't use sonner

export const LogoutButton: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      // call the function (authClient.signOut() should return { error? } for Supabase-like APIs)
      const res = await authClient.signOut();

      if (res?.error) {
        toast.error(res.error.message ?? "Sign out failed");
        return;
      }

      toast.success("Signed out");
      // redirect or refresh as needed
      router.replace("/");
    } catch (err: any) {
      toast.error(err?.message ?? "Unexpected error during sign out");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button onClick={handleLogout} disabled={loading} type="button">
      {loading ? "Signing out…" : "Logout"}
    </Button>
  );
};
