const Programs = ({ flightData, successLaunchIstrue,successLandIsTrue }) => {
    return (
        <>
            { 
                flightData.map((flight) => {
                    const { flight_number, mission_name, mission_id, launch_year, launch_success } = flight;
                    const { land_success } = flight.rocket.first_stage.cores[0];
                    const { mission_patch_small } = flight.links;

                    return (

                        <article className="article" key={flight_number}>
                            <img src={mission_patch_small} alt="" />
                            <h5 className="mission-name">{mission_name} #{flight_number}</h5>
                            <h5>Mission Ids:
                                <ul>
                                    {mission_id.map((mission,index) => {
                                        return (<li key={index}>{mission}</li>
                                        )
                                    })}
                                </ul>
                            </h5>
                            <h5>Launch Year: {launch_year}</h5>
                            <h5>Successful Launch: {launch_success.toString()}</h5>
                            <h5>Successful Landing: {land_success ? land_success.toString() : "(landing-status)"}</h5>
                        </article>
                    )
                })
            }            
        </>
    )
}
export default Programs