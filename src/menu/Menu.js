import 'animate.css';

const Menu = () => {
  return (
    <>
      <div className="header d-flex justify-content-between">
        <h1>Menu</h1>
        <form className="d-flex align-items-center">
          <i class="bi bi-bell mx-3"></i>
          <input className="search form-control" placeholder="Search"></input>
        </form>
      </div>
      <hr />
      <div className="body-content ">
        <button className="btn btn-primary my-4">New Menu</button>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>
                <button className="btn btn-warning">
                <i class="bi bi-pencil-square"></i>
                </button>
                <button className="btn btn-danger mx-2">
                <i class="bi bi-trash"></i>
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Menu;
