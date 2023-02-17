import "../App.css";
import { useEffect, useState } from "react";
import Products from "../components/Products";
import Card from "../components/Card";
import { useSelector } from "react-redux";
import Pagination from "../components/Pagination";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [cardItems, setCardItems] = useState([]);
  let selectCard = useSelector((state) => state.cardClick);
  let card = useSelector((state) => state.addToCard);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios.get(
        "https://5fc9346b2af77700165ae514.mockapi.io/products"
      );
      setProducts(res.data);
    };
    fetchItems();
    setCardItems(card);
  }, [card, cardItems]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="home">
      <div className="categories">
        <div className="filter">
          <div>
            <h3>
              <input type="checkbox" />
              Old to new
            </h3>
            <h3>
              <input type="checkbox" />
              New to old
            </h3>
            <h3>
              <input type="checkbox" />
              Price hight to low
            </h3>
            <h3>
              <input type="checkbox" />
              Price low to high
            </h3>
          </div>
        </div>
        <div className="filter">
          <div >
            <form>
              <input type="search" placeholder="Search"></input>
            </form>

            <h3>
              <input type="checkbox" />
              Tesla
            </h3>
            <h3>
              <input type="checkbox" />
              Polestar
            </h3>
            <h3>
              <input type="checkbox" />
              Rolls Royce
            </h3>
            <h3>
              <input type="checkbox" />
              Smart
            </h3>
          </div>
        </div>
        <div className="filter">
          <div>
            <form>
              <input type="search" placeholder="Search"></input>
            </form>
            <h3>
              <input type="checkbox" />
              Grand Cherokee
            </h3>
            <h3>
              <input type="checkbox" />
              Durango
            </h3>
            <h3>
              <input type="checkbox" />
              Explorer
            </h3>
          </div>
        </div>
      </div>

      {selectCard ? (
        cardItems.length > 0 ? (
          cardItems.map((card) => <Card card={card} key={card.id} />)
        ) : (
          <h1 className="emptycard">NO ANY ITEM IN CARD</h1>
        )
      ) : (
        <div>
          {products.map((product) => (
            <Products products={currentItems} key={product.id} />
          ))}
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={products.length}
            paginate={paginate}
          />
        </div>
      )}
    </div>
  );
}
export default Home;
