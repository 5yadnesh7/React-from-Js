import { createElement } from "react";
import Div from "../../atoms/Div";
import Li from "../../atoms/Li";
import Paragraph from "../../atoms/Paragraph";
import Button from "../../atoms/Button";

const keysToComponentMap = {
  div: Div,
  li: Li,
  p: Paragraph,
  button: Button,
};

const stylesMap = (styles) => {
  let mappedStyles = {};
  styles.forEach((style) => {
    mappedStyles[style.name] = style.value;
  });
  return mappedStyles;
};

export const recurssiveComp = (config) => {
  if (typeof keysToComponentMap[config.component] !== "undefined") {
    return createElement(
      keysToComponentMap[config.component],
      {
        id: config.id,
        key: config.id,
        className: config.className ? config.className : null,
        ariaHidden: config.ariaHidden ? config.ariaHidden : null,
        style: config.styles ? stylesMap(config.styles) : null,
      },
      config.children &&
        (typeof config.children === "string"
          ? config.children
          : config.children.map((c) => recurssiveComp(c)))
    );
  }
};
