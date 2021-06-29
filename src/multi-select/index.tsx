import { css } from "goober";
import React from "react";

import { ISelectProps } from "../lib/interfaces";
import SelectPanel from "../select-panel";
import Dropdown from "./dropdown";
import DropdownHeader from "./header";

const MultiSelectBox = css({
  "--rmscPrimary": "#4285f4",
  "--rmscHover": "#f1f3f5",
  "--rmscBorder": "#ccc",
  "--rmscGray": "#aaa",
  "--rmscBackground": "#fff",
  "--rmscBorderRadius": "4px",
  "--rmscHeight": "38px",

  "*": {
    boxSizing: "border-box",
    transition: "all 0.2s ease",
  },
  ".gray": {
    color: "var(--rmsc-gray)",
  },
});

const MultiSelect = ({
  focusSearchOnOpen = true,
  hasSelectAll = true,
  shouldToggleOnHover = false,
  options,
  value,
  valueRenderer,
  overrideStrings,
  onChange,
  disabled,
  ItemRenderer,
  selectAllLabel,
  isLoading,
  disableSearch,
  filterOptions,
  labelledBy,
}: ISelectProps) => {
  const nvalue = value || [];
  return (
    <div className={`${MultiSelectBox} multi-select`}>
      <Dropdown
        isLoading={isLoading}
        contentComponent={SelectPanel}
        shouldToggleOnHover={shouldToggleOnHover}
        contentProps={{
          ItemRenderer,
          options,
          value: nvalue,
          hasSelectAll,
          selectAllLabel,
          onChange,
          disabled,
          disableSearch,
          focusSearchOnOpen,
          filterOptions,
          overrideStrings,
        }}
        disabled={disabled}
        labelledBy={labelledBy}
      >
        <DropdownHeader
          value={nvalue}
          options={options}
          valueRenderer={valueRenderer}
          overrideStrings={overrideStrings}
        />
      </Dropdown>
    </div>
  );
};

export default MultiSelect;
