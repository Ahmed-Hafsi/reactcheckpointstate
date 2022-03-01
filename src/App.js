import React from "react";
import './App.css';
import Compteur from "./Compteur";

class App extends React.Component {
  state = {
    fullName: 'AHMED HAFSI',
    bio: 'My name is Ahmed . I,m a full stack web developer',
    imgSrc: 'https://www.macapflag.com/blog/wp-content/uploads/2021/05/le-metier-de-developpeur-870x600.jpg',
    profession: 'Web Developer',
    show: false
  }

  handleShow = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.show ? (
          <>
            <h1>{this.state.fullName}</h1>
            <h1>{this.state.bio}</h1>
            <img src={this.state.imgSrc} alt="failed" />
            <h1>{this.state.profession}</h1>
          </>
        ) : (
          <h1>Show the profile</h1>
        )
        }
        <button onClick={this.handleShow}>{!this.state.show ? "show" : "CLOSE"}</button>
        <>
        <h1>Show the count</h1>
        <Compteur />
        </>
      </div>
    );
  }
}

export default App;
