import './App.scss';
import { CategoryItem } from './component/category-item/category-item';
import Filter from './component/filter';
import Title from './component/title';

function App() {
  const categories = [
    "Phim hành động mới cập nhật",
    "Phim bộ mới cập nhật",
    "Phim lẻ mới cập nhật"
  ];

  return (
    <div className="home ">
      <div className='header'>

        <Title />

      </div>
      <div className='navbar'>
        {/* props của component cũng giống như param của function  */}
        {/* <Navbar variableA="TRUMAAA"/>  */}

        <div className='filter'>
          <Filter />
        </div>

      </div>
          {/* em về cái bnha a, dượng đóng cưa a, push code lên ik */}
      <div className='category-list'>
        {
          categories.map((value) => (<CategoryItem key={value} name={value} />))
        }
      </div>

    </div>
  );
}

export default App;
