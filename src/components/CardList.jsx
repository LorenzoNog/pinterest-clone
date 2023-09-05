import React from "react";
import Card from "./Card";
import data from "../data.json";

const CardList = ({ filter }) => {

  const normalData = data.map((item) => {
    return (
      <Card key={item.id} img={item.img} name={item.name} link={item.link} />
    );
  });

  const filterData = data.filter((item) => {
    const {name} = item
      return name.toLowerCase().includes(filter.toLowerCase())
    })
    .map((item) => {
      return (
        <Card
          key={item.id}
          img={item.img}
          name={item.name}
          link={item.link}
        />
      );
    });

  return (
    <section className="columns-6 mt-3 px-[6%] py-3">
      {filter ? filterData : normalData}
    </section>
  );
};

export default CardList;
