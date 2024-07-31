"use client";
import { ReactNode, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuthContext } from "@/src/context/AuthProvider";

interface PublicRoutesProps {
  children: ReactNode;
}

const PublicRoutes: React.FC<PublicRoutesProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { user, loading } = useAuthContext();

  useEffect(() => {
    if (!loading && user) {
      const restrictedRoutes = ["/login", "/signup"];
      if (restrictedRoutes.includes(pathname)) {
        router.push("/dashboard");
      }
    }
  }, [loading, user, pathname, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-semibold">Loading...</h1>
      </div>
    );
  }

  return <>{children}</>;
};

export default PublicRoutes;
