import { Link } from "gatsby"
import React from "react"
import { NavigationWrapper, NavigationItem } from "./styled"

function Navigation({ items, straight }) {
  return (
    <nav>
      <NavigationWrapper>
        {items.map((item, index) => (
          <NavigationItem key={index} straight={straight}>
            {item.external ? (
              <a href={item.link}>{item.name || item.icon}</a>
            ) : (
              <Link to={item.link}>{item.name || item.icon}</Link>
            )}
          </NavigationItem>
        ))}
      </NavigationWrapper>
    </nav>
  )
}

export default Navigation
