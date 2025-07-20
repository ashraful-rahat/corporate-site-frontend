import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* Shared layout for this route */}
      {children}
    </div>
  );
}
