import React, { useState } from "react";
import { InputBase, Link } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.scss";

const Search: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [result, setResult] = useState<string[]>([]);

  const handleChangeValue = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    const newValue = event.target.value;
    setValue(newValue);
    if (newValue === "") {
      setResult([]);
    } else {
      setResult([newValue, newValue + newValue, newValue + newValue + newValue]);
    }
  };

  return (
    <div className="SearchBar">
      <div className="holder">
        <div className="icon-wrapper">
          <SearchIcon />
        </div>
        <InputBase className="input-base" onChange={handleChangeValue} placeholder="Search.." />
      </div>
      {result.length > 0 && (
        <div className="data-result">
          {result.map((val, key) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <Link key={key} className="data-item" href="#" target="_blank" rel="noreferrer">
              {val}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
