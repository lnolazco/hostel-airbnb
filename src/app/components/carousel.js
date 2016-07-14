import React, {Component} from 'react';

const styles = {
  carousel: {
    width: '100%',
    height: 'auto'
  },
};


class DemoCarousel extends Component {
    render() {
        return (
            <img src="http://react-responsive-carousel.js.org/assets/1.jpeg" style={styles.carousel}/>
        );
    }
};
export default DemoCarousel;
