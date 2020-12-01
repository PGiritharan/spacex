import React from 'react';
import { connect } from 'react-redux';
import LaunchDetails from './LaunchDetails';
import WebService from '../service/WebService';
import { setLaunchDetails } from '../redux/actions/launchActions';
import Filters from './Filters';

export class HomePage extends React.Component{
    constructor(props){
        super(props);
        WebService.getLaunches(this.props.filters).then((res)=>{
            this.props.setLaunchDetails(res);
        });
    }

    componentDidUpdate(){
        WebService.getLaunches(this.props.filters).then((res)=>{
            this.props.setLaunchDetails(res);
        });
    }

    render(){
        return (
            <div className="home-grid">
                <Filters />
                <LaunchDetails />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
    setLaunchDetails: (launchDetails) => dispatch(setLaunchDetails(launchDetails))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);