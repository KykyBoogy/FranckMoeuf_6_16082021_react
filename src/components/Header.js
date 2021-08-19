import Tag from './Tag';

const HomeHeader = () => {
const logo = require("../assets/img/logo.png")
    return (
        <header className="container-header" role="banner">
            <a href="./index.html">
                <img 
                    src={require("../assets/img/logo.png").default} 
                    alt="Fisheye Home page" 
                    className="header__logo"/>
            </a>
            <Tag />
            <h1 className="header__title">Nos photographes</h1>
        </header>
    );

}


export default HomeHeader;
