// import logo from './logo.svg';
import {Component} from 'react';
import './App.css';

class WhoAmI extends Component{
  constructor(props){
    super(props);
    this.state = {
      years: 27,
      position: ''
    }
    
  }
  increase = () => {
    this.setState(state => 
      ({
        years: state.years + 1
      })
    )
  }
  commitInputChanges = (e) => {
    this.setState({position: e.target.value})
  }
  render(){
    const {name, surname, link} = this.props;
    return (
      <div>
        <h1>My name is {name}, surame - {surname}, age - {this.state.years}, должность - {this.state.position}</h1>
        <a href={link}>My profile</a>
        <button onClick={this.increase}>+++</button>
        <form>
          <span>Введите должность</span>
          <input type="text" onInput={this.commitInputChanges}/>
        </form>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <WhoAmI name='John' surname='Smith' link='https://vk.com/'/>
      <WhoAmI name='John' surname='Shepard' link='https://vk.com/'/>
      <WhoAmI name='John' surname='Smith' link='https://vk.com/'/>
    </div>
  );
}

export default App;
