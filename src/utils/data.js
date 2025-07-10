import { header } from "framer-motion/client";
import {
  aim,
  inclusion,
  leticia,
  mission,
  simonBlake,
  socialImpact,
  sustainability,
  vision,
  yemiAdefisan,
} from "../assets/images";

export const investmentBankingSubsection = {
  title: "Nigeria",
  showIcon: true,
  icon: "twemoji:flag-nigeria",
  isReadMore: true,
  services: [
    {
      title: "•	Investment Banking",
    },
    {
      title: "•	Investment Management",
    },
    {
      title: "•	Securities Trading",
    },
    { title: "•	Digital Banking" },
    {
      title: "•	Property Investment",
    },
  ],
  id: "investmentBanking",
  url: "http://coretrustinvestmentltd.com",
  sameSiteDropDownUrl: true,
  sameSiteUrl: true,
  dropdownUrl: "/solutions/investmentBanking",
  riskReportTitle: "Africa Outlook",
  riskReportSub1: "2024 Africa's Macroeconomic Performance and Outlook.",
  solutionsTitle: "Explpre some other solutions",
  bgImage:
    "https://images.pexels.com/photos/45917/pexels-photo-45917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  header: "Strategic Investment Banking Services.",
  content:
    "Our investee firm is dedicated to providing expert investment banking solutions and offers a range of services including mergers and acquisitions, capital raising, and strategic advisory.",
};
export const investmentManagementSubsection = {
  title: "South Africa",
  showIcon: true,
  icon: "twemoji:flag-south-africa",
  isReadMore: true,
  services: [
    {
      title: "•	Private Investments",
    },
    {
      title: "•	Property Investment",
    },
  ],
  id: "investmentManagement",
  url: "http://cititrustassetmgt.com",
  sameSiteDropDownUrl: true,
  sameSiteUrl: true,
  dropdownUrl: "/solutions/investmentManagement",
  riskReportTitle: "Africa Outlook",
  riskReportSub1: "2024 Africa's Macroeconomic Performance and Outlook.",
  solutionsTitle: "Explpre some other solutions",
  bgImage:
    "https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  header: "Tailored Asset Management Solutions.",
  content:
    "Our Asset Management in Africa offers customized corporate banking, wealth, and fund management services designed to address the unique needs of both retail and corporate clients.",
};
export const securitiesTradingSubsection = {
  title: "UK - International",
  showIcon: true,
  icon: "flagpack:gb-ukm",
  isReadMore: true,
  services: [
    {
      title: "•	Strategic Advisory",
    },
    {
      title: "•	Market Analysis",
    },
    {
      title: "•	Private Investment",
    },
  ],
  id: "securitiesTrading",
  url: "http://atlassportfolios.com",
  sameSiteDropDownUrl: true,
  sameSiteUrl: true,
  dropdownUrl: "/solutions/securitiesTrading",
  riskReportTitle: "Africa Outlook",
  riskReportSub1: "2024 Africa's Macroeconomic Performance and Outlook.",
  solutionsTitle: "Explpre some other solutions",
  bgImage:
    "https://images.pexels.com/photos/887845/pexels-photo-887845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  header: "Capital Markets & Trading Excellence.",
  content:
    "Our Trading subsidiary offers comprehensive capital markets services ranging from share trading (buy/sell), fixed income, and commodities trading. The firm also provides OTC trading and derivatives.",
};

export const aboutUsSubsection = {
  title: "About Us",
  id: "aboutUs",
  url: "",
  sameSiteDropDownUrl: true,
  sameSiteUrl: true,
  dropdownUrl: "/about",
  solutionsTitle: "Explpre some other solutions",
  bgImage:
    "https://images.pexels.com/photos/887845/pexels-photo-887845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  header: "Capital Markets & Trading Excellence.",
  content:
    "EQUISERVE is a global company focusing on transforming Africa and contributing to the sustainable development of African economies.",
};
export const leadershipSubsection = {
  title: "Leadership",
  id: "leadership",
  url: "",
  sameSiteDropDownUrl: true,
  sameSiteUrl: true,
  dropdownUrl: "/about/leadership",
  solutionsTitle: "Explpre some other solutions",
  bgImage:
    "https://images.pexels.com/photos/887845/pexels-photo-887845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  header: "Capital Markets & Trading Excellence.",
  content:
    "The experience and multi-talented team with diverse cultural backgrounds have been a major contribution to the success of Equiserve",
};
export const sustainabilitySubsection = {
  title: "Sustainability",
  id: "sustainability",
  url: "",
  sameSiteDropDownUrl: true,
  sameSiteUrl: true,
  dropdownUrl: "/about/sustainability",
  solutionsTitle: "Explpre some other solutions",
  bgImage:
    "https://images.pexels.com/photos/887845/pexels-photo-887845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  header: "Capital Markets & Trading Excellence.",
  content:
    "Equiserve goes beyond financial returns, focusing on sustainable wealth for you and the communities we serve.",
};

