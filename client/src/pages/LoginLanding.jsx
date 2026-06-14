import { Link } from "react-router-dom";
import { ArrowRightIcon, ShieldIcon, UserIcon } from "lucide-react";
import LoginLeftSide from "../components/LoginLeftSide";

const LoginLanding = () => {
  const portalOptions = [
    {
      to: "/login/admin",
      role: "admin",
      title: "Admin Portal",
      description: "Sign in to manage the organization",
      icon: ShieldIcon,
    },

    {
      to: "/login/employee",
      role: "employee",
      title: "Employee Portal",
      description: "Sign in to access your employee dashboard",
      icon: UserIcon,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <LoginLeftSide />

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16 relative overflow-y-auto min-h-screen">
        <div className="w-full max-w-md animate-fade-in relative z-10">
          {/* Header */}
          <div className="mb-10 text-center md:text-left">
            <h1 className="text-3xl font-bold text-center text-gray-800">
              Welcome Back
            </h1>
            <p className="text-center text-gray-600 mt-2">
              Select a portal to continue
            </p>
          </div>

          {/* Portals List */}
          <div className="space-y-4">
            {portalOptions.map((option) => {
              return (
                <Link
                  to={option.to}
                  className="group block bg-slate-50 border border-slate-200 rounded-lg p-5 sm:p-6 transition-all duration-300 hover:border-indigo-400 hover:border-indigo-50"
                >
                  <div className="relative z-10 flex items-center justify-between gap-4 sm:gap-5">
                    <h3 className="text-lg text-slate-800 group-hover:text-indigo-600 mb-1 transition-colors">
                      {option.title}
                    </h3>
                    <ArrowRightIcon className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Footer */}
          <div className="mt-12 text-center md:text-left text-sm text-slate-400">
            <p>{new Date().getFullYear()} EMS. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLanding;
