import React from 'react';
import { connect } from 'react-redux';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { setLandStatus, setLaunchStatus, setLaunchYear } from '../redux/actions/filterActions';

export class Filters extends React.Component{
    
    onLaunchYearChange = (launchYear)=>{
        this.props.setLaunchYear(launchYear);
    }
    onLaunchStatusChange = (isLaunchedSuccessfully) => {
        this.props.setLaunchStatus(isLaunchedSuccessfully);
    }
    onLandStatusChange = (isLandedSuccessfully)=>{
        this.props.setLandStatus(isLandedSuccessfully);
    }
    render(){
        return (
            <div className="filter-card">
                <div className="col-12">
                    <div className="col-12 heading no-gutter">Filters</div>
                    <div className="col-12 no-gutter">
                        <div className="filter-heading">Launch Year</div>
                        <ToggleButtonGroup className="col-12 no-gutter" vertical="true" name="Launch Year">
                            {this.props && this.props.getLaunchYearDetails.map((radio, idx) => (
                                <ToggleButton
                                    size = "lg"
                                    key={idx}
                                    type="radio"
                                    variant="success"
                                    name={radio}
                                    value={radio}
                                    className = "col-5"
                                    onChange = {(e)=> this.onLaunchYearChange(e.currentTarget.value)}
                                >
                                    {radio}
                                </ToggleButton>
                            ))}
                        </ToggleButtonGroup>
                        <div className="filter-heading">Successful Launch</div>
                        <ToggleButtonGroup className="col-12 no-gutter" vertical="true" name="Successful Launch">    
                            <ToggleButton
                                size = "lg"
                                type="radio"
                                variant="success"
                                name="launch succeeded"
                                value="true"
                                className = "col-5"
                                onChange = {(e)=> this.onLaunchStatusChange(e.currentTarget.value)}
                            >
                                True
                            </ToggleButton>
                            <ToggleButton
                                size = "lg"
                                type="radio"
                                variant="success"
                                name="launch failed"
                                value="false"
                                className = "col-5"
                                onChange = {(e)=> this.onLaunchStatusChange(e.currentTarget.value)}
                            >
                                False
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <div className="filter-heading">Successful Land</div>
                        <ToggleButtonGroup className="col-12 no-gutter" vertical="true" name="Successful Land">    
                            <ToggleButton
                                size = "lg"
                                type="radio"
                                variant="success"
                                name="Landing succeeded"
                                value="true"
                                className = "col-5"
                                onChange = {(e)=> this.onLandStatusChange(e.currentTarget.value)}
                            >
                                True
                            </ToggleButton>
                            <ToggleButton
                                size = "lg"
                                type="radio"
                                variant="success"
                                name="Landing failed"
                                value="false"
                                className = "col-5"
                                onChange = {(e)=> this.onLandStatusChange(e.currentTarget.value)}
                            >
                                False
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    getLaunchYearDetails: state.constants.getLaunchYearFilterButtons(),
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setLaunchYear: (launchYear) => dispatch(setLaunchYear(launchYear)),
    setLaunchStatus: (isLaunchedSuccessfully) => dispatch(setLaunchStatus(isLaunchedSuccessfully)),
    setLandStatus: (isLandedSuccessfully) => dispatch(setLandStatus(isLandedSuccessfully))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
