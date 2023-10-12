import CookieAccept from "@/components/CookieAccept";
import { IResponseHomeData } from "@/models";
import { FAQSection } from "../Content";
import FrankfurtCovid from "../Frankfurt/FrankfurtCovid";
import FrankfurtFAQ from "../Frankfurt/FrankfurtFAQ";
import FrankfurtHealth from "../Frankfurt/FrankfurtHealth";
import FrankfurtHoworks from "../Frankfurt/FrankfurtHoworks";
import FrankfurtMain from "../Frankfurt/FrankfurtMain";
import { HomeApp, HomeDoctor, HomeNewsletter } from "../Home";
import HomeDigital from "../Home/HomeDigital";
import DusseldorfServices from "./DusseldorfServices";

export const DusseldorfContainer = ({homeData, lang, dusseldorfData}: {lang: 'en' | 'de', homeData: IResponseHomeData, dusseldorfData: any}) => {
  return (
    <>
      <FrankfurtMain data={dusseldorfData?.Intro}/>
      <FrankfurtHealth data={dusseldorfData?.Tests[1]}/>
      <FrankfurtHoworks data={homeData.HowItWorks} />
      <HomeDigital data={homeData.DHProfile} lang={lang} />
      <HomeDoctor data={homeData.oneClick} lang={lang} comingSoon={true}/>
      <FAQSection lang={lang} />
      <CookieAccept lang={lang} />
    </>
  );
};