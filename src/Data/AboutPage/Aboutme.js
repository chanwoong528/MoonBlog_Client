import {
  AiFillGithub,
  AiFillFacebook,
  AiFillPhone,
  AiTwotoneMail,
} from "react-icons/ai";
import { SiNaver } from "react-icons/si";
export const personality = [
  {
    id: 0,
    title: "Motivated",
    body: "I am very motivated to work as Software Developer. I always look for solution if the solution is the best solution for the problem. I am not hesitant to ask questions to solve the problem.",
  },
  {
    id: 1,
    title: "Self-driven",
    body: "I always look for ways to improve my skills and try to expand the field of development. When I got Employeed, I did not know much about Backend as well as Database. Now I can implement REST API, as well as deal with SQL Database. I always motivate my to be better. ",
  },
  {
    id: 2,
    title: "Communicative",
    body: "I Enjoy talking and listening about others' developments. Anything that is related to Development is triggers my excitements. (Recently, I found out that in SQL DB you can make 'hierarchical query' which act similar as Tree structure and it was mind blowing :O) ",
  },
  {
    id: 3,
    title: "Fast/Enjoy leaner",
    body: "Lastly I enjoy to learn and apply to the projects. Main source of learning is usually online based, but I also love to meet people to learn about knowledge that I do not have. ",
  },
];

