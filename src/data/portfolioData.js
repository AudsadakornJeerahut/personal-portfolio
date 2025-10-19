// src/data/portfolioData.js

// ===== Category List =====
export const categories = ["All", "Web", "Mobile"];

// ===== Import Images =====
import TodoList from '../assets/01.png';
import restaurantReview from '../assets/02.png';
import WeatherApp from '../assets/03.png';

// ===== Projects Data =====
const portfolioData = [
  {
    id: 1,
    title: "Restaurant Review",
    category: "Web",
    description:
      "เว็บไซต์ค้นหาและรีวิวร้านอาหาร",
    image: restaurantReview,
    view: "https://github.com/AudsadakornJeerahut/Restaurant-Review-Website",
  },
  {
    id: 2,
    title: "Weather App",
    category: "Mobile",
    description:
      "เว็บแอปแสดงสภาพอากาศแบบเรียลไทม์ พร้อมระบบพยากรณ์อากาศล่วงหน้า 5 วัน",
    image: WeatherApp,
    view: "https://fiwweatherapp.netlify.app",
  },
  {
    id: 3,
    title: "To-Do-List",
    category: "Mobile",
    description:
      "เว็บไซต์ ช่วยจัดการรายการสิ่งที่ต้องทำ (To-Do) UI เรียบง่าย",
    image: TodoList,
    view: "https://github.com/AudsadakornJeerahut/react-workshop#",
  },
];

export default portfolioData;


// ===== Contact Information =====
export const contactInfo = {
  email: "jeerahutaudsadakorn2003@gmail.com",
  phone: "087-192-4106",
  address: "lamphun, Thailand",
};

// ===== Social Media Links =====
export const socialLinks = [
  { name: "GitHub", url: "https://github.com/AudsadakornJeerahut"},
];