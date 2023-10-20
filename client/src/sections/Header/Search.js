import React ,{ useState } from "react";

const Search = (props) => {
    const [query, setSearch] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    function handleClick(event) {
      event.preventDefault();
      props.findsearch(`search/${query}`);
      setSearch("");
    }

    return (
      <div>
        <form className="d-flex" role="search">
          <input type="search" className="form-control" placeholder="Search" aria-label="Search" onChange={handleChange} value={query} />
          <button className="btn btn-secondary btn-sm" type="submit" onClick={handleClick}>
            Search
          </button>
        </form>
      </div>
    );
};

export default Search;