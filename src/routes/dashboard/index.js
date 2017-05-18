import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Row, Col, Button } from 'antd';
import styles from './index.less';

function Dashboard({ dashboard }) {
    const ToYYTown = (e) => {
        console.log(e);
    };
    const { Citylist } = dashboard;
    return (
        <div>
            <Row gutter={24}>
                {Citylist && Citylist.map((item, key) => <Col lg={4} md={4} key={key}>
                    <Button
                      type="primary"
                      className={styles.areaButton}
                      onClick={ToYYTown.bind(this, item.id)}
                    >
                        {item.name}</Button>
                </Col>)}
            </Row>
        </div>
    );
}

Dashboard.propTypes = {
    dashboard: PropTypes.object
};

export default connect(({ dashboard }) => ({ dashboard }))(Dashboard);
