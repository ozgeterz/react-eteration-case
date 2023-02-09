import "../App.css";
import { useEffect, useState } from "react";
import Products from "../components/Products";
import Card from "../components/Card";
import { useSelector } from "react-redux";
import Pagination from "../components/Pagination";
import axios from "axios";
import tickbox from "../svg/tickbox.svg";
import tickboxnone from "../svg/tickboxnone.svg";
import checkmark from "../svg/checkmark.svg";
import checkmarknone from "../svg/checkmarknone.svg";
function Home() {
  const [items, setitems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [carditems, setcarditems] = useState([]);
  let selectcard = useSelector((state) => state.cardclick);
  let card = useSelector((state) => state.addtocard);
  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios.get(
        "https://5fc9346b2af77700165ae514.mockapi.io/products"
      );
      setitems(res.data);
    };
    fetchItems();
    setcarditems(card);
  }, [card, carditems]);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="home">
      <div className="categories">
        <div className="sort">
          <div>
            <h3>
              <img src={checkmark} alt="checkmark"></img>Old to new
            </h3>
            <h3>
              <img src={checkmarknone} alt="checkmarknone"></img>New to old
            </h3>
            <h3>
              <img src={checkmarknone} alt="checkmarknone"></img>Price hight to
              low
            </h3>
            <h3>
              <img src={checkmarknone} alt="checkmarknone"></img>Price low to
              high
            </h3>
          </div>
        </div>
        <div className="brand-filter">
          <div>
            <form>
              <input type="search" placeholder="Search"></input>
            </form>

            <h3>
              <img src={tickbox} alt="tickbox"></img>Tesla
            </h3>
            <h3>
              <img src={tickboxnone} alt="tickboxnone"></img>Polestar
            </h3>
            <h3>
              <img src={tickboxnone} alt="tickboxnone"></img>Rolls Royce
            </h3>
            <h3>
              <img src={tickboxnone} alt="tickboxnone"></img>Smart
            </h3>
          </div>
        </div>
        <div className="model">
          <div>
            <form>
              <input type="search" placeholder="Search"></input>
            </form>
            <h3>
              <img src={tickbox} alt="tickbox"></img>Grand Cherokee
            </h3>
            <h3>
              <img src={tickboxnone} alt="tickboxnone"></img>Durango
            </h3>
            <h3>
              <img src={tickboxnone} alt="tickboxnone"></img>Explorer
            </h3>
          </div>
        </div>
      </div>
      {selectcard ? (
        carditems.length > 0 ? (
          carditems.map((card) => <Card card={card} />)
        ) : (
          <h1 className="emptycard">NO ANY ITEM IN CARD</h1>
        )
      ) : (
        <div className="product-container">
          {items.map((item) => (
            <Products
              items={currentItems}
              key={item.id}
              Product={item.name}
              Price={item.price}
            />
          ))}
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={items.length}
            paginate={paginate}
          />
        </div>
      )}
    </div>
  );
}
export default Home;
