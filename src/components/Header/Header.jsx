import './Header.scss';
import { MenuMenu, MenuItem, Input, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <Menu pointing className="menu">
        <MenuItem className="menu__item" as={NavLink} to="/">
          Pokédex
        </MenuItem>

        <MenuItem className="menu__item" as={NavLink} to="/types">
          Types
        </MenuItem>
        <MenuMenu className="menu__menu" position="right">
          <MenuItem className="menu__item">
            <Input
              className="menu__input"
              icon="search"
              placeholder="Search..."
            />
          </MenuItem>
        </MenuMenu>
      </Menu>
    </div>
  );
}
