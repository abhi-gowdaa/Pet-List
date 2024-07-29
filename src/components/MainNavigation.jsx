
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { AppBar } from "@mui/material";

  function MainNavigation() {
  return (
    <AppBar  sx={{backgroundColor:"pink"}} className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
             
          </li>
          <li>
            
            <NavLink
              to="/petlist"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
             
            >
              Products
            </NavLink>
            
          </li>
          <li>
            <NavLink 
            to={"/searchForm"}
            >
            Search
            </NavLink>
          </li>
        </ul>
      </nav>
    </AppBar>
  );
}

export default MainNavigation;
