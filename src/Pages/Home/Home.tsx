
import Productscard from '../../Components/Productscard/Productscard';
import products from '../../Data/Products.json'
import './home.css'
const Home = () => {
    return (
        <div className="cards container">
            {
                products.map((product=>
                <Productscard
                 {...product}
                
                />))
            }
        </div>
    );
};

export default Home;