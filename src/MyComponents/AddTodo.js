import React, { useState } from "react";

const AddTodo = (props) => {
  const [sno, setSno] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault(); //Page does not reload
    
      props.addTodo(sno, title, desc);
      setSno("");
      setTitle("");
      setDesc("");
    
  };
  return (
    <div className="container my-3">
      <h3>Add Some Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="sno" className="form-label">
            Sno
          </label>
          <input required
            type="Snumber"
            value={sno}
            onChange={(e) => {
              setSno(e.target.value);
            }}
            className="form-control"
            id="exampleInputSno"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Enter Title
          </label>
          <input required
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Enter Description
          </label>
          <input required
            type="Text"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            className="form-control"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add Todo
        </button>
        <br />
        <br />
      </form>
    </div>
  );
};

export default AddTodo;
