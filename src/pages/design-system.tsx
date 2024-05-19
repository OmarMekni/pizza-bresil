import { Container } from "@/ui/components/container/container";
import { Avatar } from "@/ui/components/design-system/avatar/avatar";
import { Button } from "@/ui/components/design-system/button/button";
import { Logo } from "@/ui/components/design-system/logo/logo";
import { Spinner } from "@/ui/components/design-system/spinner/spinner";
import { Layout } from "@/ui/components/layout/layout";
import { Nav } from "@/ui/components/navigation/nav";

import { Seo } from "@/ui/components/seo/seo";
import { RiUser6Fill } from "react-icons/ri";

export default function DesignSystem() {
  return (
    // <>
    //   <Nav/>
    // </>

    <>
      <Seo title="Design System" description="Description..." />

      <Layout>
        <Container className="py-10 space-y-10">
          <div className="flex items-center gap-4 p-10 justify-center">
            <Spinner size="small" />
            <Spinner />
            <Spinner size="large" />
          </div>

          {/* BUTTON AVEC SPINNER */}
          <div className="flex items-center gap-4 p-10 justify-center">
            <Button isLoading size="small">
              Accent
            </Button>
            <Button
              isLoading
              size="medium"
              icon={{ icon: RiUser6Fill }}
              iconPosition="left"
            >
              Accent
            </Button>
            <Button isLoading size="small" variant="secondary">
              secondary
            </Button>
            <Button isLoading size="small" variant="outline">
              outline
            </Button>
            <Button isLoading size="small" variant="disabled">
              disabled
            </Button>
            <Button
              isLoading
              size="small"
              variant="ico"
              icon={{ icon: RiUser6Fill }}
            />
          </div>

          <div className="flex items-center gap-4 p-10 justify-center">
            <Button size="small">Accent</Button>
            <Button
              size="medium"
              icon={{ icon: RiUser6Fill }}
              iconPosition="left"
            >
              Accent
            </Button>
            <Button size="small" variant="secondary">
              secondary
            </Button>
            <Button size="small" variant="outline">
              outline
            </Button>
            <Button size="small" variant="disabled">
              disabled
            </Button>
            <Button size="small" variant="ico" icon={{ icon: RiUser6Fill }} />
          </div>

          <div className="flex items-center gap-4 p-10 justify-center">
            <Button>Accent</Button>
            <Button variant="secondary">secondary</Button>
            <Button variant="outline">outline</Button>
            <Button variant="disabled">disabled</Button>
            <Button variant="ico" icon={{ icon: RiUser6Fill }} />
          </div>

          <div className="flex items-center gap-4 p-10 justify-center">
            <Button size="large">Accent</Button>
            <Button
              size="large"
              icon={{ icon: RiUser6Fill }}
              iconPosition="right"
            >
              Accent
            </Button>
            <Button size="large" variant="secondary">
              secondary
            </Button>
            <Button size="large" variant="outline">
              outline
            </Button>
            <Button size="large" variant="disabled">
              disabled
            </Button>
            <Button
              size="large"
              variant="ico"
              icon={{ icon: RiUser6Fill }}
              iconTheme="secondary"
            />
            <Button
              size="large"
              variant="ico"
              icon={{ icon: RiUser6Fill }}
              iconTheme="gray"
            />
            <Button size="large" variant="ico" icon={{ icon: RiUser6Fill }} />
          </div>

          {/* Logo */}
          <div className="flex items-center gap-4 p-10 justify-center">
            <Logo size="very-small" />
            <Logo size="small" />
            <Logo size="medium" />
            <Logo size="large" />
          </div>

          {/* Avatar */}
          <div className="flex items-center gap-4 p-10 justify-center">
            <Avatar
              size="small"
              src="/assets/images/avatar.png"
              alt="Avatar de daniel lincoln"
            />
            <Avatar
              size="medium"
              src="/assets/images/avatar.png"
              alt="Avatar de daniel lincoln"
            />
            <Avatar
              size="large"
              src="/assets/images/avatar.png"
              alt="Avatar de daniel lincoln"
            />
          </div>

          {/* Avatar Leone */}
          <div className="flex items-center gap-4 p-10 justify-center">
            <Avatar
              size="small"
              src="/assets/images/avatarLeon.jpg"
              alt="Avatar de daniel lincoln"
            />
            <Avatar
              size="medium"
              src="/assets/images/avatarLeon.jpg"
              alt="Avatar de daniel lincoln"
            />
            <Avatar
              size="large"
              src="/assets/images/avatarLeon.jpg"
              alt="Avatar de daniel lincoln"
            />
          </div>

          {/* </div> */}
        </Container>
      </Layout>
    </>
  );
}
