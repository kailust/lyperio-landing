import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import Image from "next/image";
import logo from "../../../public/logo.svg"
import CalendlyBtn from "@/components/calendlyBtn";

export default function Nav() {
  return (
    <Navbar maxWidth="lg">
      <NavbarBrand>
        <div style={{ marginTop: "10px" }}> {/* Add a margin-top here */}
          <Image
            src={logo}
            alt="kidx-logo"
          />
        </div>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <CalendlyBtn btnProps={{ color: "primary", variant: "flat" }}>
            Book a Call
          </CalendlyBtn>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
