import React from "react";
import Select from "react-dropdown-select";
import { SetterOrUpdater } from "recoil";

import { Weight } from "../../lib";
import "./StyleSelect.css";

interface StyleSelectProps {
  value: Weight;
  setter: SetterOrUpdater<Weight>;
}

type WeightOption = { key: string; value: Weight };

const options: WeightOption[] = [
  {
    key: "Thin",
    value: "thin",
  },
  {
    key: "Light",
    value: "light",
  },
  {
    key: "Regular",
    value: "regular",
  },
  {
    key: "Bold",
    value: "bold",
  },
  {
    key: "Fill",
    value: "fill",
  },
  {
    key: "Duotone",
    value: "duotone",
  },
];

const StyleSelect: React.FC<StyleSelectProps> = ({ value, setter }) => {
  const handleStyleChange = (values: WeightOption[]) =>
    setter(values[0].value as Weight);

  return (
    <Select
      options={options}
      values={[{ key: value.replace(/^\w/, (c) => c.toUpperCase()), value }]}
      searchable={false}
      labelField="key"
      onChange={handleStyleChange}
      itemRenderer={({
        item,
        itemIndex,
        state: { cursor, values },
        methods,
      }) => (
        <span
          role="option"
          aria-selected={item.key === values[0].key}
          className={`react-dropdown-select-item ${
            itemIndex === cursor ? "react-dropdown-select-item-active" : ""
          }`}
          onClick={() => methods.addItem(item)}
        >
          {item.key}
        </span>
      )}
      contentRenderer={({ state: { values } }) => (
        <div className="react-dropdown-select-content">{values[0].key}</div>
      )}
    />
  );
};

export default StyleSelect;
