import React, {
  SelectHTMLAttributes,
  DetailedHTMLProps,
  ChangeEvent,
  useState,
} from "react";
import s from "./SuperSelect.module.css";

type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: { id: number; value: string }[];
  onChangeOption?: (option: number) => void;
};

const SuperSelect: React.FC<SuperSelectPropsType> = ({
  options,
  className,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const mappedOptions: any[] = options
    ? options.map((o) => (
        <option
          id={"hw7-option-" + o.id}
          className={s.option}
          key={o.id}
          value={o.id}
          label={o.value}
        >
          {o.value}
        </option>
      ))
    : []; // map options with key

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    onChangeOption && onChangeOption(+e.currentTarget.value);
    onChange && onChange(e);
    // делают студенты
  };

  const finalSelectClassName = s.select + (className ? " " + className : "");

  return (
    <select
      className={finalSelectClassName}
      onChange={onChangeCallback}
      {...restProps}
    >
      {mappedOptions}
    </select>
  );
};

export default SuperSelect;
