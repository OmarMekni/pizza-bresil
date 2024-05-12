import { Box } from "../design-system/box/box";
import { fireBaseLogOutUser } from "@/api/authentication";
import { useRouter } from "next/router";

import { toast } from "react-toastify";
import { Button } from "../design-system/button/button";
import { Typography } from "../design-system/typography/typography";
import { ActiveLink } from "./active-link";
import Link from "next/link";

export const UserAccountNavigation = () => {
  const router = useRouter();
  const handleLogOutUser = async () => {
    const { error } = await fireBaseLogOutUser();
    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("A bientôt sur Pizza Brésil");
  };

  return (
    <Box className="flex flex-col gap-7">
      <div className="flex flex-col gap-3">
        <Typography variant="caption2" weight="medium">
          <ActiveLink href="/mon-espace">Mon Compte</ActiveLink>
        </Typography>
        <Typography variant="caption2" weight="medium">
          
          {/* <ActiveLink href="/mon-compte/mes-projets">Mes projets</ActiveLink> */}
          
          <Link
            href="https://www.allrecipes.com/search?q=pizza"
            target="_blank"
          >
            <div className="hover:text-blue-800 hover:font-bold animate">Mes recettes</div>
            
          </Link>
        </Typography>
      </div>
      <Button action={handleLogOutUser} variant="danger">
        Déconnexion
      </Button>
    </Box>
  );
};
