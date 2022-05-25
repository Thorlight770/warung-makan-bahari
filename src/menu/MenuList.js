const MenuList = (props) => {
  const { menu, status, deleteDataMenu } = props;

  const handleDelete = (index) => {
    deleteDataMenu(index);
  }

  const handleUpdate = (key) => {
    
  }

  return (
    <>
      <div className="body-content ">
        <button className="btn btn-primary my-4" onClick={() => status("addData")}>New Menu</button>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>Rp.{data.price},-</td>
                  <td>
                    <button className="btn btn-warning">
                      <i className="bi bi-pencil-square" onClick={() => status("updateData")}></i>
                    </button>
                    <button className="btn btn-danger mx-2" onClick={handleDelete}>
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MenuList;
