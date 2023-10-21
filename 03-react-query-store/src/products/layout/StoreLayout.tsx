import { FC } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../../shared/components/navBar/NavBar";
import { StoreLayoutDefaultProps, StoreLayoutProps } from "./storeLayout.type";

export const StoreLayout: FC<StoreLayoutProps> = () => {
  return (
    <div className="flex flex-col min-h-screen pb-10">
      <NavBar />

      <div className="flex px-10">
        <Outlet />
      </div>
    </div>
  );
};

StoreLayout.propTypes = StoreLayoutProps;
StoreLayout.defaultProps = StoreLayoutDefaultProps;

export default StoreLayout;
