import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';

const style = {
    menu: {position: 'fixed', top: '0px'}
}

class Menu extends Component {
    /*
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        console.log('handleScroll', window.scrollY);
    }
*/
    render() {
        return (<AppBar style={style.menu} title="Home" iconClassNameRight="muidocs-icon-navigation-expand-more" />);
    }
};

export default Menu;
