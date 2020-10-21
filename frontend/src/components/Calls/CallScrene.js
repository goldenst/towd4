import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Call from './Call'
import calls from '../../calls'

const CallScrene = () => {
    return (
        <>
            <h2>Current Calls</h2>
            <Row>
                {calls.map(call => (
                    <Col>
                       <Call call={call} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default CallScrene