export const navbarData = [
  {
    title: "Solutions",
    url: "/solutions",
    id: "solutions",
    type: "navDropdown",
    subsections: [
      investmentBankingSubsection,
      investmentManagementSubsection,
      securitiesTradingSubsection,
    ],
  },
  {
    title: "Insights",
    url: "/insights",
    id: "insights",
    type: "newLink",
    subsections: [
      aboutUsSubsection,
      leadershipSubsection,
      sustainabilitySubsection,
    ],
  },
  { title: "Investors", url: "/careers", id: "careers", type: "newLink" },
  // { title: "Careers", url: "/careers", id: "careers", type: "navDropdown" },
  {
    title: "About Us",
    url: "/about",
    id: "aboutUs",
    type: "navDropdown",
    subsections: [
      aboutUsSubsection,
      leadershipSubsection,
      sustainabilitySubsection,
    ],
  },
];

export const miniNavbarData = [
  {
    title: "Solutions",
    url: "/solutions",
    id: "solutions",
    type: "navDropdown",
    subsections: [
      investmentBankingSubsection,
      investmentManagementSubsection,
      securitiesTradingSubsection,
    ],
  },
  {
    title: "Insights",
    url: "/insights",
    id: "insights",
    type: "link",
    subsections: [
      {
        title: "Investment Banking",
        url: "http://coretrustinvestmentltd.com",
      },
      {
        title: "Investment Management",
        url: "http://cititrustassetmgt.com",
      },
      {
        title: "Securities Trading",
        url: "http://atlassportfolios.com",
      },
    ],
  },
  { title: "Investors", url: "/careers", id: "careers", type: "link" },
  {
    title: "About Us",
    url: "/about",
    id: "aboutUs",
    // type: "navDropdown",
    type: "link",
    subsections: [
      {
        title: "Investment Banking",
        url: "http://coretrustinvestmentltd.com",
      },
      {
        title: "Investment Management",
        url: "http://cititrustassetmgt.com",
      },
      {
        title: "Securities Trading",
        url: "http://atlassportfolios.com",
      },
    ],
  },
];

export const subsidiaries = [
  {
    id: "nigeria",
    title: "Nigeria",
    url: null,
    icon: "twemoji:flag-nigeria",
  },
  // {
  //   id: "nigeria",
  //   title: "Nigeria",
  //   url: null,
  //   icon: "twemoji:flag-nigeria",
  //   subsections: [
  //     {
  //       title: "Investment Banking",
  //       url: "http://coretrustinvestmentltd.com",
  //     },
  //     {
  //       title: "Investment Management",
  //       url: "http://cititrustassetmgt.com",
  //     },
  //     {
  //       title: "Securities Trading",
  //       url: "http://atlassportfolios.com",
  //     },
  //   ],
  // },
  {
    id: "southAfrica",
    title: "South Africa",
    url: "http://equiserveafrica.co.za",
    icon: "twemoji:flag-south-africa",
  },
  {
    id: "uk",
    title: "UK - International",
    url: "http://equiserveafrica.co.za",
    icon: "flagpack:gb-ukm",
  },
  {
    id: "africa",
    title: "Africa",
    url: "http://equiserveafrica.co.za",
    icon: "academicons:africarxiv",
  },
];

