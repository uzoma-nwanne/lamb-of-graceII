"use client";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  Button,
  NavbarMenuItem,
} from "@nextui-org/react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Container from "./Container";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [home, setHome] = useState(false);
  const [services, setServices] = useState(false);
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);
  const [blog, setBlog] = useState(false);
  useEffect(() => {
    if (pathname === "/") {
      setHome(true);
      setServices(false);
      setAbout(false);
      setContact(false);
    }
    if (pathname === "/services") {
      setHome(false);
      setServices(true);
      setAbout(false);
      setContact(false);
    }
    if (location.pathname === "/about") {
      setHome(false);
      setServices(false);
      setAbout(true);
      setContact(false);
    }
    if (pathname === "/contact") {
      setHome(false);
      setServices(false);
      setAbout(false);
      setContact(true);
    }
    if (pathname === "/blog") {
      setHome(false);
      setBlog(true);
      setServices(false);
      setAbout(false);
      setContact(false);
    }
  }, [pathname]);

  return (
    <div className="top-0 px-4 md:px-24 mb-4 w-full fixed shadow-lg z-10">
      <Navbar maxWidth="full" height={"6rem"}>
        <NavbarContent justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Link href="/">
              <Image
                src="/assets/logoSVG.svg"
                alt="Banner Image"
                className="object-contain"
                width={150}
                height={150}
              ></Image>
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          <NavbarItem>
            <Link
              color="foreground"
              href="/"
              className={
                "hover:bg-[#004493] hover:text-[#fff] p-2 rounded-lg  " +
                (home ? "bg-[#3a86ff] text-[#fff]  rounded-lg " : "")
              }
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="/about"
              className={
                "hover:bg-[#004493] hover:text-[#fff] p-2 rounded-lg  " +
                (about ? "bg-[#3a86ff] text-[#fff]  rounded-lg " : "")
              }
            >
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/services"
              color="foreground"
              className={
                "hover:bg-[#004493] hover:text-[#fff] p-2 rounded-lg  " +
                (services ? "bg-[#3a86ff] text-[#fff]  rounded-lg " : "")
              }
            >
              Services
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="/blog"
              className={
                "hover:bg-[#004493] hover:text-[#fff] p-2 rounded-lg  " +
                (blog ? "bg-[#3a86ff] text-[#fff]  rounded-lg " : "")
              }
            >
              Blog
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="/contact"
              className={
                "hover:bg-[#004493] hover:text-[#fff] p-2 rounded-lg  " +
                (contact ? "bg-[#3a86ff] text-[#fff]  rounded-lg " : "")
              }
            >
              Contact Us
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end" className="hidden sm:flex">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="/register" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu style={{ background: "#d4d4d8" }}>
          <NavbarMenuItem>
            <Link href={"/"} className="w-full">
              Home
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href={"/about"} className="w-full">
              About
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href={"/services"} className="w-full">
              Services
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href={"/blog"} className="w-full">
              Blog
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href={"/contact"} className="w-full">
              Contact Us
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Button as={Link} color="secondary" href="#" variant="flat">
              Login
            </Button>
          </NavbarMenuItem>
          <NavbarMenuItem>
          <Button as={Link} color="primary" href="/register" variant="flat">
              Login
            </Button>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
