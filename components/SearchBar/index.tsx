"use client";

import { useState } from "react";
import { SearchManufacturer } from "../index.module";

const SearchBar = () => {
    const [manufacturer, setManufacterer] = useState("");
    const handleSearch = () => {};

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer
                    manufacturer={manufacturer}
                    setManufacturer={setManufacterer}
                />
            </div>
        </form>
    );
};

export default SearchBar;
