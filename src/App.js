import { useState } from 'react';
import Search from './components/Search';
import FoodData from './components/FoodData';
import Header from './components/Header';
import Container from './components/Container';
import InnerContainer from './components/InnerContainer';
import InnerContainer2 from './components/InnerContainer2';
import FoodRecipe from './components/FoodRecipe';

function App() {
  const [Foods, setFoods] = useState([]);
  const [FoodId, setFoodId] = useState("656329");
  return (
    <div className="App">
      <Header/>
      <Search setFoods={setFoods}/>
      <Container>
        <InnerContainer>
          <FoodData Foods={Foods} setFoodId={setFoodId}/>
        </InnerContainer>
        <InnerContainer2>
          <FoodRecipe FoodId={FoodId}/>
        </InnerContainer2>
      </Container>
    </div>
  );
}

export default App;
