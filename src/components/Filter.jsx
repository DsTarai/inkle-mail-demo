import React, { useState } from "react";
import EmailList from "./EmailList";

const Filter = ({ data }) => {
  let tag = ["draft", "spam", "inbox", "trash", "all"];
  const [defaultTag, setDefaultTag] = useState(
    localStorage.getItem("defaultTag")
  );

  const handleDefaultTag = (tag) => {
    setDefaultTag(tag);
    localStorage.setItem("defaultTag", tag);
  };

  let response = [];
  if (defaultTag === "all" || defaultTag === "") {
    response = data;
  } else {
    response = data && data.filter((elm) => elm.tag === defaultTag);
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <ul className="list-group ">
            {tag &&
              tag.sort().map((tag) => (
                <li className="list-group-item " key={tag}>
                  <button
                    className={defaultTag === tag ? "btn btn-primary" : "btn"}
                    onClick={() => handleDefaultTag(tag)}
                  >
                    {tag}
                  </button>
                </li>
              ))}
          </ul>
        </div>
        <div className="col-md-10">
          <EmailList data={response} />
        </div>
      </div>
    </div>
  );
};

export default Filter;
