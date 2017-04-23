import React, {PropTypes} from 'react'
import {connect} from 'dva'
import {Select} from 'antd';
import styles from './index.less'
const bodyStyle = {
	bodyStyle: {
		height: 432,
		background: '#fff'
	}
}
function Dashboard({dashboard}) {
	const {Citylist} = dashboard;
	return (
		<Select style={{
			width: 100
		}}>
			{Citylist && Citylist.map((item, key) => <Select.Option value={item.id} key={key}>{item.name || item.id}</Select.Option>)}
		</Select>
	)
}
Dashboard.propTypes = {
	dashboard: PropTypes.object
}
export default connect(({dashboard}) => ({dashboard}))(Dashboard)
