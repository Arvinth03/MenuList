import React,{useState} from 'react';
import Menu from "./Menu";
import Catagory from "./Catagory";
import items from "./data";

const allcatagory=["all",...new Set(items.map((item) =>item.category ))];
//console.log(allcatagory);

const App= () => { 
  const [Menuitems,setMenuItems]=useState(items);
  const [Acatagory,setAcatagory]=useState("");
  const [Catagories,setCatagories]=useState(allcatagory);
  const filterItems= (category) => {
      setAcatagory(category);
      if(category==="all"){
        setMenuItems(items)
        return;
      }

      const newItems=items.filter((item)=> item.category===category);
      setMenuItems(newItems);
      
  }
  return (
   
    <main>
      <section className="Msection">
        <div className="title">
         <h1>Our Menu</h1>
         <div className="design"></div>
        </div>
        <Catagory Catagories={Catagories} Acatagory={Acatagory} filterItems={filterItems} />
        <Menu items={Menuitems}/>
      </section>
    </main>
   
  );
}

export default App;
