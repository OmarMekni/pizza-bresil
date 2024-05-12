import { CallToActionView } from "@/ui/components/design-system/call-to-action/call-to-action.view";
import { PizzaBresilFacebookView } from "./components/Pizza-bresil-facebook-view/Pizza-bresil-facebook-view";
import { CurrentCourseCtaView } from "./components/current-course-cta/current-course-cta.view";
import { FeaturedView } from "./components/featured/feautured.view";
import { HeroTopView } from "./components/hero-top/hero-top.view";
import { HighlightListView } from "./components/highlight-list/highlight-list.view";

export const LandingPageView = () => {
  return (
    <>
      <HeroTopView />
      <FeaturedView />
      <PizzaBresilFacebookView />
      <CurrentCourseCtaView />
      <HighlightListView />
      <CallToActionView />
    </>
  );
};
