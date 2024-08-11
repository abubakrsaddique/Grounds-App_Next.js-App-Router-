import { ReactNode } from "react";
import PrivateRoutes from "./PrivateRoutes";

interface PrivateLayoutProps {
  children: ReactNode;
}

const PrivateLayout = ({ children }: PrivateLayoutProps) => {
  return (
    <>
      <PrivateRoutes>{children}</PrivateRoutes>
    </>
  );
};

export default PrivateLayout;
