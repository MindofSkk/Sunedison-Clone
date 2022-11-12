import { Image, Button } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const navigate=useNavigate()
  return (
    <div className={styles.Navbar}>
      <div className={styles.a}>
        <Image
          src="https://sunedison.in/wp-content/uploads/2019/12/SunEdison-Logo-copy.png"
          width="50%"
        />
      </div>
      <div className={styles.b}>
        <Menu>
          <MenuButton as={Text} rightIcon={<ChevronDownIcon />}>
            - Solar Solutions
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton as={Text} rightIcon={<ChevronDownIcon />}>
            - About{" "}
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Text} rightIcon={<ChevronDownIcon />}>
            - Partners{" "}
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </div>
      <div className={styles.c}>
        <button  className={styles.orgbtn} onClick={()=>navigate("/solar-calculator")}>Solar calculator</button>
      </div>
    </div>
  );
};
