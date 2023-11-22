'use client'
import React, { useContext } from "react"
import Link from "next/link"
import Container from "../Container"
import Image from "next/image"
import Logo from "@/../public/svg/logo-no-background.svg"
import Search from "./Search"
import CartContext from '../../context/CartContext'

const NavBar = () => {

  const { cart } = useContext(CartContext);
  const cartItems = cart?.cartItems;

  return (
    <div className="sticky top-0 w-full bg-red-950 z-30 shadow-xl text-white">
      <div className="py-2 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Link href='/'>
              <div className="max-h-[55px] overflow-hidden flex justify-center items-center">
                <Image
                  src={Logo}
                  alt="logo_img"
                  width={180}
                  height={50}
                />
              </div>
            </Link>
            <div className="hidden md:block">
              <Search />
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/cart"
                className="px-3 py-2 inline-block text-center text-yellow-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
              >
                <i className="text-yellow-600 w-5 fa fa-shopping-cart"></i>
                <span className="hidden lg:inline ml-1">
                  Cart (<b>{cartItems?.length || 0}</b>)
                </span>
              </Link>
              <Link
                href="/login"
                className="px-3 py-2 inline-block text-center text-yellow-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
              >
                <i className="text-yellow-600 w-5 fa fa-user"></i>
                <span className="hidden lg:inline ml-1">Sign in/Sign up</span>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default NavBar