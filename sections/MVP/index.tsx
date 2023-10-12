import { IResponseHomeData } from "@/models";
import { FAQSection } from "../Content";
import FrankfurtHealth from "../Frankfurt/FrankfurtHealth";
import FrankfurtHoworks from "../Frankfurt/FrankfurtHoworks";
import FrankfurtMain from "../Frankfurt/FrankfurtMain";
import { HomeDoctor } from "../Home";
import HomeDigital from "../Home/HomeDigital";
import MVPHoworks from "./MVPHoworks";
import MVPScrollBottom from "./MVPScrollBottom";
export const MVPContainer = ({ homeData, lang, mvpData }: { lang: 'en' | 'de', homeData: IResponseHomeData, mvpData : any }) => {
    return (
        <>
            <FrankfurtMain data={mvpData?.Intro}/>
            <FrankfurtHealth data={mvpData?.Tests[0]} comingSoon={false}/>
            <MVPHoworks data={mvpData?.HowItWorks} />
            <HomeDigital data={homeData?.DHProfile} lang={lang} />
            <HomeDoctor data={homeData?.oneClick} lang={lang} comingSoon={true}/>
            <FAQSection lang={lang} mvp={true}/>
            {/* <FrankfurtServices lang={lang}/>
            <FrankfurtCovid data={mvpData?.Tests[0]}/>
            <FrankfurtFAQ data={mvpData?.Faq} lang={lang} />
            <HomeApp data={homeData?.App} />
            <HomeNewsletter data={homeData?.Subscription} lang={lang} bg={false} />
            <CookieAccept lang={lang} /> */}
        </>
    );
};