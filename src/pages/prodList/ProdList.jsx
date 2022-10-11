import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./prodList.scss";
import Table from "../../components/table/Table";
import { Link } from "react-router-dom";

const ProdList = () => {
  return (
    <div className="prodList">
      <Sidebar />
      <div className="prodListContainer">
        <div className="nav">
          <Navbar />
        </div>
        <div className="TableContainer">
          <div className="TableTitle">
            <div className="Title">Add New Product</div>
            <Link
              to="/products/new"
              style={{ textDecoration: "none" }}
              className="link"
            >
              Add Product
            </Link>
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default ProdList;
