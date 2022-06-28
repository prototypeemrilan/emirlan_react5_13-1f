import React from 'react';
import Headers from '../../components/headers/headers';
import classes from "./contactPage.module.css"


class ContactsPage extends React.Component {

    constructor (props) {
        super(props);
        this.state = {menu: false}
    }

    sayHello = () => {
        console.log("hello world")
    }

    changeTitle = () => {
        this.setState({
            title: "New title from ChangeText"
        })
    }
    handleMenu = () => {
        this.setState({
            menu: !this.state.menu
        })
    }
    render() {
        return (
            <div>
                {/*Contacts Page - {this.props.title}*/}
                {/*<h1>{this.state.title}</h1>*/}
                {/*<button onClick={this.changeTitle}>change title</button>*/}
                {/*<button onClick={this.sayHello}>say hello</button>*/}

                <button onClick={this.handleMenu}>
                    MENU
                </button>

                    <ul className={this.state.menu === true
                        ? classes.menuOpen : classes.menuClose}>
                        <li>mane page</li>
                        <li>about page</li>
                        <li>block page</li>
                    </ul>

            </div>
        )
    }
}
export default ContactsPage