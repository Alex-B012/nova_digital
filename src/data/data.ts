import logo_white from "../assets/logo_images/logo1.png"
import logo_blue from "../assets/logo_images/logo2.png"
import { icons } from "./icons";

import coffeeshop_img from "../assets/images/projects/coffeeshop.webp";
import hotel_img from "../assets/images/projects/hotel.webp";
import house_img from "../assets/images/projects/house.webp";
import store_img from "../assets/images/projects/store.webp";
import team_img from "../assets/images/team.webp"

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPinterestP } from "@fortawesome/free-brands-svg-icons";


import news_3d_img from "../assets/images_news/news_3d.webp"
import news_design_img from "../assets/images_news/news_design.webp"
import news_ads_img from "../assets/images_news/news_ads.webp"
import news_view_img from "../assets/images_news/news_view.webp"
import news_graphics_img from "../assets/images_news/news_graphics.webp"
import news_media_img from "../assets/images_news/news_media.webp"
import news_corp_img from "../assets/images_news/news_corp.webp"
import news_unique_img from "../assets/images_news/news_unique.webp"

export const logo = {
   white: logo_white,
   blue: logo_blue
}

export const homeSlider_data = [{
   id: 1,
   title: "Think worldwide",
   text: "We are a digital agency crafting powerful online experiences through design, development, and strategy. From local startups to global brands, we drive growth and engagement across platforms. Ready to expand your reach?"
}, {
   id: 2,
   title: "Future-First Digital",
   text: "We build digital solutions that are ready for tomorrow. With a focus on innovation, user experience, and scalable technology, we help brands future-proof their online presence and lead confidently in a constantly shifting digital world."
}, {
   id: 3,
   title: "From Vision to Velocity",
   text: "We turn bold ideas into fast, functional digital experiences. With expertise in design, development, and strategic marketing, we help companies move from concept to launch — building momentum and results in competitive digital spaces."
}];

export const callPromo_data = {
   title: "We’ll win your heart from the very first moment!",
   text: "We deliver 360° digital promotion for your brand, products, and services.",
   btn_text: "Call us",
}

export const homeServices_data = {
   intro: {
      title: "Services",
      descr: "From idea to impactful and measurable results.",
      text: "Bringing together flawless production, cutting-edge technologies, and thorough performance evaluation."
   },
   services: [{
      id: 1,
      title: "Strategy",
      text: "Create a personalized strategy for your business",
      img: icons.clipboard_list_solid,
   }, {
      id: 2,
      title: "Analysis",
      text: "Develop a standout analysis to guide your business decisions",
      img: icons.chart_line_solid_full,
   }, {
      id: 3,
      title: "Social Networks",
      text: "Shape a tailored approach for your social network presence",
      img: icons.users_solid_full,
   }, {
      id: 4,
      title: "Development",
      text: "Build a one-of-a-kind development process for your business",
      img: icons.code_solid_full,
   }, {
      id: 5,
      title: "Content",
      text: "Create content that truly resonates with your audience",
      img: icons.keyboard_solid_full,
   }, {
      id: 6,
      title: "Design UX",
      text: "Develop a unique and user-friendly design",
      img: icons.comment_dollar_solid_full,
   }, {
      id: 7,
      title: "Targeted advertising",
      text: "Create a distinctive advertising strategy for your audience",
      img: icons.bullseye_solid_full
   }, {
      id: 8,
      title: "Product",
      text: "Shape a groundbreaking product to drive your success",
      img: icons.bullhorn_solid_full,
   }]
}

export const projectItems_data = [{
   id: 1,
   title: "Sapphire Boutique",
   img: store_img,
}, {
   id: 2,
   title: "Residential Construction",
   img: house_img,
}, {
   id: 3,
   title: "Coffee Shop",
   img: coffeeshop_img,
}, {
   id: 4,
   title: "Exclusive Tours",
   img: hotel_img,
}]

export const team_data = {
   title: "Meet Our Team",
   text: ["Our team is our greatest asset. We have worked hard to assemble a group of experts whose skills perfectly complement one another.",
      "While our team members come from diverse backgrounds, we’re united by a shared passion for excellence. We believe that true professionalism comes from continuous growth, which is why we’re always looking for ways to improve in everything we do."],
   img: team_img,
   btn_text: "Watch video",
}

export const footer_data = {
   text: "© 2025 Nova Digital. All rights reserved.",
   promo_text: [
      { id: 1, text: "Tell us about your project." },
      { id: 2, text: "Contact us today." }
   ],
   social: [
      { id: 1, name: "WhatsApp", icon: faWhatsapp, url: "https://www.whatsapp.com" },
      { id: 2, name: "LinkedIn", icon: faLinkedinIn, url: "https://www.linkedin.com" },
      { id: 3, name: "X", icon: faXTwitter, url: "https://twitter.com" },
      { id: 4, name: "Pinterest", icon: faPinterestP, url: "https://www.pinterest.com" },
   ],
   footer_bottom: {
      contacts: {
         email: "info@novadigital.com",
         phone: "+1 (555) 123-4567",
      },
      address: ["123 Montgomery St", "Suite 100", "San Francisco", "CA 94105"],
      help: [
         { id: 1, name: "Connect with Us", url: "contacts" },
         { id: 2, name: "What is Digital?", url: "about" },
         { id: 3, name: "Pricing", url: "pricing" }
      ],
      menu: [
         { id: 1, name: "Our projects", url: "projects" },
         { id: 2, name: "Team", url: "team" },
         { id: 3, name: "Blog", url: "blog" },
      ],
   }
}

export const news_data = {
   title: "Latest News",
   news: [
      { id: 1, title: "3D in Branding", img: news_3d_img },
      { id: 2, title: "Unique Design Solutions", img: news_design_img },
      { id: 3, title: "Contextual Advertising", img: news_ads_img },
      { id: 4, title: "Outside Perspective", img: news_view_img },
      { id: 5, title: "Visual Graphics", img: news_graphics_img },
      { id: 6, title: "Social Media Advantages", img: news_media_img },
      { id: 7, title: "Corporate Values", img: news_corp_img },
      { id: 8, title: "Sense of Exclusivity", img: news_unique_img },
   ]
}

export const digital_marketing_data = [
   {
      id: 1,
      text: "If you're looking to shape or elevate a company's image, digital marketing is the way to go",
      author: "John Doe"
   },
   {
      id: 2,
      text: "In today's digital age, having a strong online presence is crucial for any business",
      author: "Jane Smith"
   },
   {
      id: 3,
      text: "Effective digital marketing strategies can help you reach a wider audience and drive more sales",
      author: "Alice Johnson"
   },
]