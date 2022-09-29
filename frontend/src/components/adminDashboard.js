import React from 'react' ; 
import { Route , NavLink ,BrowserRouter as Router, Switch , withRouter , Link} from 'react-router-dom' ; 
import { addPlaylist } from './addPlaylist';
import {AddSong} from './addSong';
import { deletePlaylist } from './deletePlaylist';
import { deleteSong, deleteSongs } from './deleteSong';
import { Singers } from './Singers';
import { Song } from './Song';
import '../containers/home.css';
export const Admin_dashboard = ({msg})=>{
    return (<>
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/">
            <span data-feather="file"></span>
              Admin Dashboard</a>
    
  {/* <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/singers">Admin's Dashboard</a> */}
  <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/>
  
  <div className="navbar-nav">
    <div className="nav-item text-nowrap">
      <a className="nav-link px-3" href="#">Search</a>
    </div>
  </div>
  <div className="navbar-nav">
    <div className="nav-item text-nowrap">
      <a className="nav-link px-3" href="http://localhost:3000">Sign out</a>
    </div>
    
  </div>
  
</header>

<div><h1 className="text-center">{msg}</h1></div>

<div className="text-center">
  <div className="row">
    
  <nav className="navbar navbar-expand-lg navbar-light bg-light text-center">
  <div className="container-fluid">
    
    <a className="navbar-brand " href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Add Song </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Delete Song</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Add Playlist</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active  " href="#" tabindex="-1" aria-disabled="true">Delete Playlist</a>
        </li>
      </ul>
    </div>      
    </div>
  </nav>
     
    
         
  <Router>
    <main className="align-center">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        
        {/* <nav  className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"> */}
      {/* <div className="position-sticky pt-3"> */}
      <Switch>
<Route exact path="/"  component={Singers}></Route>
<Route exact path="/singers" component={Singers}></Route>
<Route exact path="/songs/:singerName" component={Song}></Route>
<Route exact path="/addsong" component={AddSong}/>
{/* <Route exact path="/addsong" render = {()=> {return <addSongs/>}}/> */}
<Route exact path="/deletesong" component={deleteSongs}></Route>
<Route exact path="/addplaylist" component={addPlaylist}></Route>
<Route exact path="/deleteplaylist" component={deletePlaylist}></Route>
<Route  render={()=><h1>404 Page Not Found</h1>}></Route>

</Switch>
         
      </div>
    </main>
    </Router>
  </div>
</div>
</>
    );
}



// {/* <Router> */}
// {/* <ul className="nav flex-column">
  
//   <li className="nav-item">

//     <Link className="nav-link" to="/addsong">
//       <span data-feather="file"></span>
//       Add songs
//     </Link>
  
//   </li>
//   <li className="nav-item">

//     <Link className="nav-link" to="/deletesong">
//       <span data-feather="file"></span>
//       Delete songs
//     </Link>
  
//   </li>
//   <li className="nav-item">

//     <Link className="nav-link" to="/addplaylist">
//       <span data-feather="file"></span>
//       Add Playlist
//     </Link>
  
//   </li>
//   <li className="nav-item">

//     <Link className="nav-link" to="/deleteplaylist">
//       <span data-feather="file"></span>
//       Delete Playlist
//     </Link>
  
//   </li>
  
// </ul> */}


// // </Router> 





