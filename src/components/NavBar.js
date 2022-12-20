import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  let linkList = links.map(link => {
    return <a href={`#${link}`} key={link}>{link}</a>
  })

  return <nav>{linkList}</nav>;
}

export default NavBar;
