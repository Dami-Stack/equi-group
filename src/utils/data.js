import { header } from "framer-motion/client";
import {
  inclusion,
  leticia,
  simonBlake,
  socialImpact,
  sustainability,
  yemiAdefisan,
} from "../assets/images";

export const navbarData = [
  {
    title: "Solutions",
    url: "/solutions",
    id: "solutions",
    type: "navDropdown",
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
        title: "Security Tradings",
        url: "http://atlassportfolios.com",
      },
    ],
  },
  {
    title: "Insights",
    url: "/insights",
    id: "insights",
    type: "navDropdown",
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
        title: "Security Tradings",
        url: "http://atlassportfolios.com",
      },
    ],
  },
  { title: "Careers", url: "/careers", id: "careers", type: "link" },
  {
    title: "About Us",
    url: "/about",
    id: "aboutUs",
    type: "navDropdown",
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
        title: "Security Tradings",
        url: "http://atlassportfolios.com",
      },
    ],
  },
];

export const miniNavbarData = [
  {
    title: "Solutions",
    url: "/solutions",
    id: "solutions",
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
        title: "Security Tradings",
        url: "http://atlassportfolios.com",
      },
    ],
  },
  {
    title: "Insights",
    url: "/insights",
    id: "insights",
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
        title: "Security Tradings",
        url: "http://atlassportfolios.com",
      },
    ],
  },
  { title: "Careers", url: "/careers", id: "careers", type: "link" },
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
        title: "Security Tradings",
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
        title: "Security Tradings",
        url: "http://atlassportfolios.com",
      },
    ],
  },
  {
    id: "southAfrica",
    title: "South Africa",
    url: "http://equiserveafrica.co.za",
    icon: "twemoji:flag-south-africa",
  },

  {
    id: "unitedKingdom",
    title: "United Kingdom",
    url: "http://cititrustcapital.co.uk",
    icon: "twemoji:flag-united-kingdom",
  },
];

export const insights = [
  {
    id: 1,
    imgUrl:
      "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=600",
    title:
      "Ethiopia’s biggest bank says it hashas recouped nearly 80% has recouped nearly 80%  recouped nearly 80% ...",
    link: "https://www.africanews.com/2024/03/27/ethiopias-biggest-bank-says-it-has-recouped-most-of-the-cash-lost-during-a-system-glitch/",
    content:
      "Nearly 15,000 people have voluntarily returned funds eitheir fully or partly “taken illegally,” the bank said in a statement.",
    date: "28th of March, 2024",
  },
  {
    id: 2,
    imgUrl:
      "https://images.pexels.com/photos/6262966/pexels-photo-6262966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Central bank of Nigeria raises interest",
    link: "https://www.africanews.com/2024/03/27/central-bank-of-nigeria-raises-interest-rates-to-combat-soaring-inflation/",
    content:
      "Nigeria’s central bank implemented a significant increase in its monetary policy rate, raising it by 200 basis points to ...",
    date: "27th of March, 2024",
  },
  {
    id: 3,
    imgUrl:
      "https://images.pexels.com/photos/14744117/pexels-photo-14744117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    // "https://images.pexels.com/photos/17855049/pexels-photo-17855049/free-photo-of-newspaper-in-hand-in-london-subway.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "FIFA Series: First-ever edition ends",
    link: "https://www.africanews.com/2024/03/27/fifa-series-first-ever-edition-ends/",
    content:
      "The FIFA Series which ended on March 26th consists of international friendly matches that are contested by national teams from all six ...",
    date: "27th of March, 2024",
  },
  {
    id: 4,
    imgUrl:
      "https://images.pexels.com/photos/7841502/pexels-photo-7841502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "President Ruto signs Affordable Housing Bill into law",
    link: "https://www.africanews.com/2024/03/19/president-ruto-signs-affordable-housing-bill-into-law/",
    content:
      "Kenya’s President William Ruto has signed into law a controversial bill, paving the way for the government to ...",
    date: "19th of March, 2024",
  },
  {
    id: 6,
    imgUrl:
      "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=600",
    title:
      "Ethiopia’s biggest bank says it hashas recouped nearly 80% has recouped nearly 80%  recouped nearly 80% ...",
    link: "https://www.africanews.com/2024/03/27/ethiopias-biggest-bank-says-it-has-recouped-most-of-the-cash-lost-during-a-system-glitch/",
    content:
      "Nearly 15,000 people have voluntarily returned funds eitheir fully or partly “taken illegally,” the bank said in a statement.",
    date: "28th of March, 2024",
  },
  {
    id: 5,
    imgUrl:
      "https://images.pexels.com/photos/6262966/pexels-photo-6262966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Central bank of Nigeria raises interest",
    link: "https://www.africanews.com/2024/03/27/central-bank-of-nigeria-raises-interest-rates-to-combat-soaring-inflation/",
    content:
      "Nigeria’s central bank implemented a significant increase in its monetary policy rate, raising it by 200 basis points to ...",
    date: "27th of March, 2024",
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
      "Yemi is an Investment Banker and has previously served as Group Chief Executive of CITITRUST Holdings Plc.",
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
      "Leticia is a Chartered Accountant and Tax Practitioner and is currently a senior consultant at Makosi LLP where she manages clients across Southern Africa and Pacific Asia dealing with more complex cycles of engagement",
    details2:
      "Before joining Makosi LLP, she was a partner at Bentich Limited where she advised clients on Accounting Services ranging from the compilation of financial statements by IFRS and IFRS for SMEs, Tax related matters.",
    details3:
      "Leticia is also widely known for her sound governance knowledge and compliance Leticia obtained her First and Second degrees in Accounting from the University of South Africa.",
  },
];

