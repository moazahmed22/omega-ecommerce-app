"use server";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SearchProductComp from "../SearchProductComp/SearchProductComp";
import ProfileComp from "../ProfileComp/ProfileComp";
import NavBarIcons from "../NavBarIcons/NavBarIcons";

const Navbar = () => {
  return (
    <>
      <div className="container bg-background md:min-w-[fit-content] m-auto pt-10 pb-5 sticky top-0 left-0 right-0 z-20 md:relative">
        <NavigationMenu className="justify-between md:gap-5 items-center min-w-full">
          {/* drop down on smaller screens*/}
          <div className="block md:hidden me-4">
            <NavigationMenuList>
              <DropdownMenu>
                <DropdownMenuTrigger className="focus-visible:outline-0">
                  <Menu />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mt-2">
                  <Link
                    href="#main-slider"
                    className={`capitalize font-medium`}
                  >
                    <DropdownMenuItem>home</DropdownMenuItem>{" "}
                  </Link>
                  <Link
                    href="#brands-section"
                    scroll={true}
                    className={`capitalize font-medium`}
                  >
                    <DropdownMenuItem>brands</DropdownMenuItem>{" "}
                  </Link>
                  <Link
                    href="#categories-section"
                    className={`capitalize font-medium`}
                  >
                    <DropdownMenuItem>categories</DropdownMenuItem>{" "}
                  </Link>
                  <Link
                    href="#products-section"
                    className={`capitalize font-medium`}
                  >
                    <DropdownMenuItem>products</DropdownMenuItem>{" "}
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuList>
          </div>
          {/* site name */}
          <NavigationMenuList>
            <NavigationMenuItem className="hidden md:block">
              <Link
                href="/"
                className="capitalize text-2xl font-bold leading-1"
              >
                Ωmega
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
          {/* nav menu */}
          {/* <NavigationMenuList className="gap-5 lg:gap-10 hidden md:flex">
            <NavigationMenuItem>
              <Link
                href="/"
                className={`capitalize ${pathname === "/" ? "active" : ""}`}
              >
                home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/brands"
                className={`capitalize ${
                  pathname === "/brands" ? "active" : ""
                }`}
              >
                brands
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/categories"
                className={`capitalize ${
                  pathname === "/categories" ? "active" : ""
                }`}
              >
                categories
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/products"
                className={`capitalize ${
                  pathname === "/products" ? "active" : ""
                }`}
              >
                products
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList> */}

          {/* searchbar and icons  */}
          <NavigationMenuList className="gap-2 md:gap-5">
            {/* searchbar */}
            <SearchProductComp />
            {/* icons */}
            <NavBarIcons />
            {/* account dropdown menu */}
            <ProfileComp />
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
};

export default Navbar;
