import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      businesses: [],
    };
  }

  render() {
    return (
        <div className="container">
          <section className="hero">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">
                  BLiT Businesses
                </h1>
                <h2 className="subtitle">
                  by Melissa
                </h2>
              </div>
            </div>
          </section>
          <div className="tile is-ancestor">
            <div className="tile is-4 is-vertical is-parent">
              <div className="tile is-child box">
                <p className="title">One</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque
                  tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </div>
              <div className="tile is-child box">
                <p className="title">Two</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque
                  tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child box">
                <p className="title">Three</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at
                  pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi
                  maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
                <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque
                  interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet
                  erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida
                  diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
                <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor
                  consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a
                  nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
              </div>
            </div>
          </div>
          <hr/>
          {this.state.businesses.map(business =>
              <div className="card" key={business.objectID}>
                <div className="card-content">
                  <p className="title">
                    {business['name']}
                  </p>
                  <p className="subtitle">
                    {business['owner']}
                  </p>
                </div>
                <footer className="card-footer">
                  <p className="card-footer-item">
            <span>
            <a href="{business.url}">View Website</a>
            </span>
                  </p>
                </footer>
              </div>
          )}
        </div>
    );
  }

  componentDidMount() {
    fetch('https://blacklatinoit.com/api/businesses')
        .then(response => response.json())
        .then(data => {
          var result = Object.keys(data).map((key) => {
            return data[key];
          });
          console.log(result);
          this.setState({ businesses: result })
        });
  }
}

export default App;