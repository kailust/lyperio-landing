import Image from "next/image";
import logo from "../../../public/logo-s.svg";

export default function Footer() {
  return (
    <div className="w-full bg-gray-100 flex justify-center py-5">
      <div className="w-max flex gap-4 items-center">
        <Image
          src={logo}
          alt="lyperio-logo"
          height={24}
        />
        <div className="">© 2023 Lyperio All rights reserved</div>
      </div>
    </div>
  )
}