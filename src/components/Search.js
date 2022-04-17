import React, { useEffect } from "react";

function Search({ data }) {
  const [search, setSearch] = React.useState(null);
  let response = [];
  response =
    data &&
    data.map((element) => {
      if (element.subject.includes(search) === false) {
        return;
      } else {
        return element;
      }
    });
  response && response.filter((elm) => elm !== "undefined");
  console.log(response, "adskh");
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 justify-content-center p-5">
          <input
            placeholder="search "
            className="w-100"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
        {search && data ? (
          <div className="container">
            <div className="row">
              <div className="col-12">
                {response &&
                  response.map((data, key) => (
                    <div key={key}>{data?.subject}</div>
                  ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="d-none"></div>
        )}
      </div>
    </div>
  );
}

export default Search;
