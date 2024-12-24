import React from "react";

const RSLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto w-full">
      <div>{children}</div>
    </div>
  );
};

export default RSLayout;
