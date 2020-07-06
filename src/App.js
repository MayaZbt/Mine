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
  render() {
    const {
      data: { title, vote_average, image }
    } = this.props;
    console.log(this);
    return (
      <div>
        <Image srt={image} alt={title} />
        <p>{title}</p>
        <p>{vote_average}</p>
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
