import { SkLogo, CuLogo } from "../assets";
import {
  HTML,
  CSS,
  JS,
  Vscode,
  figma,
  react,
  Preview,
  CgPos,
  Constraint,
  Home,
  Wing,
  Tail,
  background,
  cryptodetail,
  cryptohome,
  cryptonews,
  currencylist,
  mui,
} from "../assets";

export let About_P1 = `If you’re on this page, I assume that you already know my first name. 
You can call me “Pong” which is my nickname. I am 22 year-old, and I recently graduated with a bachelor 
of aerospace engineering, Chulalongkorn university.`;

export let About_P2 = `It is undeniable that we are accelerated to digital transformation era by COVID-19; therefore, 
it is necessary for various companies to digitize themselves to handle unpredictable business situations. Even though 
I graduate with a major of aerospace engineering, I am currently interesting in web development since I realize about 
digital disruption, and I desire to be the one who efficiently drives our society to the new era.`;

export let About_P3 = `With interest of the web development, I am specifically passionate with front-end development and
 have cultivated crucial background throughout my 4th year. Moreover, I apply the knowledge to my senior project, “Conceptual 
 RC Aircraft Design Website”, so that it is capable of delivering results meeting the project requirements as possible.`;

export let About_P4 = `Currently, I am continuing to develop my front-end skills by creating side projects and simultaneously
learn new technological stacks in order to handle dynamic users’ requirements in the current era. `;

export let About_P5 = `Let’s relax your brain with my hobby, I have taken a photo for many years since my father loves photography,
so I learned about photography from him. Personally, I like landscape and cityscape photography. I stopped taking a photo for 3 years 
due to COVID-19 pandemic. But currently, I am starting to develop my photography skill again.`;

const experiences = [
  {
    school: "Suankularb Wittayalai School",
    date: "2016-2018",
    icon: SkLogo,
    points: [
      `Studied in “Gifted Math Program`,
      `Awarded first runner-up in the "District Math Project Competition"`,
      `GPAX: 3.63`,
    ],
  },
  {
    school: "Chulalongkorn University",
    date: "2019-2022",
    icon: CuLogo,
    points: [
      `Studied in “Aerospace engineering`,
      `Participated in the “Thailand Association of Aerospace Engineer (TAAE) Competition`,
      `Participated in the “Design Build Fly (DBF) Competition`,
      `Created “Conceptual RC Aircraft Design Website” as a senior project`,
      `GPAX: 3.30`,
    ],
  },
];

export { experiences };

export const rcWebsite = [
  {
    title: "Conceptual RC Aircraft Design Website",
    introParagraph: `In the present day, there are only a few radio-controlled (RC) aircraft design websites; 
    oreover, most of them are difficult to use due to messy user interfaces and content requiring user specific comprehension. 
    herefore, my objective was to design an efficient RC aircraft design website with attractive user interfaces to satisfy the 
    new generation users interested in aircraft design.`,
    keyFeature: [
      { detail: "The website can define aircraft design boundary." },
      { detail: "Aircraft Components can be designed in the website." },
      {
        detail:
          "The designed components will have their graphical illustrations.",
      },
      { detail: "Theoretical background is provided for users." },
    ],
    tools: [
      { image: HTML },
      { image: CSS },
      { image: JS },
      { image: react },
      { image: Vscode },
      { image: figma },

    ],
    resultPic: [
      { image: Home },
      { image: Constraint },
      { image: Wing },
      { image: Tail },
      { image: CgPos },
      { image: Preview },
      { image: background },
,
    ],
    link:"https://senior-next-beryl.vercel.app/",
    resultParagraph: `The website consists of four pages which are homepage, constraint diagram page, components design page, 
    and theoretical background page.`,
    result: [
      {header: "Homepage", detail: ": Use to link to other pages"},
      {header: "Constraint Diagram", detail: "Use to define aircraft design boundary"},
      {header: "Component Design Page", detail: ": There are four sub-sections which are wing, tail, Cg Location, and fuselage"},
      {header: "Theoretical Background", detail: ": Provide fundamental theory for users."},
    ]
  },
];


export const cryptoClone =[
  {
    title: "Cryptocurrency Report Website",
    introParagraph: `Cryptocurrency is one of the attrative technological trends. With the benefit of blockchain technology, 
    cryptocurrencies have revolutionized the way people perceive and interact with traditional financial systems. The website
    was created to provide current cryptocurrencies status for users and to improve frontend development skills. `,
    keyFeature: [
      { detail: "The website can report the global cryptocurrency status." },
      { detail: "Famous cryptocurrency data such as price can be inspected." },
      {
        detail:
          "Each Cryptocurrency has their own history price chart in various periods.",
      },
      { detail: "Users can search the news about the desired cryotocurrency" },
    ],
    tools: [
      { image: HTML },
      { image: CSS },
      { image: JS },
      { image: react },
      { image: Vscode },
      { image: mui },

    ],
    resultPic: [
      { image: cryptohome },
      { image: cryptonews },
      { image: cryptodetail },
    ],
    link:"https://crypto-clone-eight.vercel.app/",
    resultParagraph:`The website consist of four main pages including homepage, currency list page, currency detail
    page and cryptocurrency news page.`,
    result: [
      {header: "Homepage", detail: ": Partially display each cryptocurrency page"},
      {header: "Currency List Page", detail: ": Use to search desired cryptocurrency"},
      {header: "Currency Detail Page", detail: ": Provide crucial data for each crypto"},
      {header: "Crytocurrency News Page", detail: ": Search latest news about desired currency "},
    ]
  }
]