export const insights = [
  {
    id: 3,
    imgUrl:
      "https://cms.cnbcafrica.com/wp-content/uploads/2025/07/TL2VQVZRB5J4ZICH5ZCGPM2HBU-1536x1029.jpg",
    title:
      "South Africa's Rand and Stocks Slip as Lower Commodity Prices Weigh",
    link: "https://www.cnbcafrica.com/2025/south-african-rand-flat-investors-eye-commodity-prices-and-trade-talks/",
    content:
      "JOHANNESBURG, July 9 (Reuters) – South Africa’s commodity-backed currency and stocks weakened on Wednesday, with investor focus ...",
    date: "9th of July, 2025",
  },
  {
    id: 5,
    imgUrl:
      "https://www.brookings.edu/wp-content/uploads/2025/07/shutterstock_2283181423.jpg?quality=75&w=1500",
    title:
      "Trump Promises West African Leaders a Pivot to Trade as the Region Reels from Sweeping Aid Cuts",
    link: "https://www.brookings.edu/articles/prosperity-and-power-trumps-selective-us-africa-summit-and-the-race-with-china/#:~:text=essential%20votes%2C%20and%20framed%20the,%2C%20and%20investment%20over%20assistance.%E2%80%9D",
    content:
      "In his first major diplomatic move with Africa during his return to the White House, President Trump is set to welcome the leaders of Gabon, Guinea-Bis ...",
    date: "8th of July, 2025",
  },
  {
    id: 1,
    imgUrl:
      "https://static.toiimg.com/thumb/msid-122345797,imgsize-929058,width-400,resizemode-4/122345797.jpg",
    title:
      "Nvidia Becomes First Public Company to Cross $4 Trillion Market Cap",
    link: "https://timesofindia.indiatimes.com/business/international-business/nvidia-market-cap-milestone-chipmaker-becomes-first-public-company-to-hit-4-trillion-ai-boom-drives-rally/articleshow/122345799.cms",
    content:
      "Nvidia has achieved a historic milestone, becoming the first publicly traded company to exceed a $4 trillion market valuation, driven by the ...",
    date: "10th of July, 2025",
  },
  {
    id: 4,
    imgUrl:
      "https://static.toiimg.com/thumb/msid-122323096,imgsize-100818,width-400,resizemode-4/122323096.jpg",
    title:
      "US Stock Market: Dow Dips Over 50 Points While Nasdaq Was Up 0.09%; ",
    link: "https://timesofindia.indiatimes.com/business/international-business/us-stock-market-dow-dips-6-points-while-nasdaq-up-0-1-wall-street-trades-flat-amid-donald-trumps-latest-tariff-threat/articleshow/122323016.cms",
    content:
      " US markets saw mixed performance as investors reacted to renewed tariff warnings from President Trump, while assessing ...",
    date: "8th of July, 2025",
  },
  {
    id: 6,
    imgUrl:
      "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iO4Iez_XBG9I/v1/1800x1200.webp",
    title:
      "South Africa Finance Head Cautions Against Rushing New Inflation Goal",
    link: "https://www.bloomberg.com/news/articles/2025-07-08/south-africa-finance-head-cautions-against-rushing-new-inflation-goal",
    content:
      "South Africa's finance minister said work on lowering the inflation target is `progressing well` but cautioned against rushing the decision  ...",
    date: "8th of July, 2025",
  },

  {
    id: 2,
    imgUrl:
      "https://platform.theverge.com/wp-content/uploads/sites/2/2025/07/Bitchat-app-preview.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=1080",
    title:
      "Jack Dorsey unveils Bitchat: an offline, encrypted Bluetooth messaging app",
    link: "https://www.theverge.com/news/701272/jack-dorsey-bitchat-bluetooth-messaging-app",
    content:
      "Bitchat allows users to send encrypted messages over Bluetooth without the internet, using a mesh network approach. It supports anonymous ...",
    date: "8th of July, 2025",
  },
];

export const execs = [
  {
    id: 1,
    imgUrl: simonBlake,
    title: "Simon Blake",
    header: "Chairman",
    content:
      "Simon is a specialist adviser for owner managed business, advising on the lifecycle of a client’s business from a corporate finance and M&A (mergers and acquisitions) perspective.",
    details2:
      "This will include assessing, identifying and sourcing funding requirements, whether for organic growth, acquisition or re-financing; business valuation for both M&A activity, dispute resolution, tax purposes (share schemes, probate, restructuring); investigative services, including due diligence and forensic work.",
    details3:
      "The focus of Simon’s work is usually at the board room table, acting as lead advisor, coordinating the team involved in the transaction including others as required.",
  },
  {
    id: 2,
    imgUrl: yemiAdefisan,
    title: "Yemi Adefisan",
    header: "Director",
    direction: "left",
    content:
      "Yemi is an Investment Banker with a wide range of experience in Global Banking and Markets, Research, and Mergers and Acquisitions across Africa.",
    details2:
      "Yemi has over 23 years of commercial and investment banking experience and has been involved in listing and raising capital across Africa. He is a board member of various Investment firms and a bank in the UK, US, South Africa, and Nigeria.",
    details3:
      "Yemi holds a bachelor’s degree in Business Management with Finance and an MSc in Finance and Investment Management from both Edinburgh Napier University and the University of Salford, UK respectively.",
  },
  {
    id: 3,
    title: "Leticia Du Toit",
    header: "Director",
    imgUrl: leticia,
    content:
      "Leticia is a Chartered Accountant and Tax Practitioner and a senior consultant  managing clients across Southern Africa and Pacific Asia.",
    details2:
      "Before joining Makosi LLP, she was a partner at Bentich Limited where she advised clients on Accounting Services ranging from the compilation of financial statements by IFRS and IFRS for SMEs, Tax related matters.",
    details3:
      "Leticia is also widely known for her sound governance knowledge and compliance Leticia obtained her First and Second degrees in Accounting from the University of South Africa.",
  },
];

