import Header from "../../Header/Header";
import NavBar from "../../NavBar/NavBar"

import bgImage from '../../assets/Rectangle 1.png'

const Home = () => {
    return (
        <div className="px-32 pt-10 h-[100vh]  bg-blend-color" style={
            {
              backgroundImage : `URL('${bgImage}')` ,
              backgroundSize : 'cover',
              backgroundRepeat : 'no-repeat',
              backgroundColor : 'rgba(0, 0, 0, 0.70)',
              
            }
          }>
            <NavBar></NavBar>
          <div className="flex items-center h-[90vh]">
          <Header></Header>
          </div>
          
  
           
          </div>
    );
};

export default Home;