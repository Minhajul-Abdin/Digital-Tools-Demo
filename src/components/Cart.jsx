import cart from '../assets/products/cart.png';
import { toast } from 'react-toastify';
const Cart = ({carts, setCarts}) => {
    const handlePayment = () => {
        setCarts([]);
        toast.success("Payment Successful !!")
    }

    const handleDelete = (items) => {
        const filteredArry = carts.filter(c => c.id !== items.id);
        setCarts(filteredArry);
        toast("Removed From Cart");
    }
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)

    return (
        <div className="w-[95%] md:w-[80%] mx-auto my-10 shadow-box p-5 md:p-10 rounded-sm">
            <h1 className="text-2xl text-[#101727] font-bold mb-6">Your Cart</h1>
            {
                carts.length === 0 ? <div className='py-20'>
                    <img className='mx-auto w-50' src={cart}/>
                    <p className='text-center text-3xl text-[#627382]'>Your Cart is Empty</p>
                </div> : <>
                    {
                carts.map((item) => (<div key={item.id}>
                    <div className="flex p-5 mb-4 rounded-sm bg-[#F9FAFC] justify-between">
                        <div className="flex justify-items-start">
                            <div className='shadow-box-img p-4 rounded-full mr-4'><img className='md:w-8 md:h-8 w-15 object-contain' src={item.icon}/></div>
                            <div className="inline">
                                <p className="text-xl font-semibold text-[#101727]">{item.name}</p>
                                <p className="text-[16px] text-[#627382]">${item.price}</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <span onClick={() => handleDelete(item)} className="text-[#FF3980] font-bold cursor-pointer">Remove</span>
                        </div>  
                    </div>

                </div>))
            }

            <div className="flex justify-between my-6">
                <div className="text-[#627382] flex items-center">Total :</div>
                <div className="text-xl font-bold text-[#101727]">${totalPrice}</div>
            </div>

            <div>
                <button onClick={handlePayment} className="btn w-full rounded-full back py-3 text-white">Proceed to Checkout</button>
            </div>
                </>
                
            }
        </div>
    );
};

export default Cart;