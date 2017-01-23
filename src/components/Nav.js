import React from 'react';
import { Link } from 'react-router';
import { pages } from '../routes';

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><Link className="active" to="/"><i className="material-icons">style</i> React SPA</Link></li>
                    {pages.map(page => <li><Link to={page.path}><i className="material-icons">home</i></Link></li>)}
                    {/*<li><Link to="/"><i className="material-icons">class</i></Link></li>*/}
                    {/*<li><Link to="/"><i className="material-icons">info</i></Link></li>*/}
                    {/*<li><Link to="/"><i className="material-icons">perm_contact_calendar</i></Link></li>*/}
                </ul>
            </nav>
        )
    }
}

export default Nav;