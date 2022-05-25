import { useState } from "react";

const FormMenu = (props) => {
  const { status, addDataMenu, updateDataMenu } = props;
  const [menu, setMenu] = useState({});

  const handleChangeId = (e) => {
    console.log(e.target.value);
    setMenu({ ...menu, id: e.target.value });
  };

  const handleChangeName = (e) => {
    console.log(e.target.value);
    setMenu({ ...menu, name: e.target.value });
  };

  const handleChangePrice = (e) => {
    console.log(e.target.value);
    setMenu({ ...menu, price: e.target.value });
  };

  const handleSubmitBtn = (e) => {
    addDataMenu(menu);
    e.preventDefault();
    status(false);
  };

//   const handleEditBtn = () => {
//     setKey(updateDataMenu);
//     console.log(key);
//   }

  return (
    <>
      <div className="body-content ">
        <form onSubmit={handleSubmitBtn}>
          <label htmlFor="" className="form-label">
            Id
          </label>
          <input
            type="text"
            className="form-control"
            name="id"
            onChange={handleChangeId}
          />
          <label htmlFor="" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={handleChangeName}
          />
          <label htmlFor="" className="form-label">
            Price
          </label>
          <input
            type="text"
            className="form-control"
            name="price"
            onChange={handleChangePrice}
          />
          <div className="d-flex my-3">
              {status === "addData" ? <button className="btn btn-primary">Submit</button> :
                <button className="btn btn-primary">Edit</button>
              }
            <button
              className="btn btn-danger mx-3"
              onClick={() => status(false)}
            >
              Cancle
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default FormMenu;
