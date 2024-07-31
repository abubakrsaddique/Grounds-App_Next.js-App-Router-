import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";

import { useAuthContext } from "@/src/context/AuthProvider";

interface PrivateRoutesProps {
  children: ReactNode;
}

const PrivateRoutes: React.FC<PrivateRoutesProps> = ({ children }) => {
  const pathname = usePathname();
  const { user, loading } = useAuthContext();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (!loading) {
        const authRoutes = ["/dashboard"];
        if (!user && authRoutes.includes(url)) {
          window.location.href = "/login";
        }
      }
    };

    handleRouteChange(pathname);
  }, [loading, user, pathname]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return <>{children}</>;
};

export default PrivateRoutes;
