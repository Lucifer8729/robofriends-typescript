import * as React from "react";
import Card from "./Card";
import { Robot } from "../containers/App";

const CardList = ({ robots }: { robots: Array<Robot> }) => {
  return (
    <div>
      {robots.map((user: Robot, i: number) => {
        return (
          <Card key={i} id={user.id} name={user.name} email={user.email} />
        );
      })}
    </div>
  );
};

export default CardList;
