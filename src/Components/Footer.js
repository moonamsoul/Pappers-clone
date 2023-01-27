import "./FooterStyles.css"

const Footer =() =>{
    return(
        <div className="footer">
            {/*will devide it on two rows : upper and a lower row */}
            <div className="top">
                {/*left and right column*/}
                <div>
                    <h1>Pappers|PappersJustice</h1>
                </div>
                <div>

                </div>
            </div>

            <div className = "bottom"></div>
            <div>
                <a href="/">
                <i class="fa-brands fa-square-twitter"></i>

                <i class="fa-brands fa-linkedin"></i>
                </a>
            </div>
        </div>
    )

}

export default Footer;