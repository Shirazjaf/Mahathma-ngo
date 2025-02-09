import bg from "@/images/backgrounds/footer-bg.jpg";
import footerImage from "@/images/resources/logo-3.png";
import { contact } from "./contactData";

const footerData = {
  ...contact,
  link: "Halpes",
  copyrightYear: new Date().getFullYear(),
  about:
    "Mahathma is an NGO's, dedicated to promote education, community welfare, environmental conservation, create quality jobs and more.",
  bottomLogo: footerImage.src,
  footerBg: bg.src,
  social: [
    {
      id: 1,
      href: "#",
      icon: "fa-twitter"
    },
    {
      id: 2,
      href: "#",
      icon: "fa-facebook-square"
    },
    {
      id: 3,
      href: "#",
      icon: "fa-dribbble"
    },
    {
      id: 4,
      href: "#",
      icon: "fa-instagram"
    }
  ],
  exploreList: [
    {
      id: 1,
      href: "#",
      title: "Donate"
    },
    {
      id: 2,
      href: "#",
      title: "Campaigns"
    },
    {
      id: 3,
      href: "#",
      title: "Fundraise"
    },
    {
      id: 4,
      href: "#",
      title: "Volunteers"
    },
    {
      id: 5,
      href: "#",
      title: "Sponsors"
    },
    {
      id: 6,
      href: "#",
      title: "Fundraising"
    },
    {
      id: 7,
      href: "#",
      title: "Contact"
    },
    {
      id: 8,
      href: "#",
      title: "Help"
    },
    {
      id: 9,
      href: "#",
      title: "Faqs"
    }
  ]
};

export default footerData;
