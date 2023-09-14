import { BiCartAdd } from 'react-icons/bi';
import { AiFillEye, AiFillHeart } from 'react-icons/ai';
import './productscard.css'
type ProductsItemType = {
    name: string;
    img: string;
    brand: string;
    productCode: string;
    tax: number;
    price: number;
    extraTax: number;
    stock: boolean;
    quantity: number;

}

const Productscard = ({ name, img, brand,price }: ProductsItemType) => {
    return (
        
            <div className="card" >
            
            <img src={img} className="card__image" alt="" />
            <div className="">
                <div className="card__content">
                                     
                        <h3 className="card__title">{name}</h3>
                        <h3 className="card__title">${price}</h3>
                       
            
                </div>
               
            </div>
            <p className="card__overlay">
               <span className='carticon'> <BiCartAdd></BiCartAdd></span>
               <span className='carticon'> <AiFillEye></AiFillEye></span>
               <span className='carticon'> <AiFillHeart></AiFillHeart></span>
               
            </p>
            <span className="card__status">{brand}</span>
            </div>
           
        
       


    );
};

export default Productscard;