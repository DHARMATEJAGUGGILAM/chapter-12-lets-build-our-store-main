import {Component} from 'react'; /* One way to import named import - Component from React library */
class About extends Component {
  constructor(props) {
    super(props);
    console.log("About(parent) - constructor");
  }

  componentDidUpdate() {
    console.log("About Component - componentDidUpdate")
  }

  componentWillUnmount() {
    console.log("About Component - componentWillUnmount")
  }

  render() {
    console.log("About(parent) - render");

    return (
      <div className="container flex justify-around mob:flex-col">
        <div className="card-container w-[30%] h-2/4 mob:w-auto">
          <h1 className="card-container-title">About Me</h1>
          <h1>here I am building a food willa application where a coustomer can order his disered food </h1>
        </div>
        <div className="card-container w-[70%] mob:w-auto">
          <h1 className="card-container-title">About this project</h1>
        </div>  
      </div>
    )
  }
}

export default About;