import React from "react";

const GenderCheckbox = () => {
  return (
    <div className="flex my-2 gap-2">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Male</span>
          <input
            type="radio"
            className="checkbox border-slate-900"
            name="gender"
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Female</span>
          <input
            type="radio"
            className="checkbox border-slate-900"
            name="gender"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
