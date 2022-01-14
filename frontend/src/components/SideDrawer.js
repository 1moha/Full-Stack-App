import './SideDrawer.css';
import {Link} from 'react-router-dom';

// Components
import CartItem from './CartItem';

const SideDrawer = ({show, click}) => {
    const sidedrawerClass = ['sidedrawer'];

    if(show) {
        sidedrawerClass.push("show");
    }

    return <div className={sidedrawerClass.join(" ")}>
        <div className="sidecart">
            <div className="sidecart__left">
                <h2>Shopping cart</h2>

                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div className="sidecart__right">
                <div className="sidecart__info">
                    <p>Subtotal (0) intems</p>
                    <p>$499.99</p>
                </div>
                <div>
                    <button>Proceed to Checkout</button>
                </div>
            </div>
        </div>

        <div className="Exit" onClick={click}>
            <p>Home</p>
        </div>
    </div>;
};

export default SideDrawer;