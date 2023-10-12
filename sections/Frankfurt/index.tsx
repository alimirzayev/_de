import CookieAccept from "@/components/CookieAccept";
import { IResponseHomeData } from "@/models";
import { HomeApp, HomeHoworks, HomeNewsletter } from "../Home";
import HomeDigital from "../Home/HomeDigital";
import FrankfurtCovid from "./FrankfurtCovid";
import FrankfurtFAQ from "./FrankfurtFAQ";
import FrankfurtHealth from "./FrankfurtHealth";
import FrankfurtHoworks from "./FrankfurtHoworks";
import FrankfurtMain from "./FrankfurtMain";
import FrankfurtServices from "./FrankfurtServices";

export const FrankfurtContainer = ({ homeData, lang, frankfurtData }: { lang: 'en' | 'de', homeData: IResponseHomeData, frankfurtData : any }) => {
    return (
        <>
            <FrankfurtMain data={frankfurtData?.Intro}/>
            <FrankfurtServices lang={lang}/>
            <FrankfurtCovid data={frankfurtData?.Tests[0]}/>
            <FrankfurtHealth data={frankfurtData?.Tests[1]} comingSoon={true}/>
            <FrankfurtHoworks data={homeData?.HowItWorks} />
            <FrankfurtFAQ data={frankfurtData?.Faq} lang={lang} />
            <HomeDigital data={homeData?.DHProfile} lang={lang} />
            <HomeApp data={homeData?.App} />
            <HomeNewsletter data={homeData?.Subscription} lang={lang} bg={false} />
            <CookieAccept lang={lang} />
        </>
    );
};