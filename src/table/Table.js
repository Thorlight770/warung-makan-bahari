const Table = (props) => {
  const {table} = props;
  return(
    <>
    <div className="header d-flex justify-content-between">
      <h1>Table</h1>
      <form className="d-flex align-items-center">
        <i class="bi bi-bell mx-3"></i>
        <input className="search form-control" placeholder="Search"></input>
      </form>
    </div>
    <hr />
    <div className="body-content ">
      <button className="btn btn-primary my-4">New Table</button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Number</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        {table.map((data, i) => {
              return (
                <tr  key={i}>
                  <td>{data.id}</td>
                  <td>{data.number}</td>
                  {data.status === "Available" ? 
                  <td style={{color : "blue", fontWeight: "bold"}}>{data.status}</td> :
                  <td style={{color : "orange", fontWeight: "bold"}}>{data.status}</td>}
                  <td>
                    <button className="btn btn-warning">
                      <i className="bi bi-pencil-square"></i>
                    </button>
                    <button className="btn btn-danger mx-2">
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
}

export default Table;