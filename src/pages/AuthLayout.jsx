import { ArrowLeft } from "lucide-react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="relative">
      <Link
        to={`/`}
        className="flex items-center gap-2 w-fit absolute top-4 left-6 cursor-pointer z-20"
      >
        <span>
          <ArrowLeft />
        </span>
        Go back home
      </Link>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
