import React from 'react';
import { connect } from 'react-redux';
import LaunchDeatilsCard from './LaunchDetailsCard';

export const LaunchDetails = (props) => {

    return (
        <div className="grid">
            {
                props && props.launchDetails.length === 0 ? (
                    <p>No Activities found...</p>
                ) : (
                    props.launchDetails.map((launch)=>{
                        return (
                            <LaunchDeatilsCard key={launch.flight_number} {...launch}></LaunchDeatilsCard>
                        )
                    })
                )
            }
        </div>
    )

};

const mapStateToProps = (state) => ({
    launchDetails: state.launches
})

export default connect(mapStateToProps)(LaunchDetails);