import Image from "next/image";
import logo from "../../../public/logo-s.svg";

export default function Footer() {
  return (
    <div className="w-full bg-gray-100 flex justify-center py-5">
      <div className="w-max flex gap-4 items-center">
        <Image
          src={logo}
          alt="kidx-logo"
          height={24}
        />
        <div className="">© 2024 KidX AI All rights reserved</div>
      </div>
    </div>
  )
}
