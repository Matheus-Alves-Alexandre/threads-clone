import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  OrganizationSwitcher,
  SignIn,
  SignOutButton,
  SignedIn,
} from "@clerk/nextjs";
import { Organization } from "@clerk/nextjs/server";

const Topbar = () => {
  return (
    <nav className="topbar">
      <div className="flex">
        <Link href="/" className="flex items-center gap-4" />
        <Image src="/assets/logo.svg" alt="logo" width={28} height={28} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Treads</p>
      </div>
      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image
                  src={"/assets/logout.svg"}
                  alt="logout"
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
        <OrganizationSwitcher
          appearance={{
            elements: { organizationSwitcherTrigger: "py-2 px-4" },
          }}
        />
      </div>
    </nav>
  );
};

export default Topbar;