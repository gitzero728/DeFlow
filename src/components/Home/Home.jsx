/* src/components/Home/Home.jsx */
import React from "react";
import ComponentA from "./SubComponent/ComponentA.jsx";
import ComponentB from "./SubComponent/ComponentB.jsx";
import ComponentC from "./SubComponent/ComponentC.jsx";
import ComponentD from "./SubComponent/ComponentD.jsx";
import ComponentE from "./SubComponent/ComponentE.jsx";
import ComponentF from "./SubComponent/ComponentF.jsx";
import ComponentG from "./SubComponent/ComponentG.jsx";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    this.setState({
      windowWidth: window.innerWidth,
    });
  }

  render() {
    const { windowWidth } = this.state;
    let componentToRender;

    if (windowWidth <= 479) {
      componentToRender = <ComponentA />;
    } else if (windowWidth <= 767) {
      componentToRender = <ComponentB />;
    } else if (windowWidth <= 991) {
      componentToRender = <ComponentC />;
    } else if (windowWidth < 1280) {
      componentToRender = <ComponentD />;
    } else if (windowWidth < 1440) {
      componentToRender = <ComponentE />;
    } else if (windowWidth < 1920) {
      componentToRender = <ComponentF />;
    } else {
      componentToRender = <ComponentG />;
    }

    return <>{componentToRender}</>;
  }
}

export default Home;
