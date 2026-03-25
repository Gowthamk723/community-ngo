"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-100 to-green-300">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-xl text-center space-y-4">
        {/* Profile Icon */}
        <div className="w-20 h-20 mx-auto rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold text-2xl">
          {session?.user?.name?.charAt(0) || "U"}
        </div>

        {/* User Details */}
        <h1 className="text-xl font-bold text-gray-800">
          {session?.user?.name}
        </h1>
        <p className="text-gray-600">{session?.user?.email}</p>
        {session?.user?.role && (
          <p className="text-sm text-green-700 font-medium bg-green-100 px-3 py-1 rounded-full w-fit mx-auto">
            {session.user.role}
          </p>
        )}

        {/* Actions */}
        <button
          onClick={() => signOut()}
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200 font-semibold"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}