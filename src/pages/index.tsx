import { Inter } from "next/font/google";
import { Seo } from "@/ui/components/seo";
import { Typography } from "@/ui/components/design-system/typography/typography";
import { Button } from "@/ui/components/design-system/typography/button/button";
import { RiUser6Fill } from "react-icons/ri";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Seo title="Pizza Brésil" description="Application pizza brésil" />

      <div className="flex items-center gap-4 p-10">
        <Button size="small">Accent</Button>
        <Button size="medium" icon={{ icon: RiUser6Fill }} iconPosition="left">Accent</Button>
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

      <div className="flex items-center gap-4 p-10">
        <Button>Accent</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="outline">outline</Button>
        <Button variant="disabled">disabled</Button>
        <Button variant="ico" icon={{ icon: RiUser6Fill }} />
      </div>

      <div className="flex items-center gap-4 p-10">
        <Button size="large">Accent</Button>
        <Button size="large" icon={{ icon: RiUser6Fill }} iconPosition="right">Accent</Button>
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

      {/* <div className="space-y-5">
      <Typography theme="primary" variant="display" component="div">
          Pizza Brésil
        </Typography>
        <Typography theme="secondary" variant="h1" component="div">
          Pizza Brésil
        </Typography>
        <Typography theme="gray" variant="h2" component="div">
          Pizza Brésil
        </Typography>
        <Typography theme="primary" variant="lead" component="div">
          Pizza Brésil
        </Typography>
        <Typography theme="primary" variant="caption4" component="div">
          Pizza Brésil
        </Typography>
        <Typography theme="primary" variant="caption4" weight="medium" component="div">
          Pizza Brésil
        </Typography>
      </div> */}
    </>
  );
}
