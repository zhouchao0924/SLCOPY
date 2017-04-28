import React, {PropTypes} from 'react'
import {connect} from 'dva'
import {Select, Card, Col, Row, Button} from 'antd';
import styles from './index.less'
const bodyStyle = {
	bodyStyle: {
		height: 432,
		background: '#fff'
	}
}
function Dashboard({dashboard}) {
	const ToYYTown = (e) => {
		console.log(e);
	}
	const {Citylist} = dashboard;
	return (< div > < Row gutter = {
		24
	} > {
		Citylist && Citylist.map((item, key) => < Col lg = {
			4
		}
		md = {
			24
		}
		key = {
			key
		} > < Button type = "primary" className = {
			styles.areaButton
		}
		onClick = {
			ToYYTown.bind(this, item.id)
		} > {
			item.name
		} < /Button> < /Col >)
	} < /Row> < /div >)
}
Dashboard.propTypes = {
	dashboard: PropTypes.object
}
export default connect(({dashboard}) => ({dashboard}))(Dashboard)
