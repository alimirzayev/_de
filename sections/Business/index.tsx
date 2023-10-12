"use client"

import { Fragment, useEffect, useState } from "react";
import { HomeMain } from "../Home";
import BusinessAdvanced from "./BusinessAdvanced";
import BusinessAge from "./BusinessAge";
import BusinessDigital from "./BusinessDigital";
import BusinessEcocare from "./BusinessEcocare";
import BusinessFeatures from "./BusinessFeatures";
import BusinessHow from "./BusinessHow";
import BusinessOffer from "./BusinessOffer";
import BusinessPlatform from "./BusinessPlatform";
import BusinessProducts from "./BusinessProducts";
import BusinessQuestions from "./BusinessQuestions";
import BusinessStart from "./BusinessStart";
import BusinessStats from "./BusinessStats";
import BusinessUpgrade from "./BusinessUpgrade";
import BusinessVideo from "./BusinessVideo";
import PharmacyAngebot from "./PharmacyAngebot";
import PharmacyCircle from "./PharmacyCircles";
import PharmacyFeatures from "./PharmacyFeatures";
import PharmacyHeader from "./PharmacyHeader";
import PharmacyImageBlock from "./PharmacyImageBlock";
import PharmacyLady from "./PharmacyLady";
import PharmacyMain from "./PharmacyMain";
import PharmacySeperator from "./PharmacySeperator";
import PharmacyTests from "./PharmacyTests";
import PharmacyTiles from "./PharmacyTiles";

export const BusinessContainer = ({
  lang,
  data,
  headerData,
}: {
  lang: "en" | "de";
  data: any;
  headerData: any;
}) => {
  const [view, setView] = useState("");

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 750) {
        setView("mobile");
      } else if (window.innerWidth > 750 && window.innerWidth < 1150) {
        setView("tablet");
      } else {
        setView("desktop");
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); return (
    <Fragment>
      {!['mobile', 'tablet'].includes(view) && <PharmacyHeader lang={lang} data={headerData} />}
      <PharmacyMain data={data.Intro} lang={lang} />
      <BusinessFeatures data={data.Diagnose} />
      <PharmacyCircle data={data.Circles} />
      <PharmacyImageBlock data={data.imageBlock} />
      <PharmacySeperator data={data.SeparatorExtended} />
      <PharmacyFeatures data={data.Features} />
      <BusinessPlatform data={data.DigitalPlatform} />
      <PharmacyAngebot data={data.Angebot} />
      <PharmacyLady data={data.ladyBlock} />
      <PharmacyTests data={data.Tests[0]} />
      <BusinessHow data={data?.Instruction} />
      <BusinessQuestions data={data?.SeparatorTwo} />
      <BusinessDigital data={data?.GridBlocks} />
      <BusinessEcocare data={data?.Quote} />
      {/* <PharmacyTiles data={data?.Tiles} /> */}
      <PharmacyLady data={data.ladyBlock} />
      <BusinessVideo lang={lang} />
      <BusinessStart data={data.Percents} />
      <BusinessStats data={data?.Tiles} />
    </Fragment>
  );
};
