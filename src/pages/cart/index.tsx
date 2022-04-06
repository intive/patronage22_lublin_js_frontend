import CartContent from "../../components/CartContent";


function CartPage(props:any) {
  return (
    <section>
      <h2>
        Home <span className="location"> {">"} Cart</span>
      </h2>
      <CartContent/>
    </section>
  );
}

export default CartPage;
