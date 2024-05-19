import { SessionStatusType } from "@/types/sessionStatusType";
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";
import { Container } from "../container/container";
import { Footer } from "../navigation/footer";
// import { Navigation } from "../navigation/navigation";
import { UserAccountNavigation } from "../navigation/user-account-navigation";
import { Session } from "../session/session";
import { CallsToActionSideBar } from "../calls-to-action-side-bar/calls-to-action-side-bar";
import { Nav } from "../navigation/nav";

interface Props {
  children: React.ReactNode;
  isDisplayBreadCrumbs?: boolean;
  withSidebar?: boolean;
  sessionStatus?: SessionStatusType;
}

export const Layout = ({
  children,
  isDisplayBreadCrumbs = true,
  withSidebar,
  sessionStatus,
}: Props) => {
  let view: React.ReactElement = <></>;

  if (withSidebar) {
    view = (
      <Container className="mb-14">
        <div className="grid grid-cols-12 gap-7">
          <div className="col-span-3 space-y-8">
            <UserAccountNavigation />
            <CallsToActionSideBar />
          </div>
          <div className="col-span-9">{children}</div>
        </div>
      </Container>
    );
  } else {
    view = <>{children}</>;
  }
  return (
    <Session sessionStatus={sessionStatus}>
      {/* <Navigation /> */}
      <Nav/>
      {isDisplayBreadCrumbs && <Breadcrumbs />}
      {view}
      <Footer />
    </Session>
  );
};
