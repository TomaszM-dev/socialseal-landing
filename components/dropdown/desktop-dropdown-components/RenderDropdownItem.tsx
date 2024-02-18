import { NavbarItemTypes } from "@/types/NavbarTypes";
import { renderInformations } from "./RenderInformations";

const renderDropdownItem = (item: NavbarItemTypes, index: number) => {
  const filteredKeys = Object.keys(item).filter((key) =>
    key.includes("infoContainer")
  );
  const columns = filteredKeys.map((key) => item[key as keyof NavbarItemTypes]);

  return (
    <div
      key={index}
      className="grid grid-cols-4 max-md:grid-cols-2 w-full gap-10 max-md:px-4"
    >
      {/* @ts-ignore */}
      {columns.map((information) => renderInformations(information))}
    </div>
  );
};

export default renderDropdownItem;