export const productsAndServicesArray = [
  {
    id: 1,
    imgUrl:
      "https://images.pexels.com/photos/45917/pexels-photo-45917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Investment Banking",
    header:
      "Delivering tailored financial advisory services to meet your strategic objectives.",
    link: "#investmentBanking",
    content:
      "Equiserve is dedicated to providing expert investment banking solutions. Our team offers a range of services including mergers and acquisitions, capital raising, and strategic advisory, ensuring that your business achieves its financial goals.",
  },
  {
    id: 2,
    imgUrl:
      "https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Investment Management",
    link: "#corporateBanking",
    header:
      "Supporting businesses with comprehensive banking solutions to drive growth and stability.",
    content:
      "At Equiserve, we offer customized corporate banking services designed to address the unique needs of your business. From working capital management to corporate financing, our solutions are tailored to enhance your operational efficiency and financial health.",
  },
  {
    id: 3,
    imgUrl:
      "https://images.pexels.com/photos/887845/pexels-photo-887845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Security Tradings",
    header:
      "Empowering your business with strategic capital solutions for sustainable growth.",
    link: "#capitalBanking",
    content:
      "Equiserve provides robust capital banking services, helping businesses secure the funding they need to thrive. Our expertise in capital markets and financing ensures that your enterprise has the resources necessary to capitalize on opportunities and achieve long-term success.",
  },
  {
    id: 2,
    imgUrl:
      "https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Investment Management",
    link: "#corporateBanking",
    header:
      "Supporting businesses with comprehensive banking solutions to drive growth and stability.",
    content:
      "At Equiserve, we offer customized corporate banking services designed to address the unique needs of your business. From working capital management to corporate financing, our solutions are tailored to enhance your operational efficiency and financial health.",
  },
  {
    id: 3,
    imgUrl:
      "https://images.pexels.com/photos/887845/pexels-photo-887845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Security Tradings",
    header:
      "Empowering your business with strategic capital solutions for sustainable growth.",
    link: "#capitalBanking",
    content:
      "Equiserve provides robust capital banking services, helping businesses secure the funding they need to thrive. Our expertise in capital markets and financing ensures that your enterprise has the resources necessary to capitalize on opportunities and achieve long-term success.",
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

export const footerLinks = [
  {
    title: "Navigations",
    links: [
      { name: "Home", link: "/" },
      { name: "About us", link: "/about" },
      { name: "Investor relations", link: "/investorRelations" },
      { name: "Careers", link: "#careers" },
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
