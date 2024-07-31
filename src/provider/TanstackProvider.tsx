"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import React, { ReactNode } from "react";
import { AuthProvider } from "@/src/context/AuthProvider";

const queryClient = new QueryClient();

interface TanstackProviderProps {
  children: ReactNode;
}

export default function TanstackProvider({ children }: TanstackProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
  );
}
