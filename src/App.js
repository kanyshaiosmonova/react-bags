/* eslint-disable array-callback-return */
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  {
    title : 'Мужские Кроссовки Nike Blazer Mid Suede',
    price :  12999,
    imageUrl : '/img/sneakers/sneaker1.svg',
  },
  {
    title : 'Мужские Кроссовки Nike Air Max 270',
    price : 12999,
    imageUrl : '/img/sneakers/sneaker2.svg',
  },
  {
    title : 'Мужские Кроссовки Nike Blazer Mid Suede',
    price : 8499,
    imageUrl : '/img/sneakers/sneaker3.svg',
  },
  {
    title : 'Кроссовки Puma X Aka Boku Future Rider',
    price : 8999,
    imageUrl : '/img/sneakers/sneaker4.svg',
  },

]

function App() {
  return (
    <div className="wrapper clear "> 
    <Drawer />
    <Header />
    
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1>Все кроссовки</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="search svg" />
          <input placeholder="Поиск ..."/> 
        </div>
      </div>
      
      <div className="d-flex">
        {arr.map((obj)=>(
          <Card 
          title={obj.title}
          price={obj.price}
          imageUrl={obj.imageUrl}
          onClick={()=>console.log(obj)}
          />
        ))}

      </div>

    </div>
    </div>
    
  );
}


export default App;
