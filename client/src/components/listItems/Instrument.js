import React, { useState } from "react";
import { Card, List } from "antd";

import { EditOutlined } from "@ant-design/icons";

const getStyles = () => ({
  card: {
    width: "500px",
  },
});

const Instrument = (props) => {
  const [id] = useState(props.id);
  const [year, setYear] = useState(props.year);
  const [brand, setBrand] = useState(props.brand);
  const [type, setType] = useState(props.type);
  const [price, setPrice] = useState(props.price);
  const [artistId, setId] = useState(props.artistId);
  //const [editMode, setEditMode] = useState(false)
  const styles = getStyles();

  const fullInfo = () => {
    return `${props.year} ${props.brand} ${props.type} `;
  };

  //   const updateStateVariable = (variable, value) => {
  //     switch (variable) {
  //       case 'firstName':
  //         setFirstName(value)
  //         break
  //       case 'lastName':
  //         setLastName(value)
  //         break
  //       default:
  //         break
  //     }
  //};

  //const handleButtonClick = () => setEditMode(!editMode)

  return (
    <List.Item key={props.id}>
      <Card style={styles.card}>{fullInfo()}</Card>
    </List.Item>
  );
};
export default Instrument;
