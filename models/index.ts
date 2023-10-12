export interface IImage {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
}

export interface IHomeMain {
  id: number;
  title: string;
  text: string;
  image: IImage;
  button? : any
}

export interface ITestingOption {
  id: number;
  title: string;
  text: string;
}

export interface ISingleLocation {
  id: number;
  name: string;
  link: string;
  image: IImage;
}

export interface IMoreLocation {
  id: number;
  text: string;
  icon: any[];
}

export interface ILocation {
  id: number;
  title: string;
  Locations: ISingleLocation[];
  MoreLocations: IMoreLocation;
}

export interface IHowItWorksItem {
  id: number;
  title: string;
  Items: any[];
}

export interface IDHProfileInfo {
  id: number;
  title: string;
  text: string;
  resellerLink: string;
}

export interface IDHProfile {
  id: number;
  title: string;
  Info: IDHProfileInfo;
  image: IImage[];
}

export interface ITests{
  
}

export interface IQuote {
  id: number;
  text: string;
}

export interface ISubscription {
  id: number;
  Active: string;
  title: string;
  text: string;
}

export interface IOneClick {
  id: 1;
  title: string;
  text: string;
  bookAppointment: string;
  sideTitle: string;
  image: IImage;
}

export interface ILocalization {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

export interface IApp {
  id: number;
  image: IImage;
  Info: {
    id: number;
    title: string;
    text: string;
    AppStore: null;
    GooglePlay: null;
    QR: IImage;
  };
}

export interface IResponseHomeData {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  Main: IHomeMain;
  Quote: IQuote;
  oneClick: IOneClick;
  Subscription: ISubscription;
  TestingOptions: ITestingOption[];
  Locations: ILocation;
  HowItWorks: IHowItWorksItem;
  DHProfile: IDHProfile;
  App: IApp;
  Tests: any;
  TestsChapter: any;
  localizations: ILocalization[];
}
