import Image from "next/image";
import React from "react";

export default function Brands() {
  return (
    <div className="mt-8 w-full">
      <div className="flex flex-wrap-reverse items-center justify-around rounded py-4 px-8 sm:flex-row">
        <div>
          <Image
            src="/assets/amazon-logo.svg"
            alt="Amazon Logo"
            width={100}
            height={100}
          />
        </div>
        <div>
          <Image
            src="/assets/meta-logo.svg"
            alt="Meta Logo"
            width={100}
            height={100}
          />
        </div>
        <div>
          <Image
            src="/assets/google-logo.svg"
            alt="Google Logo"
            width={100}
            height={100}
          />
        </div>
        <div>
          <Image
            src="/assets/microsoft-logo.svg"
            alt="Apple Logo"
            width={100}
            height={100}
          />
        </div>
        <div>
          <Image
            src="/assets/netflix-logo.svg"
            alt="Netflix Logo"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
