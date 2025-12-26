import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function Shopcart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Peace Lily', price: 150, image: 'assets/images/shop/plants/peace-lily-l.webp', quantity: 1, checked: true },
    { id: 2, name: 'Aglonema Plant', price: 150, image: 'assets/images/shop/plants/aglonema.webp', quantity: 1, checked: true },
    { id: 3, name: 'Jade Mini Plant', price: 150, image: 'assets/images/shop/plants/jade-mini.webp', quantity: 1, checked: true },
    { id: 4, name: 'Monstera Deliciosa Plant', price: 150, image: 'assets/images/shop/plants/monstera-deliciosa.webp', quantity: 1, checked: true },
    { id: 5, name: 'Anthurium Red Plant', price: 150, image: 'assets/images/shop/plants/anthurium-red.webp', quantity: 1, checked: true },
    { id: 6, name: 'Peace Lily', price: 150, image: 'assets/images/shop/plants/peace-lily-l.webp', quantity: 1, checked: true },
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(items => {
      const item = items.find(i => i.id === id);
      if (item.quantity === 1 && change === -1) {
        return items.filter(i => i.id !== id);
      }
      return items.map(i =>
        i.id === id ? { ...i, quantity: i.quantity + change } : i
      );
    });
  };

  const totalPrice = cartItems
    .filter(item => item.checked)
    .reduce((sum, item) => sum + item.price * item.quantity, 0);

  const toggleChecked = (id) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <>
      <SEO
        title="Shopping Cart"
        description="Review your shopping cart and proceed to checkout. Buy quality plants and garden accessories from Meri Bagiya."
        keywords="shopping cart, plants, garden accessories, meri bagiya"
        canonicalUrl="/shop-cart"
      />
      {/* <!-- content begin --> */}
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section className="bg-light pt-20 pb-20 mt75 sm-mt-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <ul className="crumb m-0">
                  <li><Link to="/">Home</Link></li>
                  <li className="active">Carts</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-100 pb-100">
          <div className="container">
            <div className="row g-4 justify-content-center">
              <div className="col-lg-6 col-md-8 col-12">
                <div className="cart-items">
                  {cartItems.length === 0 ? (
                    <div className="text-center p-4">
                      <p>Your cart is empty</p>
                      <Link to="/shop-all" className="btn-main">Continue Shopping</Link>
                    </div>
                  ) : (
                    <>
                      <div style={{ maxHeight: cartItems.length > 5 ? '400px' : 'none', overflowY: cartItems.length > 5 ? 'auto' : 'visible' }}>
                      {cartItems.map(item => (
                        <div className="de__cart" key={item.id}>
                          <div className="de__cart-item justify-content-between">
                            <div className="d-wrap">
                              <input
                                type="checkbox"
                                id={`item-${item.id}`}
                                name={`item-${item.id}`}
                                className="d-checkbox__input"
                                checked={item.checked}
                                onChange={() => toggleChecked(item.id)}
                              />
                              <label htmlFor={`item-${item.id}`} className="d-checkbox__label align-items-center"></label>
                              <img src={item.image} alt={item.name} />
                              <div className="d-info">
                                <div>
                                  <h4>{item.name}</h4>
                                  <span className="d-price">₹{item.price * item.quantity}</span>
                                </div>
                              </div>
                            </div>

                            <div className="de-number">
                              <span className="d-minus" onClick={() => updateQuantity(item.id, -1)}>-</span>
                              <input type="text" className="no-border no-bg" value={item.quantity} readOnly />
                              <span className="d-plus" onClick={() => updateQuantity(item.id, 1)}>+</span>
                            </div>
                          </div>
                        </div>
                      ))}
                      </div>
                      <div className="de__cart mt-4 p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                        <div className="d-flex justify-content-between align-items-center">
                          <h4 className="mb-0">Total:</h4>
                          <h3 className="mb-0" style={{ color: '#4a7c59' }}>₹{totalPrice}</h3>
                        </div>
                        <button className="btn-main w-100 mt-3">Proceed to Checkout</button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <!-- content end --> */}
    </>
  );
}

export default Shopcart;
