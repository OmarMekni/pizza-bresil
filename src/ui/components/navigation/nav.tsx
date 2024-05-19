import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "../design-system/logo/logo";
import { Button } from "../design-system/button/button";
import { Typography } from "../design-system/typography/typography";
import { useAuth } from "@/context/AuthUserContext";
import { Container } from "../container/container";
import { AccountAvatarNavigationLink } from "./account-avatar-link";
import { ActiveLink } from "./active-link";
import { AiOutlineMenu } from "react-icons/ai";

const NavLinks = () => (
  <Typography
    variant="caption1"
    component="div"
    className="flex items-center gap-7 mr-7"
  >
    <ActiveLink href="/">Home</ActiveLink>
    <ActiveLink href="/menu">Menu</ActiveLink>
    <Link
      target="_blank"
      href="https://www.google.com/maps/place/Pizza+Br%C3%A9sil/@45.4297921,-73.6415511,15z/data=!4m6!3m5!1s0x4cc911f9a9651f53:0xf40734fd89bb8976!8m2!3d45.4297921!4d-73.6415511!16s%2Fg%2F11y4gzxfch?entry=ttu"
    >
      À propos
    </Link>
    <Link
      target="_blank"
      href="https://www.google.com/search?q=pizzabresil+contact&rlz=1C1VDKB_frCA1069CA1069&oq=&gs_lcrp=EgZjaHJvbWUqCQgBEEUYOxjCAzIJCAAQRRg7GMIDMgkIARBFGDsYwgMyCQgCEEUYOxjCAzIJCAMQRRg7GMIDMgkIBBBFGDsYwgMyCQgFEEUYOxjCAzIJCAYQRRg7GMIDMgkIBxBFGDsYwgPSAQkyMDYzajBqMTWoAgiwAgE&sourceid=chrome&ie=UTF-8"
    >
      Contacts
    </Link>
  </Typography>
);

export const Nav = () => {
  const { authUser } = useAuth();

  const authentificationSystem = (
    <>
      <Button baseUrl="/connexion" size="small">
        Connexion
      </Button>
      <Button baseUrl="/connexion/inscription" size="small" variant="secondary">
        Rejoindre
      </Button>
    </>
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="border-b-2 border-gray-400">
      <Container>
        <div className="flex items-center justify-between py-1.5 ">
          <Link href="/">
            <div className="flex items-center gap-2.5">
              <Logo size="medium" />
              <div className="flex flex-col">
                <div className="text-gray font-extrabold text-[24px]">
                  Pizza Brésil
                </div>
                <Typography
                  variant="caption4"
                  component="span"
                  theme="gray"
                  className="sm:hidden"
                >
                  La saveur du Brésil dans chaque tranche!
                </Typography>
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-2 lg:hidden">
            <NavLinks />
            {!authUser ? (
              authentificationSystem
            ) : (
              <AccountAvatarNavigationLink />
            )}
          </div>

          <div className="hidden sm:block m1:block l:block lg:block">
            <Button
              icon={{ icon: AiOutlineMenu }}
              iconTheme="accent"
              action={toggleMenu}
            />
          </div>
        </div>

        {isMenuOpen && (
          <div className=" flex-col hidden sm:block m1:block l:block bg-secondary-300 rounded py-4 px-5 lg:block">
            <Typography
              variant="caption1"
              component="div"
              className="flex flex-col items-start gap-y-3  mb-4"
            >
              <ActiveLink href="/">Home</ActiveLink>
              <ActiveLink href="/menu">Menu</ActiveLink>

              <Link
                target="_blank"
                href="https://www.google.com/maps/place/Pizza+Br%C3%A9sil/@45.4297921,-73.6415511,15z/data=!4m6!3m5!1s0x4cc911f9a9651f53:0xf40734fd89bb8976!8m2!3d45.4297921!4d-73.6415511!16s%2Fg%2F11y4gzxfch?entry=ttu"
              >
                À propos
              </Link>
              <Link
                target="_blank"
                href="https://www.google.com/search?q=pizzabresil+contact&rlz=1C1VDKB_frCA1069CA1069&oq=&gs_lcrp=EgZjaHJvbWUqCQgBEEUYOxjCAzIJCAAQRRg7GMIDMgkIARBFGDsYwgMyCQgCEEUYOxjCAzIJCAMQRRg7GMIDMgkIBBBFGDsYwgMyCQgFEEUYOxjCAzIJCAYQRRg7GMIDMgkIBxBFGDsYwgPSAQkyMDYzajBqMTWoAgiwAgE&sourceid=chrome&ie=UTF-8"
              >
                Contacts
              </Link>
            </Typography>
            <div className="flex items-start gap-y-3 pb-1 space-x-4">
              {!authUser ? (
                authentificationSystem
              ) : (
                <AccountAvatarNavigationLink />
              )}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};
