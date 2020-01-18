import React from 'react';
import '../styles/App.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import newsAction from '../actions/newsAction';
import '../styles/App.css';

class News extends React.Component {

 componentDidMount() {
  this.props.getNews();
}

  render = () => {
    const {items, loaded} = this.props;
  return (
      <> 
      {
        loaded ? 
        <ul>
          {
            items.map((item, key) => (
            <li className="card" key={key}>
              <div className="card-body">
              <h5 >{item.name}</h5>
              <h6 >{item.country}</h6>
              <p >{item.description}</p>
              </div>
            </li>
            ))
          }
        </ul>
          : <h3 className="Loader">Loading...</h3>
      }
     </>
  );
}
}

const mapStateToProps = (state) => ({
  items: state.news.news, 
  loaded: state.news.loaded
})

const mapDispatchToProps = (dispatch) => ({
  getNews: () => {
    dispatch(newsAction())
  }
  })

  News.propTypes = {
    items: PropTypes.array.isRequired,
    loaded: PropTypes.bool.isRequired
  }



export default connect(mapStateToProps, mapDispatchToProps)(News);
