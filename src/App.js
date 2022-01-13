import './App.css';
import Profile from './profile/profile';

function App() {
 const handleName=(name)=>{alert(name)}
  var prof = {
     fullName :"salma chebbi",
     bio : "Le silence est le cri le plus puissant.",
     profession: "student"
  }
  return (
   <div className='App'>
     <Profile fullName={prof.fullName} bio={prof.bio} profession={prof.profession} handleName={handleName} >
      <div>
        <img src="https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/217508132_1181917518951336_8356422114317356023_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=W381w1-T8M8AX8Z8xhs&_nc_ht=scontent.ftun1-2.fna&oh=00_AT9G0Hxupf6mENaCm93fDcNRwFnkvZUcd3rQmy021CkuKA&oe=61E61643" alt='image'></img>
      </div>
     </Profile>
   </div>
  );
} 


export default App;
