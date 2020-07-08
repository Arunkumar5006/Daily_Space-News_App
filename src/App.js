import React, { Component } from "react";
import "./styles.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?hd&api_key=80hZ4NlTisbZdsgbawK1uafS6yhDVZ9TkQ3XaW1k"
      )
      .then(response => {
        this.setState({ posts: response.data });
      });
  }
  render() {
    const { posts } = this.state;
    return (
      <div className="space">
        <table className="header">
          <tr>
            <td>
              <div className="appname">
                <h1>Daily Space</h1>
                <p>
                  <i>
                    The Daily Space Information Application (Information by
                    NASA)
                  </i>
                </p>
              </div>
            </td>
            <td>
              <div className="today">
                <p>Today</p>
                <h2>{posts.date}</h2>
              </div>
            </td>
          </tr>
        </table>
        <table className="title">
          <tr>
            <div>
              <h3>{posts.title}</h3>
            </div>
          </tr>
        </table>

        <table className="content">
          <tr>
            <td>
              <div className="news">
                <p>{posts.explanation}</p>
              </div>
            </td>
            <td>
              <div>
                <img className="image" src={posts.hdurl} alt={posts.title} />
              </div>
            </td>
          </tr>
        </table>
        <table className="footer">
          <div>
            <p>
              One of the most popular websites at NASA is the Astronomy Picture
              of the Day.
            </p>
            <p>
              {" "}
              In fact, this website is one of the most popular websites across
              all federal agencies. It has the popular appeal of a Justin Bieber
              video.
            </p>
          </div>
        </table>
      </div>
    );
  }
}

export default App;
