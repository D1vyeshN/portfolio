export const projects = [
    {
        id: "pockemon-verse",
        img: "/assets/pokemonVerse.png",
        feat: ["+ Utilization of responsive web design.", "+ Development of a Pokémon website using GraphQL to fetch data from PokeAPI.", "+ Implementation of a loader to indicate data retrieval during GraphQL queries.", "+ Compilation of a Pokémon list from the beginning to the end; selecting one displays detailed information and available evolutions.", "+ Integration of an infinite scrolling feature for continuous data loading as you navigate to the site's bottom.", "+ Inclusion of a search bar for direct Pokémon searches."],
        name: "PockemonVerse",
        github: "https://github.com/D1vyeshN/PokemonVerse"
        ,
        liveDemo: "https://pokemon-verse.vercel.app",
        des: "Discover Pokémon on PockemonVerse, Display of Pokémon data for an immersive journey.",
        tech: ["react.Js", "typescript", "graphQL", "tailwindCSS"],
    },
    {
        name: "E-Commerce OnlineStore",
        id: "e-commerce-onlineStore",
        img: "/assets/onlineStore.png",

        des: "Shop smarter with User-friendly eCommerce OnlineStore, featuring a wide selection of products and hassle-free shopping experience.",
        feat: ["+ Responsive web Design.", "+ User authentication via passports for secure login and signup.", "+ Non-logged-in users can browse and filter products, and view product details, but feedback and adding to cart require logging in.", "+ Cart functionality includes modifying quantities and removing items.", "+ Streamlined checkout process with address management and payment via Razorpay API leading to an order-success page.", "+ Access to order history on the 'My Orders' page.", "+ User profile customization for name, profile picture, address management, and more.", " ", "Admin Capabilities:", "+ Product management: adding, editing, and deleting products.", "+ Monitoring stock availability.", "+ Oversight of all orders and detailed order information.", "+ Setting order statuses.", "+ Category and brand management."," ","Credentials ","Normal User: test@test.com/Test@123","Admin User: div@abc.com/Div@123 "],
        github: "https://github.com/D1vyeshN/e-commerce",
        liveDemo: "https://online-store-ecommerce-dn.vercel.app"



        , tech: [
            "javascript",
            "react.Js",
            "redux",
            "tailwindCSS",
            "node.Js",
            "mongoDB",
            "passport.Js",
            "razorpay"
        ],
    },
    {

        name: "Porfolio website",
        img: "/assets/portfoliodark.png",
        id: "porfolio-website",
        feat: ["+ Responsive web design for optimal viewing across devices.", "+ Introduction loading screen displaying until 3D models load, directing users to the main website.", "+ Projects section featuring select projects with links to live demos, GitHub repositories, and detailed project pages.", "+ Contact section facilitating communication with the developer via name, email, and messaging.", "+ Integration of Emailjs to enable sending emails through the contact form.", "+ Enhanced user experience through animations using Framer Motion.", "+ Navigation bar and footer for seamless website exploration, including links to various sections, code, and contact information.", "+ Utilization of React Three Fiber for rendering 3D models.", "+ Product detail page offering concise project information and access to live demos and GitHub code."],

        des: "Capturing creativity and expertise in a digital showcase.",
        github: "https://github.com/D1vyeshN/portfolio",
        liveDemo: "https://divyesh-nandanwar.vercel.app"
        ,
        tech: [
            "next.Js",
            "react.Js",
            "typescript",
            "react three fiber",
            "tailwindCSS",
            "framer motion",
        ],
    },
    {
        id: "youtube-clone",
        img: "/assets/youTubeLite.png",
        feat: ["+ Utilizes a responsive web design.", "+ Showcases the Home page and video page UI developed using ReactJs and Tailwind CSS.", "+ Incorporates a loading feature while fetching data from the YouTube API.", "+ Features a navigation bar with a search function for content exploration.", "+ Includes a responsive Side Menubar with various category options related to content such as music and trending topics.", "+ Displays video lists detailing views, duration, thumbnail, and channel information for each video.", "+ Enables users to click and watch videos while receiving suggestions for related content."],
        liveDemo: "https://youtube-lite-clone-dn.vercel.app"
        ,
        name: "YouTube Clone",
        des: "Your familiar YouTube experience, recreated. Welcome to YouTubeClone.",
        tech: ["javascript", "react.Js", "tailwindCSS"],
        github: "https://github.com/D1vyeshN/YoutubeLite-CloneWebsite"
    },
    {
        id: "cryptosite",
        img: "/assets/crtptopedia.png",
        name: "CryptoSite",
        feat: ["+ Responsive Web Design.", "+ A dedicated section showcasing cryptocurrency information, displaying prices in both USD and INR.", "+ Extensive listing of cryptocurrency exchange companies, with direct links to their respective websites upon selection.", "+ Real-time data sourced from APIs concerning exchanges and currencies.", "+ Graphical representation illustrating the price fluctuations of various cryptocurrencies over 7, 15, and 30-day periods."],
        liveDemo: "https://crypto-website-two.vercel.app/"
        ,
        des: "Unlock the world of cryptocurrencies with our informative CryptoSite, Go-to destination for analysis and resources.",
        tech: ["javascript", "react.Js", "framer motion", "chakraUI"],
        github: "https://github.com/D1vyeshN/Crypto-Website"

    },
];