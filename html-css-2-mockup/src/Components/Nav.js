import React from 'react'
import './Styles/Nav.css'
class Nav extends React.Component {
    constructor(){
        super()
        this.state = {
            menuOpenStatus: 'side-menu'

        }
    }

    toggle= () => {
        if(this.state.menuOpenStatus === 'side-menu-close' || this.state.menuOpenStatus === 'side-menu'){
            this.setState({menuOpenStatus: 'side-menu-open'})
        }else if (this.state.menuOpenStatus === 'side-menu-open'){
            this.setState({menuOpenStatus: 'side-menu-close'})
        }

    }
    render(){
        return(
            <>
            <nav>
                <div>
                    <h1 className='title'>Start BootStrap</h1>
                </div>
                <div>
                    <ul>
                        <li>Services</li>
                        <li>Portfolio</li>
                        <li>About</li>
                        <li>Team</li>
                        <li>Contact</li>
                        <li className='hamburger-gif side-menu'>
                        <img 
                        onClick={this.toggle}
                        src ="https://cdn.dribbble.com/users/1011558/screenshots/4615892/hamburger-03.gif" 
                        alt='burger'
                        />
                        </li>
                    </ul>
                </div>
            </nav>
            <div className={`${this.state.menuOpenStatus} side-menu`} >
            <h1>Services</h1>
            <h1>Portfolio</h1>
            <h1>About</h1>
            <h1>Team</h1>
            <h1>Contact</h1>
            </div>
            </>
        )
    }
}
export default Nav;