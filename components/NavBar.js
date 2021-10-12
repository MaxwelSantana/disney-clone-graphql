import React from "react";
import Link from "next/link";
import Image from "next/Image";
import logo from "../public/Disney+_logo.svg";

function NavBar({ account }) {
  return (
    <div className="navbar">
      <div className="logo-wrapper">
        <Link href="/">
          <Image src={logo} alt="Disney Logo" width={90} height={50} />
        </Link>
      </div>

      <div className="account-info">
        <p>Welcome {account.username}</p>
        <img className="avatar" src={account.avatar.url} alt="User avatar" />
      </div>
    </div>
  );
}

export default NavBar;
