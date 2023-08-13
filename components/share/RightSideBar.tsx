import React from "react";

const RightSideBar = () => {
  return (
    <section className="custom-scrollbar rightsidebar">
      <div className=" flex flex-1 flex-col justify-start">
        <h3 className="text-heading4-medium text-light-1"> comunidades</h3>
      </div>{" "}
      <div className=" flex flex-1 flex-col justify-start">
        <h3 className="text-heading4-medium text-light-1"> usuarios</h3>
      </div>
    </section>
  );
};

export default RightSideBar;
