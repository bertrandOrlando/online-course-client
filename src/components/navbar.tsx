"use client";

import { HeroUIProvider } from "@heroui/react";

import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import { useUserContext } from "@/context/UserContext";
import { usePathname } from "next/navigation";

const NavbarComponent = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { name, isLoggedIn } = useUserContext();

  const menuItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Course",
      href: "/course",
    },
    {
      label: "About Us",
      href: "/about-us",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Contact",
      href: "/contact-us",
    },
  ];

  return (
    <HeroUIProvider>
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="bg-white"
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
          <NavbarBrand>
            <Link href="/" className="font-bold">
              B - Course
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden gap-4 sm:flex" justify="center">
          <NavbarBrand>
            <Link href="/" className="font-bold">
              B - Course
            </Link>
          </NavbarBrand>

          {menuItems.map((item, index) => (
            <NavbarItem isActive={pathname === item.href} key={index}>
              <Link color="foreground" underline="hover" href={item.href}>
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          {!isLoggedIn ? (
            <>
              <NavbarItem>
                <Button
                  as={Link}
                  href="/register"
                  variant="bordered"
                  color="primary"
                  className="font-semibold"
                >
                  Sign Up
                </Button>
              </NavbarItem>
              <NavbarItem>
                <Button
                  as={Link}
                  href="/login"
                  variant="solid"
                  color="primary"
                  className="font-semibold"
                >
                  Login
                </Button>
              </NavbarItem>
            </>
          ) : (
            <NavbarItem>
              <Button
                as={Link}
                href="/profile"
                variant="solid"
                color="primary"
                className="font-semibold capitalize"
              >
                {name}
              </Button>
            </NavbarItem>
          )}
        </NavbarContent>

        <NavbarMenu className="bg-white">
          {menuItems.map((item, index) => (
            <NavbarMenuItem
              key={`menu-${index}`}
              isActive={pathname === item.href}
            >
              <Link
                className="w-full"
                color={pathname === item.href ? "secondary" : "foreground"}
                href={item.href}
                size="lg"
                underline="hover"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          {isLoggedIn && (
            <NavbarMenuItem>
              <Link
                className="w-full"
                color="danger"
                href="/log-out"
                size="lg"
                underline="hover"
              >
                Log Out
              </Link>
            </NavbarMenuItem>
          )}
        </NavbarMenu>
      </Navbar>
    </HeroUIProvider>
  );
};

export default NavbarComponent;
