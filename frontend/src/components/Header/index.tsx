import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";

import styles from "./styles.module.scss";

// define interface to represent component props
interface Props {
  title: String;
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <AppBar position="static" color="secondary">
      <Link to="/">
        <div className={styles.container}>
          <p className={styles.title}>{title}</p>
        </div>
      </Link>
    </AppBar>
  );
};

export default Header;
