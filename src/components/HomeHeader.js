import Tags from './Tags';
import Logo from './Logo';

const HomeHeader = () => {

    return (
        <header className="header">
            <Logo />
            <Tags />
            <h2 className="header__title">Nos photographes</h2>
        </header>
    );

}

export default HomeHeader;
