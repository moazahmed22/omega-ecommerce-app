"use client";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/app/context/CartContext/CartContext";
import { NavigationMenuItem } from "@radix-ui/react-navigation-menu";
import { Heart, ShoppingCart } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBarIcons = () => {
  const { data: sessionData } = useSession();
  const { cartDetails } = useCart();
  const numberOfCartItems = cartDetails?.numOfCartItems || null;

  return (
    <>
      {sessionData && (
        <NavigationMenuItem className="hidden md:flex">
          <Link href="/wishlist" className={`capitalize font-bold`}>
            <Heart />
          </Link>
        </NavigationMenuItem>
      )}
      <NavigationMenuItem className="hidden md:flex">
        <Link href="/cart" className={`capitalize font-bold relative`}>
          {numberOfCartItems && (
            <Badge
              className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums absolute top-[-10px] left-[-10px]"
              variant="destructive"
            >
              {numberOfCartItems}
            </Badge>
          )}
          <ShoppingCart />
        </Link>
      </NavigationMenuItem>
    </>
  );
};

export default NavBarIcons;
