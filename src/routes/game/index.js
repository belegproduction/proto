import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { createPropsSelector } from 'reselect-immutable-helpers';
import Location from '../../components/location';
import { changeLocation } from '../../actions/general';

import { getLocationActive } from '../../selectors/general';
import style from './style';


class Game extends Component {
	
	render() {
		const { locationActive, handlerChangeLocation } = this.props;
    return (<div class={style.game}>
			<Location {...locationActive} handlerChangeLocation={handlerChangeLocation}/>
		</div>)
	}
}

const mapStateToProps = createPropsSelector({
	locationActive: getLocationActive
});

const mapDispatchToProps = (dispatch) => ({
  handlerChangeLocation(locationName) {
    dispatch(changeLocation(locationName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
