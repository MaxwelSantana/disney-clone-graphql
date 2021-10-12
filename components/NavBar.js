import React from "react";
import Link from "next/link";
import Image from "next/Image";
import logo from "../public/Disney+_logo.svg";

function NavBar() {
  return (
    <div className="navbar">
      <Link href="/">
        <Image src={logo} alt="Disney Logo" width={90} height={50} />
      </Link>
    </div>
  );
}

export default NavBar;
