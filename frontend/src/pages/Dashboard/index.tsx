import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Item from "../../components/Item";
import DeleteItemDialog from "../../components/DeleteItemDialog";
import styles from "./styles.module.scss";

// define interface to represent component props

type ItemType = {
  name: string;
  description: string;
  amount: number;
};

//mock data
const data: ItemType[] = [
  { name: "Tomatoes", description: "desc", amount: 2 },
  { name: "Tomatoes", description: "desc", amount: 1 },
  { name: "Tomatoes", description: "desc", amount: 2 },
];

const Dashboard = () => {
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);

  return (
    <>
      {data.length === 0 ? (
        <Card className={styles.cardContainer}>
          <CardContent style={{ textAlign: "center" }}>
            <p className={styles.cardText}>Your shopping list is empty :(</p>
            <Button color="primary" variant="contained">
              Add your first item
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className={styles.itemList}>
          <div className={styles.header}>
            <p className={styles.title}>Your Items</p>
            <Button
              color="primary"
              variant="contained"
              onClick={() => setOpenAddModal(true)}
            >
              Add Item
            </Button>
          </div>
          {data.map((item: ItemType, index: number) => (
            <Item key={index} name={item.name} description={item.description} />
          ))}
        </div>
      )}
      {/* <DeleteItemDialog /> */}
    </>
  );
};

export default Dashboard;
