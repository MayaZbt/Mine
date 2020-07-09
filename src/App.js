import React from "react";
import "./styles.css";

const movie = {
  title: "title1",
  vote_average: 8.5,
  image: "https://bipbap.ru/wp-content/uploads/2017/04/3dr-19.jpg",
  overview: "overview"
};

function Image(props) {
  //  console.log("Image props", props);
  return <img src={props.src} alt={props.alt} />;
}

//function MovieItem(props) {
//  console.log("MovieItem props = ", props);
//  const {
//    data: { title, vote_average, image }
//  } = props;
//  return (
//    <div>
//      <Image srt={image} alt={title} />
//     <p>{title}</p>
//      <p>{vote_average}</p>
//    </div>
//  );
//}

class MovieItem extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      like: false
    };
  }

  toogleOverview = () => {
    this.setState({
      show: !this.state.show
    });
  };

  handleLike = () => {
    this.setState({
      like: !this.state.like
    });
  };

  render() {
    const {
      data: { title, vote_average, image, overview }
    } = this.props;
    console.log("state", this.state);
    return (
      <div>
        <Image srt={image} alt={title} />
        <p>{title}</p>
        <p>{vote_average}</p>
        <div style={{ dislay: "flex", justifyContent: "space-between" }}>
          <button type="button" onClick={this.toogleOverview}>
            {this.state.show ? "show" : "hide"}
          </button>
          <button
            type="button"
            onClick={this.handleLike}
            className={this.state.like ? "btn--like" : ""}
            // style={{ background: this.state.like ? "blue" : "white" }}
          >
            Like
          </button>
        </div>
        <p>{this.state.show ? "overview" : null}</p>
      </div>
    );
  }
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <MovieItem data={movie} />
    </div>
  );
}
