import Tag from './Tag';

const HomeHeader = () => {

    return (
        <header className="container header" role="banner">
            <a href="./index.html">
                <img 
                    src="./img/logo.png" 
                    alt="Fisheye Home page" 
                    className="header__logo"/>
            </a>
            <Tag />
            <h1 className="header__title">Nos photographes</h1>
        </header>
    );

}


export default HomeHeader;
