"use client";
import { ReactNode, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuthContext } from "@/src/context/AuthProvider";

interface PrivateRoutesProps {
  children: ReactNode;
}

const PrivateRoutes: React.FC<PrivateRoutesProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { user, loading } = useAuthContext();

  useEffect(() => {
    if (!loading) {
      const authRoutes = ["/dashboard"];
      if (!user && authRoutes.includes(pathname)) {
        router.push("/login");
      }
    }
  }, [loading, user, pathname, router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return <>{children}</>;
};

export default PrivateRoutes;
