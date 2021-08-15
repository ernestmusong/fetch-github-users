import react, {useState, useEffect} from 'react';
const api = "https://api.github.com/users";


function App() {
const [users, setUsers] = useState([]);
const getUsers = async() => {
    const res = await fetch(api);
    const users = await res.json();
    setUsers(users);
    console.log(users);
  }
  useEffect(() => {
   getUsers();
    // return () => {
    //   cleanup
    // }
  }, [])
  return (
   <div className="container">
       <h3 style={{textAlign:"center", color:"blue", marginTop:"4rem", marginBottom: "4rem"}}>Github Users</h3>
        <div className="row">
         {
           users.map(user => {
             const {id, login, avatar_url, html_url} = user;
             return (
            <div key = {id} className="col-sm-6 col-lg-3 py-4" style={{display:"flex", justifyContent:"spaceBetween", alignItems:"center"}}>
            <div style={{width:"50px"}}>
              <img  src={avatar_url} alt="person" style={{maxWidth:"100%", borderRadius:"50%"}}/>
            </div>
               <div className="px-4">
                 <h6>{login}</h6>
                 <a href={html_url}>See Profile</a>
               </div>
          </div>
             )
           })
         }
        </div>
    </div>
  );
}

export default App;
