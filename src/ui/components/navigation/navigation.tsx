import Link from "next/link";
import { Container } from "../container/container";
import { Button } from "../design-system/button/button";
import { Logo } from "../design-system/logo/logo";
import { Typography } from "../design-system/typography/typography";
import { ActiveLink } from "./active-link";
import { useAuth } from "@/context/AuthUserContext";
import { AccountAvatarNavigationLink } from "./account-avatar-link";

interface Props {}

export const Navigation = ({}: Props) => {
  const { authUser } = useAuth();
  // console.log("authUser", authUser);

  const authentificationSystem = (
    <div className="flex items-center gap-2">
      <Button baseUrl="/connexion" size="small">
        Connexion
      </Button>
      <Button baseUrl="/connexion/inscription" size="small" variant="secondary">
        Rejoindre
      </Button>
    </div>
  );

  return (
    <div className="border-b-2 border-gray-400">
      <Container className="flex items-center justify-between py-1.5 gap-7">
        <Link href="/">
          <div className="flex items-center gap-2.5">
            <Logo size="medium" />
            <div className="flex flex-col">
              <div className="text-gray font-extrabold text-[24px]">
                Pizza Brésil
              </div>
              <Typography variant="caption4" component="span" theme="gray">
                La saveur du Brésil dans chaque tranche !
              </Typography>
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-7">
          <Typography
            variant="caption1"
            component="div"
            className="flex items-center gap-7"
          >
            {/* 
            <ActiveLink href="/design-system">Design system</ActiveLink>
            <ActiveLink href="/home">Home</ActiveLink>
            <ActiveLink href="/menu">Menu</ActiveLink>
            <ActiveLink href="/offres">Offres</ActiveLink> */}

            {/* <ActiveLink href="/design-system">Design system</ActiveLink> */}

            {/* <Link
              target="_blank"
              href="https://app.screencast.com/LAW8LhRxRORfY"
              // href="https://www.facebook.com/photo/?fbid=261248485592350&set=p.261248485592350"
            >
              Menu
            </Link> */}
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

            {/* QUESTI SONO I ACTIVE LINK ORIGINALI IO LI HO MODIFICATI CON DEI LINK PER AVERE  target="_blank"*/}
            {/* <ActiveLink href="/#">À propos</ActiveLink>
            <ActiveLink href="/contacts">Contacts</ActiveLink> */}
          </Typography>

          {!authUser ? authentificationSystem : <AccountAvatarNavigationLink />}
        </div>
      </Container>
    </div>
  );
};
