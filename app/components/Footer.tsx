import Link from "next/link";
import React from "react";

const Footer = () => {
  const links = [
    {
      title: "ABOUT",
      links: [
        "Papa React",
        "Presents",
        "Zero to full Stack Here",
        "Hundreds of Students",
        "Join Now",
      ],
    },
    {
      title: "COMMUNITY",
      links: [
        "Help Center",
        "Trust & Safety",
        "Say Hi YouTube",
        "Easer Eggs",
        "For The Win",
      ],
    },
    {
      title: "HOST",
      links: [
        "Papa React",
        "Presents",
        "Zero to full Stack Here",
        "Hundreds of Students",
        "Join Now",
      ],
    },
    {
      title: "SUPPORT",
      links: [
        "Help Center",
        "Trust & Safety",
        "Say Hi YouTube",
        "Easer Eggs",
        "For The Win",
      ],
    },
  ];
  return (
    <footer>
      <div
        className="grid grid-cols-1 md:grid-cols-4 gap-y-10 
        p-32 py-14 bg-gray-200"
      >
        {links.map((link, idx) => (
          <div key={idx} className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">{link.title}</h5>
            {link.links.map((item) => (
              <Link href={item} key={item} className="block ">
                {item}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
