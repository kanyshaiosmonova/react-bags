/* eslint-disable no-unused-vars */
import React from 'react';
import {Route,Routes} from 'react-router-dom';
import axios from 'axios';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const[items, setItems]  = React.useState([]);
  const[favorites, setFavorites]  = React.useState([]);
  const[searchValue, setSearchValue]  = React.useState('');
  const[cartOpened, setCartOpened] = React.useState(false);
  const[cartItems, setCartItems]  = React.useState([

    {"title":"Мужские Кроссовки Nike Blazer Mid Suede",
    "price":12999,
    "imageUrl":"/img/sneakers/sneaker1.svg"},

    {"title":"Мужские Кроссовки Nike Air Max 270",
    "price":12999,
    "imageUrl":"/img/sneakers/sneaker2.svg"},]);

  React.useEffect(() => {
    axios.get('https://632c1b791aabd83739934541.mockapi.io/items').then(res => {
      setItems(res.data);
    });
    axios.get('https://632c1b791aabd83739934541.mockapi.io/cart').then(res => {
      setCartItems(res.data);
    });
  },[]);

  const onAddToCart = (obj) => {
    axios.post('https://632c1b791aabd83739934541.mockapi.io/cart', obj);
    setCartItems(prev => [...prev, obj]);
  };
  const onChangeSearchInput = (event) => {
   setSearchValue(event.target.value);
  }
  const onRemoveItem = (id) => {
    axios.delete(`https://632c1b791aabd83739934541.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
  }
  const onAddToFavorite = (obj) => {
    axios.post('https://632c1b791aabd83739934541.mockapi.io/favorites', obj);
    setFavorites(prev => [...prev, obj]);
  };

  return (
    <div className="wrapper clear "> 
    {cartOpened && <Drawer items={cartItems} onClose={()=>setCartOpened(false)} onRemove={onRemoveItem}/>}
    <Routes>
    <Route path="/favorites" exact>
      <Header onClickCart={()=>setCartOpened(true)}/>
    </Route>
    </Routes>
  

    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1>{searchValue ? `Поиск по запросу : ${searchValue}` : 'Все кроссовки'}</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="search svg" />
          {searchValue && (
          <img
            onClick={() => setSearchValue('')} 
            className="clear cu-p" 
            src="/img/btn-remove.svg" 
            alt="clear" />
            )}
          <input 
            onChange={onChangeSearchInput} 
            value={searchValue} 
            placeholder="Поиск ..."/> 
        </div>
      </div>
      
      <div className="d-flex flex-wrap">
        {items.filter(item=>item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index)=>(
          <Card 
          key={index}
          title={item.title}
          price={item.price}
          imageUrl={item.imageUrl}
          onFavorite={onAddToFavorite}
          onPlus={(obj) => {onAddToCart(obj)}}
          />
        ))}

      </div>

    </div>
    </div>
    
  );
}


export default App;
