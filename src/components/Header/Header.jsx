import './Header.scss';
import { MenuMenu, MenuItem, Input, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <Menu pointing>
        <MenuItem as={NavLink} to="/">
          Pokédex
        </MenuItem>

        <MenuItem as={NavLink} to="/types">
          Types
        </MenuItem>
        <MenuMenu position="right">
          <MenuItem>
            <Input icon="search" placeholder="Search..." />
          </MenuItem>
        </MenuMenu>
      </Menu>
    </div>
  );
}
