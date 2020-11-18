import { connect } from 'react-redux';
import { selectLocation, getLocationWeather } from '../store/action'

// component
import Btn from '../components/Btn';

const mapStateToProps = (state, ownProps) => {
    return {
        disable: state.selectLocation === ownProps.locationName
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: ()=>{
            dispatch(selectLocation(ownProps.locationName));
            dispatch(getLocationWeather(ownProps.locationName));
        }
    }
}

const LocationBtn = connect(mapStateToProps, mapDispatchToProps)(Btn);

export default LocationBtn