export const productsAndServicesArray = [
  {
    id: 1,
    subsections: investmentBankingSubsection,
    imgUrl:
      "https://images.pexels.com/photos/45917/pexels-photo-45917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Investment Banking",
    header:
      "Delivering tailored financial advisory services to meet your strategic objectives.",
    link: "/solutions/investmentBanking",
    content:
      "Our investee firm is dedicated to providing expert investment banking solutions and offers a range of services including mergers and acquisitions, capital raising, and strategic advisory.",
  },
  {
    id: 2,
    imgUrl:
      "https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Investment Management",
    link: "/solutions/investmentManagement",
    header:
      "Supporting businesses with comprehensive banking solutions to drive growth and stability.",
    content:
      "Our Asset Management in Africa offers customized corporate banking, wealth, and fund management services designed to address the unique needs of both retail and corporate clients.",
  },
  {
    id: 3,
    imgUrl:
      "https://images.pexels.com/photos/887845/pexels-photo-887845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Securities Trading",
    header:
      "Empowering your business with strategic capital solutions for sustainable growth.",
    link: "/solutions/securitiesTrading",
    content:
      "Our Trading subsidiary offers comprehensive capital markets services ranging from share trading (buy/sell), fixed income, and commodities trading. The firm also provides OTC trading and derivatives.",
  },
];

export const values = [
  {
    id: 1,
    imgUrl: inclusion,
    title: "Inclusion and diversity",
    link: "#",
    content:
      "We continue to build a diverse workforce and a culture of inclusion and belonging. This includes making our diverse talent more visible and represented in leadership positions, talent pipelines and recruiting.",
  },
  {
    id: 2,
    imgUrl: socialImpact,
    title: "Social impact",
    link: "#",
    content:
      "We encourage colleagues to support the causes, social issues and communities that are important to them through our nonprofit partnerships, global volunteer initiatives and company match of individual charitable giving.",
  },

  {
    id: 5,
    imgUrl: sustainability,
    title: "Sustainability",
    link: "#",
    content:
      "Through our ESG commitments, we actively contribute to Marsh McLennan’s journey to net zero and carbon neutrality while promoting transparency and fostering an inclusive and equitable culture.",
  },
];
export const aimMissionVision = [
  {
    id: 1,
    imgUrl: aim,
    title: "Aim",
    link: "#",
    content:
      "To be the preferred financial partner for businesses, providing innovative banking solutions that fuel growth and financial success.",
  },
  {
    id: 2,
    imgUrl: mission,
    title: "Mission",
    link: "#",
    content:
      "To deliver comprehensive, customized financial services—ranging from capital banking to investment advisory—that empower businesses to navigate challenges and seize opportunities.",
  },

  {
    id: 5,
    imgUrl: vision,
    title: "Vision",
    link: "#",
    content:
      "To redefine business banking by fostering long-term financial stability and unlocking new avenues for sustainable growth.",
  },
];

export const footerLinks = [
  {
    title: "Navigations",
    links: [
      { name: "Home", link: "/" },
      // { name: "Home", link: "#" },
      { name: "Solutions", link: "/solutions/investmentBanking" },
      { name: "Insights", link: "/insights" },
      { name: "About us", link: "/about" },
      { name: "Investors", link: "/careers" },
    ],
  },
];

export const socialMedia = [
  {
    src: "logos:linkedin-icon",
    alt: "facebook logo",
    link: "https://www.linkedin.com/company/101515597/admin/feed/posts/",
  },
  {
    src: "hugeicons:new-twitter-rectangle",
    alt: "twitter logo",
    link: "https://twitter.com/equiservegrp",
  },
];
