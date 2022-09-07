import React from 'react';
import Button from './components/Button';
import Product from './components/Product';
import Tile from "./components/Tile";
import './App.css';
import handyBag from './assets/bag_1.png';
import stylishBag from './assets/bag_2.png';
import simpleBag from './assets/bag_3.png';
import trendyBag from './assets/bag_4.png';
import brand from './assets/brand.png';
import ourStory from './assets/our_story.png';


function App() {
    return (
      <>
      <h1>Handbags & Purses</h1>

      <nav>
          <Button isDisabled={false} clickHandler={() => console.log("to the collection")} > to the collection </Button>

          <Button isDisabled={false} clickHandler={() => console.log("shop all bags")} > shop all bags </Button>

          <Button isDisabled={true} clickHandler={() => console.log("pre-orders")} > pre-orders </Button>
      </nav>

      <main>
          <Product
              label= "Best seller"
              image={handyBag}
              title="The handy bag"
              price="400,-"
          />

          <Product
              label= "Best seller"
              image={stylishBag}
              alt="stylish bag"
              title="The stylish bag"
              price="250,-"
          />

          <Product
              label= "Best seller"
              image={simpleBag}
              alt="simple bag"
              title="The simple bag"
              price="300,-"
          />

          <Product
              label= "Best seller"
              image={trendyBag}
              alt="trendy bag"
              title="The trendy bag"
              price="150,-"
          />
      </main>

      <footer>
          <Tile
              title="The Brand"
              paragraph="Lorem ipsum"
          />

          <Tile
              img={brand}
              imageDescription="brandLogo"
          />

          <Tile
              img={ourStory}
              imageDescription="story"
          />

          <Tile
              title="Our Story"
              paragraph="Lorem ipsum"
          />
      </footer>
    </>
  );
}

export default App;



