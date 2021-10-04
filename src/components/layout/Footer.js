import React from "react";

const footer = () => {
  return (
    <footer className='footer'>
      <div
        className='text-center p-3'
        style={{ background: "rbga(0,0,0,0.2)" }}
      >
        React frontend app using itbook.store api (api.itbook.store){" "}
        <span style={{ float: "right" }}>
          ernestit-bookstore.netlify.app &copy; {new Date().getFullYear()}{" "}
        </span>
      </div>
    </footer>
  );
};

export default footer;
