export const projects = [
    {
        id: "pockemon-verse",
        img: "/assets/pokemonVerse.png",
        feat: ["-Responsive web Design.", "-Pokemon website using graphql to query data from PokeAPI", "-Loader that shows when graphql query fetching data.", "-List of pokemons form starting to ending on select of any one shows Details and their evolutions if available.", "-Here is Infinite scrolling feature that get new data as you reach the bottom of site.", "-Search bar that helps to direct search any pokemon."],
        name: "PockemonVerse",
        github: "https://github.com/D1vyeshN/YoutubeLite-CloneWebsite"
        ,
        des: "Discover Pokémon on PockemonVerse, Display of Pokémon data for an immersive journey.",
        tech: ["nextjs", "reactjs", "typescript", "graphql", "tailwindcss"],
    },
    {
        name: "E-Commerce OnlineStore",
        id: "e-commerce-onlineStore",
        img: "/assets/onlineStore.png",

        des: "Shop smarter with User-friendly eCommerce OnlineStore, featuring a wide selection of products and hassle-free shopping experience.",
        feat: ["-Responsive web Design.", "-User authentication (login,Signup) using passportJs.", "-Without login User can search and filter product and visit product detail page.", "-Only loged in User can give feedback on product and add into the cart.", "-User can change quantity and remove product from cart.", "-Checkout page Where User add address and remove address and navigate to payment.", "-Payment is done using Razorpay API and when payment done User navigate to order-success page.", "-User can show all orders in my orders page.", "-On my profile page User can edit name and profile picture and also show,add,edit and delete addresses.", " ", " ADMIN:All that users can do in website", "-ADD ,EDIT and DELETE product.", "-Admin can show available stock.", "-Show all Orders made by All Users and Order details.", "-Admin can set Order status.", "-ADD categories and brands."],
        github: "https://github.com/D1vyeshN/YoutubeLite-CloneWebsite"


        , tech: [
            "javascript",
            "reactjs",
            "redux",
            "tailwindcss",
            "nodejs",
            "mongodb",
            "passportJs",
            "razorpay"
        ],
    },
    {

        name: "Porfolio website",
        img: "/assets/portfiliodark.png",
        id: "porfolio-website",
        feat: ["-Responsive web Design.", "-Loading screen that show until the 3D models are loaded then navigate to main website.", "-Projects section that showcase some selected projects and navigation to live ,github code and Project Detail page.", "-Contact Section so any one can contact with developer by name ,Email and message", "-Contact form send mail using Emailjs.", "-Animations using framer motion gives batter user experience.", "-Navigation bar and footer to navigate any section on website and some links on footer for code and contact.", "-React three fiber is used to render 3D models.", "-Product Detail page that have little brief detail of project and links for live and code."],

        des: "Capturing creativity and expertise in a digital showcase.",
        github: "https://github.com/D1vyeshN/YoutubeLite-CloneWebsite",

        tech: [
            "nextjs",
            "reactjs",
            "typescript",
            "threejs",
            "tailwindcss",
            "framermotion",
        ],
    },
    {
        id: "youtube-clone",
        img: "/assets/youTubeLite.png",
        feat: ["-Responsive web Design.", "-Here is only Home page and video page UI using ReactJs and Tailwind CSS", "-Loading that shows on data is fetching form youtube API.", "-Navigation bar that have searching feature that can help to search any content.", "-Responsive Side menubar with Bunch of category Options to related contents like music, trending.", "-Video lists that show Views, timing ,thumbnail and channel for every videos.", "-Click on to watch video and gives suggestions for related videos."],

        name: "YouTube Clone",
        des: "Your familiar YouTube experience, recreated. Welcome to YouTubeClone.",
        tech: ["javascript", "reactjs", "tailwindcss"],
        github: "https://github.com/D1vyeshN/YoutubeLite-CloneWebsite"
    },
    {
        id: "cryptosite",
        img: "/assets/crtptopedia.png",
        name: "CryptoSite",
        feat: ["-Responsive web Design.", "Website for cryptocurrency Information that shows price in USD and INR in Coins section.", "-Exchange have lots of cryptocurrency Exchange companies and on click the user navigate to their original website.", "-All data about Exchanges and Currencies fetch from API.", "-Here is Graphical representation of crypto-currencies data of like 7day,15days,30days and some ups and downs of their price."],

        des: "Unlock the world of cryptocurrencies with our informative CryptoSite, Go-to destination for analysis and resources.",
        tech: ["javascript", "reactjs", "framermotion", "chakraUI"],
        github: "https://github.com/D1vyeshN/YoutubeLite-CloneWebsite"

    },
];