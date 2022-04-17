import React from "react";
import EmailList from "./EmailList";

function Search({ data }) {
  const [search, setSearch] = React.useState(null);
  let response = [];
  response =
    data &&
    data.map((element) => {
      if (element.subject.includes(search) === true) {
        return element;
      }
    });
  response && response.filter((elm) => elm !== "undefined");

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 justify-content-center p-5">
          <input
            placeholder="search "
            className="w-100"
            onChange={(e) => setSearch(e.target.value)}
            value={search ? search : ""}
          />
        </div>
        {search && data ? (
          <div className="container">
            <div className="row">
              <div className="col-12">
                <ul className="list-group">
                  {response &&
                    response.map((data, key) => (
                      <li className="list-group-item" key={key}>
                        {data?.subject}
                      </li>
                    ))}
                </ul>
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