export const projects = [
  {
    id: 0,
    title: "Our Neighbor Story(Renewal on Progress)",
    url: "NA",
    img: "https://res.cloudinary.com/dwu0u1r6l/image/upload/v1644761660/moonblog_image/ourneighborstory_japafz.jpg",
    gitUrl: "https://github.com/chanwoong528/ourResidentManager",
    summary:
      "Basic Idea was to make community for  people who live within the building. Especially in Korea, there are many single house hold, building a community among themselves would be beneficial for both residents and admins. Renewal is on the progress with extra features such as billings through mailing, and completly migrate to React instead of EJS. ",
    keyFunc: [
      "Login using passport.js.",
      "Basic CRUD based on Authentication.",
      "Admin page to validate Users.",
      "File upload with BOX api.",
      "Article with 3 different Types.",
      "Comments as well as post Article.",
    ],
    lesson: [
      "Basic CRUD using Express.",
      "Basic Knowledge of Authentication.",
      "Basic Knowledge of DataBase Structure by implementing CRUD of posts",
      "Basic Knowledge of Session and Passport.js",
      "Using middleware to classify authentication. ",
      "Basic usage of Bootstrap",
      "Basic Web in General(How to communicate with client to server).",
    ],
    viewImg: [
      "https://res.cloudinary.com/dwu0u1r6l/image/upload/v1644761660/moonblog_image/ourneighborstory_japafz.jpg",
      "https://res.cloudinary.com/dwu0u1r6l/image/upload/v1645580939/moonblog_image/110888140-ecd44280-832e-11eb-9bb3-292f7cdab3eb_zcc5tk.png",
    ],
    stackImg: [
      "https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
      "https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white",
      "https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white",
      "https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white",
    ],
  },
  {
    id: 1,
    title: "Our Neighbor FoodTruck",
    url: "https://chanwoong528.github.io/ourNeighborFoodTruck/",
    img: "https://res.cloudinary.com/dwu0u1r6l/image/upload/v1644761777/moonblog_image/113100500-77c1a200-9236-11eb-900e-3f8ca1d26b3e_efgb90.jpg",
    gitUrl: "https://github.com/chanwoong528/ourNeighborFoodTruck",
    summary: `Most of the Foodtruck owner does business with SNS platform such as Instagram, which is not perfectly suited for location services.
    By adding CRUD menus to be displayed with location of truck on daily basis, Foodtruck owners can benefit of using this app instead of copy pasting menus and location and upload through SNS services. `,
    keyFunc: [
      "Basic knowledge of React, Basic Usage of Hooks(useState, useEffect).",
      "Using Kakao Map API to locate user as well as foodTruck.",
      "Login with Firebase Authentication.",
      "CRUD for Foodtruck owner's menu.",
      "View menu to users with style of Blackboard",
      "CRUD for Foodtruck owner's location of foodtruck, real time database that firebase offers.",
      "PWA to compatible with mobile",
    ],
    lesson: [
      "Usage of API such as Kakao Map API. ",
      "Authentication Using Firebase Auth.",
      "Usage of Basic CSS Styling, and Flexbox.",
      "Usage of Basic PWA",
    ],
    viewImg: [
      "https://res.cloudinary.com/dwu0u1r6l/image/upload/v1645580863/moonblog_image/113100504-78f2cf00-9236-11eb-9185-4178a8f4302e_tkvwaz.jpg",
      "https://res.cloudinary.com/dwu0u1r6l/image/upload/v1645580880/moonblog_image/113100505-78f2cf00-9236-11eb-8fff-7225b104575d_plhijm.jpg",
    ],
    stackImg: [
      "https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white",
      "https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black",
      "https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white",
    ],
  },
  {
    id: 2,
    title: "Customer Management",
    url: "https://chanwoong528.github.io/customerManagement/",
    img: "https://res.cloudinary.com/dwu0u1r6l/image/upload/v1644761397/moonblog_image/customerManagement_j7bv0l.png",
    gitUrl: "htts://github.com/chanwoong528/customerManagement",
    summary:
      "With the request from my mother, she wanted to make basic CRUD on customers, with the improvement of functionality of contact, most of the phones have contacts with memo now, this app was built when there was no memo to be saved and also suited for Real estate agents' needs and wants. ",
    keyFunc: [
      "Login with Firebase Authentication.",
      "CRUD based on Customers.",
      "input type radio, input with dropdown. ",
      "CSS Flex box for Basic Responsive Design. ",
      "PWA to compatible with mobile",
    ],
    lesson: [
      "Trying to Practice knowledge that I learned from Our Neighbor FoodTruck, and Our Neighbor Story",
    ],
    viewImg: [
      "https://res.cloudinary.com/dwu0u1r6l/image/upload/v1645580819/moonblog_image/117157694-c647fa80-adf9-11eb-8794-56681a7284db_pn0ye2.png",
      "https://res.cloudinary.com/dwu0u1r6l/image/upload/v1644761397/moonblog_image/customerManagement_j7bv0l.png",
    ],
    stackImg: [
      "https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white",
      "https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black",
      "https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white",
    ],
  },

  {
    id: 3,
    title: "Ebid Renewal(Signetics)",
    url: "NA",
    img: "https://res.cloudinary.com/dwu0u1r6l/image/upload/v1645485182/moonblog_image/ebidnavbar_ndzzwp.png",
    gitUrl: "NA",
    summary:
      "Anonymous biding website that receives estimation from other vendors, and sales team will not be access to biding data until the data is closed to avoid any extra factors when making decision. ",
    keyFunc: [
      "Creact and Read for Estimations.",
      "Sending Email from Website using Nodemailer.",
      "Other Venders will visit website with specific url that is given to own email encrypted with JWT.",
      "Other Venders, using above JWT Url to submit estimation including file upload.",
      "Simple Text Editor implemented to send Email to venders. ",
      "CRUD to manage contacts of venders",
    ],
    lesson: [
      "Using JWT in different cases, for example, sending Email for verification. ",
      "manging file upload and download using multer and formData.",
      "Manipulating DOM:(tab functionality, update mode in grid, adding list of selected item to selected box, etc..)",
      "Event bubbling and Event capturing when implementing tab functionality. ",
    ],
    viewImg: [
      "https://res.cloudinary.com/dwu0u1r6l/image/upload/v1645485182/moonblog_image/ebidnavbarandtab_lhrx7z.png",
      "https://res.cloudinary.com/dwu0u1r6l/image/upload/v1645485182/moonblog_image/ebidnavbar_ndzzwp.png",
      "https://res.cloudinary.com/dwu0u1r6l/image/upload/v1645485182/moonblog_image/ebidcompanyinsert_yn9gpw.png",
      "https://res.cloudinary.com/dwu0u1r6l/image/upload/v1645485181/moonblog_image/sending_email_xrjxb8.png",
      "https://res.cloudinary.com/dwu0u1r6l/image/upload/v1645485181/moonblog_image/cancel_email_file_download_mbpb3m.png",
      "https://res.cloudinary.com/dwu0u1r6l/image/upload/v1645578224/moonblog_image/EBIDMoving_cpstfj.gif",
    ],
    stackImg: [
      "https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
      "https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white",
      "https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white",
      "https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white",
    ],
  },
  {
    id: 4,
    title: "SCM Renewal(Signetics)",
    url: "NA",
    img: "https://res.cloudinary.com/dwu0u1r6l/image/upload/v1645485836/moonblog_image/pomobile_clqywl.png",
    gitUrl: "NA",
    summary:
      "Originally outsourced website, that manages especially Purchase Order List with expected Quantity and Date to be entered from other venders. Also, more features such as Purchase Order Cancel List, Shipped List, and Admin Pages are added.",
    keyFunc: [
      "Using AG-grid to List items of Purchase Order according to their types:Open, Expectation, Shipped, and Cancel",
      "Login using 2 tokens: 1. access Token, 2. refresh Token.",
      "Admin page that our Employee can give access to users from other vendors.",
      "View list of Purchase Order according to User's authentication",
      "Password Reset Functinos using JWT as URL that's sent to User's Email.",
      "CRUD Notice for employees to inform other vendors. ",
    ],
    lesson: [
      "Better understanding of JWT, and Login methods like Session and cookie. ",
      "Better understanding of Fetch API and Axios such as Axios.interceptor(). ",
      "Better understanding of CSS and HTML on layouts and Responsive Design(Grid).",
      "Better understanding of CSS in JS.",
      "Better Knowledge of UI Implementation. Dropdown, Modal, card, grid, etc",
      "Better React Code Structure, to be reused in other components.",
      "Excel upload and download for List of vendor by researching AG-grid.",
      "Dealing with AG-grid",
      "Better understanding with expressJS and oracle DB operation.",
      "Better understanding JavaScript async/await, promise, callback.",
      "Deployment by building React and inserting build in server to have shared origin. ",
    ],
    viewImg: [
      "https://res.cloudinary.com/dwu0u1r6l/image/upload/v1645485836/moonblog_image/pomobile_clqywl.png",
      "https://res.cloudinary.com/dwu0u1r6l/image/upload/v1645485837/moonblog_image/navbarmobile_vdacmn.png",
      "https://res.cloudinary.com/dwu0u1r6l/image/upload/v1645485836/moonblog_image/mainpo_wfpqxg.png",
      //"https://res.cloudinary.com/dwu0u1r6l/image/upload/v1645485836/moonblog_image/adminview2_recoz4.png",
      // "https://res.cloudinary.com/dwu0u1r6l/image/upload/v1645485836/moonblog_image/adminview1_brdlky.png",
      "https://res.cloudinary.com/dwu0u1r6l/image/upload/v1645485836/moonblog_image/Search_sdfnxk.png",
      "https://res.cloudinary.com/dwu0u1r6l/image/upload/v1645580410/moonblog_image/scmadmin_dozfw7.gif",
      "https://res.cloudinary.com/dwu0u1r6l/image/upload/v1645580459/moonblog_image/scmresponsive_oli7f8.gif",
    ],
    stackImg: [
      "https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black",
      "https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white",
      "https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white",
      "https://img.shields.io/badge/oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white",
    ],
  },
  {
    id: 5,
    title: "Moon Blog",
    url: "https://moonblogjs.netlify.app/",
    img: "https://res.cloudinary.com/dwu0u1r6l/image/upload/v1644762171/moonblog_image/blog_example_lwwoej.png",
    gitUrl: "https://github.com/chanwoong528/MoonBlog_Client",
    summary:
      "To Practice what I have Learned so far as well as to record my TIL and key functions that is important to be JavaScript based Developer. Development was not long,(started: 2022.02.01), thus I keep implementing and upgrading functionality until now. Implemented most of functionality and UI with new functions such as WYSIWYG Editor, ChartJS, posts Pagination and so on. ",
    keyFunc: [
      "JWT Login with automatically refreshing access token if refresh token is valid and Reset Password Through Email using Sendgrid API. ",
      "Layout of Main and About Page to be my landing page, Post page to be recording my TIL.",
      "CRUD of Posts including Image upload with QuillJS and customized Image Uploader using Cloudinary. ",
      "Custom Hook to give Typing animation on Landing page.",
      "Implementing timeline Feature using CSS",
      "Admin Page to CRUD topics for posts. ",
      "Deployment with Netlify(React) and Heroku(ExpressJS). ",
    ],
    lesson: [
      "Better Knowledge of Axios.",
      "Implementing QuillJS to React Customizing to my needs",
      "Better folder Structure with React as well as ExpressJS.",
      "Implementing SCSS with features like @mixin with @content, @include, @for.",
      "Better understanding with @media and @keyframes",
      "Tried to implement BEM for CSS naming convention. ",
      "Better understanding of Responsive Design",
    ],
    viewImg: [
      "https://res.cloudinary.com/dwu0u1r6l/image/upload/v1646175637/moonblog_image/adminpage_trx4wg.png",
      "https://res.cloudinary.com/dwu0u1r6l/image/upload/v1646175637/moonblog_image/adminmodal_igpnwj.png",
    ],
    stackImg: [
      "https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white",
      "https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black",
      "https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white",
      "https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white",
    ],
  },
];
export const sns = [
  { url: "tel:(+82)-10-4705-3765", icon: <AiFillPhone /> },
  { url: "mailto:cksdnd004@naver.com", icon: <AiTwotoneMail /> },
  { url: "https://github.com/chanwoong528", icon: <AiFillGithub /> },
  { url: "https://blog.naver.com/cksdnd004", icon: <SiNaver /> },
  { url: "https://www.facebook.com/cksdnd004", icon: <AiFillFacebook /> },
];
export const techStacks = [
  {
    name: "HTML",
    img: "https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
    did: [
      "Know basic HTML Tags and use them(div, img, a, body, video, little of canvas, etc...)",
      "Knows reason for using Semantic tags, and trying to implement Semantic tags as possible.(header, footer, nav, section, article, etc...)",
    ],
    willdo: [
      "Working on how to use Canvas for both personal project(game) and UI/UX improvements",
    ],
  },
  {
    name: "CSS",
    img: "https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white",
    did: [
      "Knows how to use and differences on basic CSS layouts such as Grid , FlexBox, block, inline-block, and etcs",
      "Knows how to implement basic functionality UI such as Modal, Slider, Scroll-Snapshot, and etc... with pure CSS",
      "Knows how to implement reponsive design basics with @media queries.",
      "Used clamp to have responsive font-size",
    ],
    willdo: ["Working on improving CSS animation with @keyframes"],
  },
  {
    name: "SCSS",
    img: "https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white",
    did: [
      "Used @mixin, to make some styling as module to be used in different SCSS files.",
      "Used @mixin with @content to make Responsive Layout for different devices(PC, tablets, Mobile)",
      "Used Variables such as font-size, certain number of colors to be used in Entire SCSS",
      "Used Simple @for to have different animation when dealing with list of items",
    ],
    willdo: [
      "Needs improvement on Architecturing Code with SCSS",
      "Working on Improving @keyFrames",
    ],
  },
  {
    name: "JS",
    img: "https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
    did: [
      "Tried to focus on JS Fundamentals such as Execution Context, Hoisting, Closure, Event Loop, ES06, and etcs",
      "Used vanilla Javascript to make DOM manipulation to make small UI such as slider, modal, scroll event, etcs",
      "One of the Project was made with pure vanilla JS, where tabs, selecting item form dropdown, etcs were implemented.",
    ],
    willdo: [
      "Trying to learn more and be aware all the time about concepts of JS and how JS is executed.",
    ],
  },

  {
    name: "REACTJS",
    img: "https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black",
    did: [
      "Most of the Projects that I did was in REACT(Hooks).",
      "Knows basics of Life Cycle of REACT",
      "Knows how to use basic Hooks such as useMemo, useCallback, useState, useReducer, useContext, useEffect",
      "UI implementation such as parallax scrolling, drag and drop, dropdown, modal, slider and so on",
      "Basic understanding on how React render using virtual DOM",
      "Used Context API for projects for state management",
      "Used axios, and axios.interceptors to implement Login, using refresh token and access token",
    ],
    willdo: [
      "Class based React needs improvement.",
      "Deeper Knowledge of React Hook",
      "Deeper Knowledge on how React works behind the scene",
      "different State management such as Mobx, redux",
      "Implementing Typescript",
      "Expand to React Native, and Electron",
      "Implement Testing with library such as JEST ",
    ],
  },
  {
    name: "NODEJS",
    img: "https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white",

    did: [
      "Knows Basics of Nodejs and how it was created.",
      "Mostly used nodejs with Express to build backend APIs.",
    ],
    willdo: [],
  },
  {
    name: "EXPRESSJS",
    img: "https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white",
    did: [
      "Knows how to receive request from client, and send data that is manipulated as needed.",
      "Used Express-session to make Authentication",
      "Used express-validator to validate data from client",
      "Used JWT to reset password, login authentication",
      "Knows basic knowledge of CORS.",
    ],
    willdo: [
      "Needs improvement on architecture (trying to learn from cleancode lectures about best practices and reason behind it).",
      "ORM that can be used with SQL based Database.",
      "Implementing Typescript",
      "Implement Testing with library such as JEST ",
    ],
  },
  {
    name: "ORACLE",
    img: "https://img.shields.io/badge/oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white",
    did: [
      "Basic Knowledge on Queries(CRUD, join:{left, outer, inner})",
      "Used in daily basis with expressJS to build backend APIs",
    ],
    willdo: [
      "making Trigger, PL/SQL, and Procedure(as of now, only used which is already made)",
      "Table Architecture needs improvement",
    ],
  },
  {
    name: "MONGO",
    img: "https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white",
    did: [
      "Basic Knowledge on Queries(CRUD, populate)",
      "Used for most of the personal projects due to accessibility",
      "Used with express-session to store login sessions with mongo-connect",
    ],
    willdo: ["Table Architecture needs improvement"],
  },
  {
    name: "FIREBASE",
    img: "https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white",
    did: [
      "Used with personal project to avoid writing backend code.",
      "Used Firestore as database(realtime) and Oauth",
    ],
    willdo: [],
  },
  {
    name: "GIT",
    img: "https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white",
    did: [
      "Git to Store most of the works inside and outside of company",
      "Knows basic use of git CLI.",
    ],
    willdo: [],
  },
  {
    name: "GITHUB",
    img: "https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white",
    did: [
      "Personal Projects, especially backend, CI/CD to Heroku",
      "Used github to coop with team members",
    ],
    willdo: ["Needs improvement to work on a team in a scale of company."],
  },
];
