import HomeNewsletter from "./HomeNewsletter";
import HomeLocations from "./HomeLocations";
import HomeTests from "./HomeTests";
import HomeHoworks from "./HomeHoworks";
import HomeMain from "./HomeMain";
import HomeDigital from "./HomeDigital";
import HomeQuote from "./HomeQuote";
import HomeApp from "./HomeApp";
import HomeDoctor from "./HomeDoctor";
import HomeFeatures from "./HomeFeatures";
import { IResponseHomeData } from "@/models";
import HomeSlide from "./HomeSlide";
import HomeSelf from "./HomeSelf";
import HomeCare from "./HomeCare";
import CookieAccept from "@/components/CookieAccept";

export const HomeContainer = ({
  lang,
  data,
}: {
  lang: "en" | "de";
  data: IResponseHomeData;
}) => {
  return (
    <>
      <HomeSlide data={data.Main} lang={lang} />
      <HomeDoctor data={data.oneClick} lang={lang} />
      <HomeSelf data={data.Tests} data2={data.TestsChapter} lang={lang} />
      <HomeCare data={data.Tests} data2={data.TestsChapter} lang={lang} />
      <HomeLocations data={data.Locations} lang={lang} />
      <HomeHoworks data={data.HowItWorks} />
      <HomeQuote data={data.Quote}/>
      <HomeNewsletter data={data.Subscription} lang={lang} bg={true}/>
      <HomeDigital data={data.DHProfile} lang={lang} />
      <HomeApp data={data.App} />
      <CookieAccept lang={lang} />
    </>
  );
};

export {
  HomeMain,
  HomeFeatures,
  HomeDoctor,
  HomeTests,
  HomeLocations,
  HomeQuote,
  HomeNewsletter,
  HomeHoworks,
  HomeApp,
};
