import { Aside } from '../styles/components/menu';

export default function AsideMenu() {
    return (
        <Aside>
            <div className="header">
                <h1>Covid-19</h1>
            </div>
            <nav>
                <ul>
                    <li>World</li>
                    <li>Continent</li>
                    <li>Country</li>
                    <li>State</li>
                </ul>
            </nav>
        </Aside>
    )
}