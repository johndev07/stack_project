import Image from "next/image";
import React from "react";
export const metadata = {
  title: "Page not found",
};
const NotFound = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="px-2 flex flex-col gap-4 items-center ">
        <h2 className="text-2xl">Page Not Found</h2>
        <p>Could no find the requested resource</p>
        <Image
          className="m-0 rounded-xl"
          src="/images/not-found-1024x1024.png"
          alt="sad computer"
          width={300}
          height={300}
          sizes="300px"
          priority={true}
          title="Page Not Found"
        />
      </div>
    </div>
  );
};

export default NotFound;
