import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Alert = ({ alerts }) =>
	alerts !== null &&
	alerts.length > 0 &&
	alerts.map((alert) => (
		<div key={alert.id} className={`alert w-full ${alert.alertType} text-white`}>
			<div className="max-w-xl mx-auto">{alert.msg}</div>
		</div>
	))

Alert.propTypes = {
	alerts: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
	alerts: state.alert
})

export default connect(mapStateToProps)(Alert)
