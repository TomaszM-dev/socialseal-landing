import { ColumnTypes } from "@/types/NavbarTypes";

export const renderInformations = (information: ColumnTypes) => {
  return (
    <div className="mt-10 flex-1">
      <h3 className="text-[1.5rem] text-secondary-dark font-light border-b-[1px] border-gray-100 pb-4">
        {information.headline}
      </h3>
      {information.paragraph && (
        <p className="mt-8 text-[1rem] font-[200] text-secondary-dark-light">
          {information.paragraph}
        </p>
      )}
      <ul className="mt-8 flex flex-col gap-1">
        {information.info?.map((infoItem, index) => (
          <li
            className="text-[1rem] font-[200] text-secondary-dark-light "
            key={index}
          >
            {infoItem}
          </li>
        ))}
      </ul>
    </div>
  );
};
