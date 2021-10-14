import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import styles from "./styles.module.scss";
import Box from "@mui/material/Box";
import { DeleteOutline, EditOutlined } from "@material-ui/icons";

// define interface to represent component props
interface Props {
  name?: string;
  description?: string;
}

const Item: React.FC<Props> = ({ name = "", description = "" }) => {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => setChecked(!checked);

  return (
    <Box
      className={styles.container}
      style={{
        background: checked ? "rgba(213, 223, 233, 0.17)" : "#ffffff",
      }}
    >
      <Box className={styles.flexRow}>
        <Checkbox
          color="secondary"
          checked={checked}
          onChange={handleChecked}
        />
        <Box className={styles.content}>
          <p
            className={styles.name}
            style={{
              color: checked ? "#4D81B7" : "#000000",
              textDecoration: checked ? "line-through" : "none",
            }}
          >
            {name}
          </p>
          <p
            className={styles.description}
            style={{
              textDecoration: checked ? "line-through" : "none",
            }}
          >
            {description}
          </p>
        </Box>
      </Box>

      <Box className={styles.flexRow}>
        <Button>
          <EditOutlined />
        </Button>
        <Button>
          <DeleteOutline />
        </Button>
      </Box>
    </Box>
  );
};

export default Item;
