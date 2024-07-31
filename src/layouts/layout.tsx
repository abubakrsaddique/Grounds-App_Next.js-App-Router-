"use client";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import PrivateLayout from "@/src/components/layouts/private/PrivateLayout";
import PublicLayout from "@/src/components/layouts/public/PublicLayout";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const isPublicRoute = ["/login", "/signup", "/checkout"].includes(pathname);

  const LayoutComponent = isPublicRoute ? PublicLayout : PrivateLayout;

  return <LayoutComponent>{children}</LayoutComponent>;
};

export default Layout;
