import Link from "next/link"
import Container from "../Container"
import Image from "next/image"
import Logo from "@/../public/svg/logo-no-background.svg"

const NavBar = () => {
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
            <div className="hidden md:block">SEARCH</div>
            <div className="flex items-center gap-8 md:gap-12">
              <div>CartCount</div>
              <div>UserMenu</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default NavBar