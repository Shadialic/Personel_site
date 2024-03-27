import './NavBar.css'

export const NavBar = () => {
    const logoName = 'SHADIL ALI'

    return (<>
            <section className={'navbar-mobile'}>
                <p className="logo-mobile">{logoName}</p>
                <div className="magic-stick-mobile"></div>
            </section>
            <section className={'navbar'}>
                <span className={'navbar__logo'}>{logoName}</span>
                <div className={'navbar__links'}>
                    <a href={'#home'}>Home</a>
                    <a href={'#projects'}>Projects</a>
                    <a href={'#skills'}>Skills</a>
                    <a href={'#contact'}>Contact</a>
                </div>
            </section>
            <div className={'navbar-break'}/>
        </>);
};