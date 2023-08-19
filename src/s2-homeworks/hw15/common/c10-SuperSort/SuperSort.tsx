import React from "react";
 import downArrow from "../../../../assets/black-arrow.svg";
 import BlackArrow from "../../../../assets/BlackArrow";
 import GrayArrow from "../../../../assets/GrayArrow";

 // добавить в проект иконки и импортировать
 const downIcon = "";
 const upIcon = "[/\\]";
 const noneIcon = "[--]";

 export type SuperSortPropsType = {
   id?: string;
   sort: string;
   value: string;
   onChange: (newSort: string) => void;
 };

 export const pureChange = (sort: string, down: string, up: string) => {
   // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
   return up; // исправить
 };

 const SuperSort: React.FC<SuperSortPropsType> = ({
   sort,
   value,
   onChange,
   id = "hw15",
 }) => {
   const up = "0" + value;

   const down = "1" + value;

   const onChangeCallback = () => {
     onChange(value);
   };

   const icon = sort === down ? downIcon : sort === up ? upIcon : noneIcon;
   const iconRender =
     sort === down ? (
       <GrayArrow fillColor="black" rotate={180} />
     ) : sort === up ? (
       <GrayArrow fillColor="black" />
     ) : (
       <>
         <GrayArrow fillColor="#ADABAC" rotate={180} />
         <GrayArrow fillColor="#ADABAC" />
       </>
     );

   return (
     <span
       id={id + "-sort-" + value}
       onClick={onChangeCallback}
       style={{
         padding: "",
         cursor: "pointer",
         minHeight: "20px",
         display: "flex",
         alignItems: "center",
       }}
     >
       <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
         {iconRender}
       </div>

       {/*сделать иконку*/}
       {/*<img*/}
       {/*    id={id + '-icon-' + sort}*/}
       {/*    src={icon}*/}
       {/*/>*/}
       {/*а это убрать*/}
     </span>
   );
 };

export default SuperSort;
