import React, { useState } from 'react';
import menuItems from './menuItems.json';
import './Navbar.css';

function Navbar() {
  const [dropdown, setDropdown] = useState(null);

  const renderMenu = (items, parentId = null) => {
    const filteredItems = items.filter(item => item.parent === parentId);

    return filteredItems.map(item => (
      <div
        key={item.id}
        className="menu-item-wrapper"
        onMouseEnter={() => setDropdown(item.id)}
        onMouseLeave={() => setDropdown(null)}
      >
        <li className="menu-item">
          <a href={item.url}>{item.label}</a>

          {/* Render submenu */}
          {items.some(subItem => subItem.parent === item.id) && (
            <ul className={`submenu ${dropdown === item.id ? 'show' : ''}`}>
              {renderMenu(items, item.id)}
            </ul>
          )}
        </li>
      </div>
    ));
  };

  return (
    <nav className="navbar">
      <ul className="menu">{renderMenu(menuItems)}</ul>
    </nav>
  );
}

export default Navbar;
