"use client";

const unis = [
  {
    tag: "Nicosia, Cyprus",
    name: "American College Cyprus",
    tagline: "Mediterranean Excellence",
    desc: "Founded 1975. Business, IT, Hospitality, Accounting and Tourism programs. Internationally recognised qualifications taught in English.",
    img: "/cyprus.jpg",
    programs: [
      { name: "Business Administration", url: "https://www.ac.ac.cy/academic-programs/" },
      { name: "Hotel and Hospitality Management", url: "https://www.ac.ac.cy/academic-programs/" },
      { name: "Computer Science and IT", url: "https://www.ac.ac.cy/academic-programs/" },
      { name: "Accounting and Finance", url: "https://www.ac.ac.cy/academic-programs/" },
      { name: "Travel and Tourism Management", url: "https://www.ac.ac.cy/academic-programs/" },
    ],
    applyUrl: "https://www.ac.ac.cy/admissions/",
  },
  {
    tag: "Dunedin, New Zealand",
    name: "University of Otago",
    tagline: "New Zealand's Finest",
    desc: "NZ's first university, est. 1869. Ranked top 1% globally. 200+ programmes across Health Sciences, Commerce, Law, Humanities and Science.",
    img: "/otago.jpg",
    programs: [
      { name: "Medicine and Health Sciences", url: "https://www.otago.ac.nz/healthsciences" },
      { name: "Commerce and Business", url: "https://www.otago.ac.nz/commerce" },
      { name: "Law", url: "https://www.otago.ac.nz/law" },
      { name: "Science", url: "https://www.otago.ac.nz/sciences" },
      { name: "Humanities", url: "https://www.otago.ac.nz/humanities" },
    ],
    applyUrl: "https://www.otago.ac.nz/international/future-students",
  },
  {
    tag: "Auckland, New Zealand",
    name: "AIS St Helens",
    tagline: "Business and Hospitality Leadership",
    desc: "Est. 1990. NZ's largest private degree-granting institute. MBA, Business, IT, Tourism and Hospitality. 3 semesters per year for faster completion.",
    img: "/ais.jpg",
    programs: [
      { name: "MBA", url: "https://www.ais.ac.nz/programmes/postgraduate/master-of-business-administration/" },
      { name: "Business Administration", url: "https://www.ais.ac.nz/programmes/" },
      { name: "Information Technology", url: "https://www.ais.ac.nz/programmes/" },
      { name: "Tourism Management", url: "https://www.ais.ac.nz/programmes/" },
      { name: "Hospitality Management", url: "https://www.ais.ac.nz/programmes/" },
    ],
    applyUrl: "https://www.ais.ac.nz/admissions/",
  },
];

export default function Universities() {
  return (
    <>
      <style>{`
        #universities { padding: 5rem 2rem; }
        .unis-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 2px; background: rgba(200,169,110,0.15); }
        .uni-card { position: relative; background: #0c0c0c; overflow: hidden; }
        .uni-img { height: 280px; position: relative; overflow: hidden; }
        .uni-img-bg { position: absolute; inset: 0; background-size: cover; background-position: center; transition: transform 0.8s ease; }
        .uni-card:hover .uni-im