import React from 'react';

import Card from '../components/Card';
import AppContext from '../context';


function Home({
    items,
    cartItems,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart,
    isLoading
}) {
  const {isItemAdded} = React.useContext(AppContext);

  const renderItems = () => {
    const filteredItems =  items.filter(item=>item.title.toLowerCase().includes(searchValue.toLowerCase()),);
    return (isLoading ? [...Array(12)] :filteredItems
    ).map((item, index)=>(
      <Card 
      key={index}
      onFavorite={onAddToFavorite}
      onPlus={(obj) => {onAddToCart(obj)}}
      added={isItemAdded(item && item.id)}
      {...item}
      loading={isLoading}
      />
    ));
  };

    return (
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
        {renderItems()}

      </div>

    </div>
    )
}

export default Home;