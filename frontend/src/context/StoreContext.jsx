import {createContext,useState,useEffect} from "react";
export const StoreContext = createContext(null);
import axios from "axios"
const StoreContextProvider = (props) => {
    const [cartItems,setCartItems] = useState({});
    const url = "https://online-food-ordering-system-1km0.onrender.com"
    const [token,setToken] = useState("");
    const [food_list,setFoodList] = useState([]);
    const addToCart = async (itemId) =>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=> ({...prev,[itemId]:prev[itemId]+1}))
        }
        // const storedToken = localStorage.getItem("token");
        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
    }
    const removeFromCart = async (itemId) => {
        setCartItems((prev)=> ({...prev,[itemId]:prev[itemId]-1}));
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}});
        }
    }
const getTotalCartAmount = () => {
    let totalAmount = 0;

    console.log("Food List:", food_list);
    console.log("Cart Items:", cartItems);

    for (const item in cartItems) {
        if (cartItems[item] > 0) {

            let itemInfo = food_list.find(
                (product) => product._id === item
            );

            console.log("Searching:", item);
            console.log("Found:", itemInfo);

            if (itemInfo) {
                totalAmount += itemInfo.price * cartItems[item];
            } else {
                console.log("❌ Product not found:", item);
            }
        }
    }

    return totalAmount;
}
    const fetchFoodList = async () => {
        const response = await axios.get(url + "/api/food/list");
        setFoodList(response.data.data)
    }
    const loadCartData = async(token)=> {
        const response = await axios.post(url+"/api/cart/get",{},{headers:{token}});
        setCartItems(response.data.cartData);
    }
    useEffect(()=>{
      async function loadData(){
        await fetchFoodList();
        if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"));
            await loadCartData(localStorage.getItem("token"));
        }
      }
      loadData();
    },[])
    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    };
    return (
        <StoreContext.Provider value ={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}
export default StoreContextProvider;