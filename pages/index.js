import React from "react";
import "./index.css";
import Card from "./Card";
import { bindActionCreators } from "redux";
import { initialCards } from "../store";
import { connect } from "react-redux";

class Home extends React.Component {
  static async getInitialProps({ store }) {
    store.dispatch(initialCards());
  }

  render() {
    return (
      <div>
        <header>
          <img src="/logo.png" alt="logo" className="static-logo" />
        </header>
        <div className="Grid">
          {this.props &&
            this.props.cards &&
            this.props.cards.map(card => {
              return <Card key={card.id} />;
            })}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initialCards: bindActionCreators(initialCards, dispatch)
  };
};

const mapStateToProps = state => {
  return {
    cards: state.cards
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
