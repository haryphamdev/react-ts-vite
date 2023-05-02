import { useState } from "react";
import LeftPart from "../components/leftpart";
import MobileMenu from "../components/mobile/menu";
import PreLoader from "../components/preloader";
import RightPart from "../components/rightpart";
import { FloatButton } from 'antd';

const Portfolio = () => {

    const [hideLeftPart, setHideLeftPart] = useState<boolean>(false);

    return (
        <div className="arlo_tm_wrapper_all">

            <div id="arlo_tm_popup_blog">
                <div className="container">
                    <div className="inner_popup scrollable"></div>
                </div>
                <span className="close"><a href="#"></a></span>
            </div>

            {/* <!-- PRELOADER --> */}
            <PreLoader />
            {/* <!-- /PRELOADER --> */}

            {/* <!-- MOBILE MENU --> */}
            <MobileMenu />
            {/* <!-- /MOBILE MENU --> */}

            {/* <!-- CONTENT --> */}
            <div className="arlo_tm_content">

                {/* <!-- LEFTPART --> */}
                <LeftPart
                    hideLeftPart={hideLeftPart}
                    setHideLeftPart={setHideLeftPart}
                />
                {/* <!-- /LEFTPART --> */}

                {/* <!-- RIGHTPART --> */}
                <RightPart
                    hideLeftPart={hideLeftPart}
                    setHideLeftPart={setHideLeftPart}
                />
                {/* <!-- /RIGHTPART --> */}

                {/* <a className="arlo_tm_totop" href="#"></a> */}
                <FloatButton.BackTop
                    tooltip={<div>Scroll to Top</div>}
                />
            </div>
        </div>
    )
}

export default Portfolio;