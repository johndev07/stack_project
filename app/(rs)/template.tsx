import React from "react";

const Template = async ({ children }: { children: React.ReactNode }) => {
  return <div className="animate-appear">{children}</div>;
};

export default Template;
