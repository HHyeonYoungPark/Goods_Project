import React from "react";
import "../../css/pages/TableGallary.css";
import { Link } from "react-router-dom";
import dummyImg01 from "../../images/dummyImg01.png";
import dummyImg02 from "../../images/dummyImg02.png";
import dummyImg03 from "../../images/dummyImg03.png";

function TableGallary() {
  const [items, setItems] = useState([]);

  async function getAllItem() {
    await axios.get("http://localhost:4001/main").then((response) => {
      setItems(response.data);
    });
  }

  useEffect(() => {
    getAllItem();
  }, []);

  return (
    <div className="TableGallary-container">
      {items.map((item, key) => {
        return (
          <div className="TableGallary">
            <Link to="#">
              <img
                style={{ width: "100%" }}
                src={item.attach}
                alt={item.attach}
              />
            </Link>
            <h4>
              <Link to="#">{item.itemname}</Link>
            </h4>
            <p className="price">
              <Link to="#">{item.price}</Link>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default TableGallary;
