import React, {useState} from "react";
import Programs from './Programs'
const Filters = ({ flightData, filterLaunch, successLaunch , successLand }) => {
    const [successLaunchIstrue , setSuccessLaunchIsTrue] = useState(false);
    const [successLandIstrue , setSuccessLandIsTrue] = useState(false);
    return (
        <>
        <div className="main-container">
            <aside className="sidebar">
                <h4>Filters</h4>
                <p className="head">
                    Launch Year
                </p>
                <div className="underline"></div>
                <div className="grid-buttons">
                    <button className="btn" onClick={() => filterLaunch("All")} >All</button>
                    <button className="btn" onClick={() => filterLaunch("2006")} >2006</button>
                    <button className="btn" onClick={() => filterLaunch("2007")}>2007</button>
                    <button className="btn" onClick={() => filterLaunch("2008")}>2008</button>
                    <button className="btn" onClick={() => filterLaunch("2009")}>2009</button>
                    <button className="btn" onClick={() => filterLaunch("2010")}>2010</button>
                    <button className="btn" onClick={() => filterLaunch("2011")}>2011</button>
                    <button className="btn" onClick={() => filterLaunch("2012")}>2012</button>
                    <button className="btn" onClick={() => filterLaunch("2013")}>2013</button>
                    <button className="btn" onClick={() => filterLaunch("2014")}>2014</button>
                    <button className="btn" onClick={() => filterLaunch("2015")}>2015</button>
                    <button className="btn" onClick={() => filterLaunch("2016")}>2016</button>
                    <button className="btn" onClick={() => filterLaunch("2017")}>2017</button>
                    <button className="btn" onClick={() => filterLaunch("2018")}>2018</button>
                    <button className="btn" onClick={() => filterLaunch("2019")}>2019</button>
                    <button className="btn" onClick={() => filterLaunch("2020")}>2020</button>
                </div>
                <p className="head-2">
                    Successful Launch
                </p>
                <div className="underline"></div>
                <div className="grid-buttons">
                    <button className="btn" onClick={()=>setSuccessLaunchIsTrue(true)}>True</button>
                    <button className="btn" onClick={()=>setSuccessLaunchIsTrue(false)}>False</button>
                </div>
                <p className="head-2">
                    Successful Landing
                </p>
                <div className="underline"></div>
                <div className="grid-buttons">
                    <button className="btn" onClick={()=>setSuccessLandIsTrue(true)}>True</button>
                    <button className="btn" onClick={()=>setSuccessLandIsTrue(false)}>False</button>
                </div>
            </aside>
            <div className={`${successLaunchIstrue||successLandIstrue?"grid-main-hide":"grid-main"}`}>
                <Programs flightData={flightData} successLandIstrue={successLandIstrue}
                successLaunchIstrue={successLaunchIstrue} />
            </div>
            <div className={`${successLaunchIstrue && !successLandIstrue?"gridlaunchSuccess grid-main":"gridlaunchSuccess-hide"}`}>
                <Programs flightData={successLaunch}/>
            </div>
            <div className={`${successLaunchIstrue&&successLandIstrue?"gridlandSuccess grid-main":"gridlandSuccess-hide"}`}>
                <Programs flightData={successLand}/>
            </div>
            <div className={`${successLandIstrue?"gridlandSuccess grid-main":"gridlandSuccess-hide"}`}>
                <Programs flightData={successLand}/>
            </div>
        </div>
            
            
        </>
    )
}
export default Filters