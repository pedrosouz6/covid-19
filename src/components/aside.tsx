import { Aside } from '../styles/components/aside';
import { Link } from 'react-router-dom';

export default function AsideMenu() {
    return (
        <Aside>
            <div className="header">
                <h1>Covid-19</h1>
            </div>
            <nav>
                <ul>
                    <li> <Link to='/dashboard/world'> World</Link></li>
                    <li> <Link to='/dashboard/continent'> Continent</Link></li>
                    <li> <Link to='/dashboard/countries'> Country </Link> </li>
                </ul>
            </nav>
        </Aside>
    )
}