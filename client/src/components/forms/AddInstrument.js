import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/react-hooks";

import { Form, Input, Button, Select } from "antd";

import { v4 as uuidv4 } from "uuid";
import { GET_INSTRUMENTS, ADD_INSTRUMENT } from "../../queries";
const { Option } = Select;
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const AddInstrument = () => {
  const [id] = useState(uuidv4());
  const [addInstrument] = useMutation(ADD_INSTRUMENT);

  const [form] = Form.useForm();
  const [, forceUpdate] = useState();

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = values => {
  const { year, brand, type, price, artistId } = values

  addInstrument({
    variables: {
      id,
      year,
      brand,
      type,
      price,
      artistId

    },
    optimisticResponse: {
      __typename: 'Mutation',
      addInstrument: {
        __typename: 'Instrument',
        id,
      year,
      brand,
      type,
      price,
      artistId

      }
    },
  //   update: (proxy, { data: { addArtist } }) => {
  //     const data = proxy.readQuery({ query: GET_ARTISTS })
  //     proxy.writeQuery({
  //       query: GET_ARTISTS,
  //       data: {
  //         ...data,
  //         artists: [...data.artists, addArtist]
  //       }
  //     })
  //   }
  })
  }

  return (
    <Form
      form={form}
      name="add-instrument-form"
      layout="inline"
      onFinish={onFinish}
      size="medium"
      style={{ marginBottom: "40px", marginTop: "40px" }}
    >
      <Form.Item
        name="year"
        rules={[
          {
            required: true,
            message: "Please input the year of the instrument!",
          },
        ]}
      >
        <Input placeholder="i.e. 1981" />
      </Form.Item>
      <Form.Item
        name="brand"
        rules={[
          {
            required: true,
            message: "Please input the brand of the instrument!",
          },
        ]}
      >
        <Input placeholder="i.e. Yamaha" />
      </Form.Item>
      <Form.Item
        name="type"
        rules={[
          {
            required: true,
            message: "Please input the type of the instrument!",
          },
        ]}
      >
        <Input placeholder="i.e. Acoustic Guitar" />
      </Form.Item>
      <Form.Item
        name="price"
        rules={[
          {
            required: true,
            message: "Please input the price of the instrument!",
          },
        ]}
      >
        <Input placeholder="i.e. $300" />
      </Form.Item>

      <Form.Item
        name="artistId"
        rules={[{ required: true, message: "Please choose the artist!" }]}
      >
        <Select defaultValue="1" style={{ width: 120 }} onChange={handleChange}>
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
          <Option value="4">4</Option>
        </Select>
      </Form.Item>
      <Form.Item shouldUpdate={true}>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            style={{marginLeft:"350px", marginTop:"70px"}}
            disabled={
              !form.isFieldsTouched(true) ||
              form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Add Instrument
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default AddInstrument
