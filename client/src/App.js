import React, { useState, useEffect } from 'react';
import NewsList from './sections/main/NewsList';
import Footer from './sections/Footer/Footer'; 
import Header from './sections/Header/Header';
import Topnews from './sections/main/Topnews';
import Menu from './sections/Menu/Menu';
import Showbookmarks from './User/Bookmarks';
import UserProfile from './User/profile';


const App = () => {

  const [endpnt, setendpoint] = useState('category/general');
  const [crntcontainer , setcontainer] = useState('main');
  const [userData, setUserData] = useState({ fullName: "", email: "", bookmarks: [] });
  const fetchUserData = () => {
    const token = localStorage.getItem("token");
  
    if (token) {
      fetch('http://localhost:5000/auth/protected', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Authentication failed');
        })
        .then((data) => {
          setUserData({
            fullName: data.fullName,
            email: data.email,
            bookmarks: data.bookmarks,
          });
        })
        .catch((error) => console.error(error));
    }
  };
  useEffect(() => {
    fetchUserData();
  }, [userData]);
  
  
  return (
    <main>
    <div className='container'>
       <Header setedpt={setendpoint} setcontainer = {setcontainer} fullname= {userData.fullName} onLoginSuccess={() =>fetchUserData()}/>
      {crntcontainer === 'main' ? (
        <div >
          <Menu setedpt={setendpoint}/>
          <Topnews endpoint={endpnt}/>
          <NewsList endpoint={endpnt}/>
        </div>
      ) : (

        <div>
          {crntcontainer==='profile'&&(<UserProfile fullName = {userData.fullName} email = {userData.email} setcontainer = {setcontainer}/>)}
          {crntcontainer==='bookmarks'&&(<Showbookmarks bookmarks = {userData.bookmarks} setcontainer = {setcontainer}/>)}
        </div>
      )}
    </div>
    <Footer/>
    </main>
  );
};

export default App;
