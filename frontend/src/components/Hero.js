import './Hero.css';

const Hero = () => {
    return(
        <div className="hero">
            <div className="hero__text">
                <h2>Hello and welcome to Risari!</h2>
                <p> The place to find the best technologies for every taste and occasion with the best prices</p>
                <p className="hero__ready">Ready for shopping?</p>
                
                {/* Scrol mouse */}
                <a className="scrol-down">
                    <div className="mouse">
                        <span></span>
                    </div>
                    <div className="arrow">
                        <span></span>
                    </div>
                </a>
            </div>
            {/* Hero section Shapes and decores */}
            <div className="square1"></div>
            <div className="square2"></div>
            
            {/* SVG */}
            <div>
                <svg id="lines" width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path id="Vector 1" d="M0 1H22" stroke="black"/>
                        <path id="Vector 2" d="M0 13H18.1176" stroke="black"/>
                        <path id="Vector 3" d="M0 24H11" stroke="black"/>
                    </g>
                </svg>

                <svg id="cricles" width="14" height="114" viewBox="0 0 14 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path id="Ellipse 1" d="M13.5 7.14257C13.5 10.8207 10.5804 13.7851 7 13.7851C3.41961 13.7851 0.5 10.8207 0.5 7.14257C0.5 3.46443 3.41961 0.5 7 0.5C10.5804 0.5 13.5 3.46443 13.5 7.14257Z" stroke="black"/>
                        <ellipse id="Ellipse 2" cx="7" cy="32.0713" rx="7" ry="7.14257" fill="#C28244"/>
                        <path id="Ellipse 3" d="M13.5 57C13.5 60.6781 10.5804 63.6426 7 63.6426C3.41961 63.6426 0.5 60.6781 0.5 57C0.5 53.3219 3.41961 50.3574 7 50.3574C10.5804 50.3574 13.5 53.3219 13.5 57Z" stroke="black"/>
                        <path id="Ellipse 4" d="M13.5 81.9287C13.5 85.6069 10.5804 88.5713 7 88.5713C3.41961 88.5713 0.5 85.6069 0.5 81.9287C0.5 78.2506 3.41961 75.2861 7 75.2861C10.5804 75.2861 13.5 78.2506 13.5 81.9287Z" stroke="black"/>
                        <path id="Ellipse 5" d="M13.5 106.857C13.5 110.536 10.5804 113.5 7 113.5C3.41961 113.5 0.5 110.536 0.5 106.857C0.5 103.179 3.41961 100.215 7 100.215C10.5804 100.215 13.5 103.179 13.5 106.857Z" stroke="black"/>
                    </g>
                </svg>

            </div>
            
        </div>
        
    )
}


export default Hero