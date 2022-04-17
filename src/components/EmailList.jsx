import React from "react";
import MailBody from "./MailBody";

const EmailList = ({ data }) => {
  let [body, setBody] = React.useState("");

  return (
    <div className="container">
      <div className="row">
        <div className="col-4 overflow-auto ">
          <ul className="list-group   ">
            {data &&
              data.map((res, id) => (
                <li
                  className="list-group-item  align-items-start d-flex  "
                  key={id}
                >
                  <label> UserID:{res.userId}</label>
                  <br />
                  <button
                    onClick={() => setBody(data[id])}
                    className=" stretched-link  btn"
                  >
                    {res.subject}
                  </button>
                </li>
              ))}
          </ul>
        </div>
        <div className="col-8  ">
          {/* <h1>{body.body}</h1> */}
          <MailBody msg={body?.body} />
        </div>
      </div>
    </div>
  );
};

export default EmailList;
