import React from "react";
import Button from "../Button";
import globalState from "../../store";

const BUTTONS = [
  {
    label: "AC",
    id: "clear",
  },
  {
    label: "/",
    id: "divide",
  },
  {
    label: "X",
    id: "multiply",
  },
  {
    label: "7",
    id: "seven",
  },
  {
    label: "8",
    id: "eight",
  },
  {
    label: "9",
    id: "nine",
  },
  {
    label: "-",
    id: "subtract",
  },
  {
    label: "4",
    id: "four",
  },
  {
    label: "5",
    id: "five",
  },
  {
    label: "6",
    id: "six",
  },
  {
    label: "+",
    id: "add",
  },
  {
    label: "1",
    id: "one",
  },
  {
    label: "2",
    id: "two",
  },
  {
    label: "3",
    id: "three",
  },
  {
    label: "=",
    id: "equals",
  },
  {
    label: "0",
    id: "zero",
  },
  {
    label: ".",
    id: "decimal",
  },
];

export default function Buttons() {
  const [, dispatch] = React.useContext(globalState);

  const onClick = ({target: {value}}) => dispatch({
    action: value === 'AC' ? 'reset' : value === '=' ? 'calc' : 'enter',
    payload: isNaN(value) ? value : +value
  });

  return (
    <React.Fragment>
      {BUTTONS.map((e) => (
        <Button id={e.id} key={e.id} onClick={onClick} value={e.label === 'X' ? '*' : e.label}>
          {e.label}
        </Button>
      ))}
    </React.Fragment>
  );
}
