import Footer from "@/layouts/Footer/Footer";
import Header from "@/layouts/Header";
import { DusseldorfContainer } from "@/sections/Dusseldorf";
import { Fragment } from "react";

async function fetcDusseldorfHeader() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/menus?populate=deep&filters[title][$eqi]=airport-dusseldorf`);
  return res.json();
}

async function fetchHomeData(lang) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/home-phase-one?populate=deep${lang === "de" ? "&locale=de" : ""
    }`,
    {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    }
  );
  return res.json();
}
async function fetchDusseldorfData(lang) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/airports?populate=deep${lang === "de" ? "&locale=de" : "&locale=en"
    }&filters[slug][$eqi]=dusseldorf`,
    {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    }
  );
  return res.json();
}

export default async function Home ({ params }) {
  const response = await fetchHomeData(params?.lang);
  const data = await fetchDusseldorfData(params?.lang);
  const dusseldorfItems = await fetcDusseldorfHeader();

    return (
      <Fragment>
        <Header data={dusseldorfItems?.data} lang={params?.lang}/>
        <DusseldorfContainer lang={params?.lang || 'en'} homeData={response.data} dusseldorfData={data?.data[0]}/>
        <Footer />
      </Fragment>
    );
  }
  