import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const pound = "#"
  const linkElements = links.map(label => {
    return <a key={label} href={pound.concat(label)}>{label}</a>
  })

  return <nav>
    {linkElements}
  </nav>;
}

export default NavBar;
