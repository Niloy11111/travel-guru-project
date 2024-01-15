import NavBar from '../NavBar/NavBar';
import bgImage from '../assets/Rectangle 1.png'



const Destination = () => {
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

          <div className='flex justify-between gap-36'>
         
         <div className=' '>
             <h1 className='text-8xl text-[#FFF]'>Cox's bazar</h1>
  
  <p className='text-[white] '>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
             </div>
  
  
           
            <div className='flex gap-7 '>
         
             </div>
             
             
            </div>
  

          



           
          </div>
    );
};

export default Destination;