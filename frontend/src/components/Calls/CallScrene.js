import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Call from '../Calls/Call'
import Message from '../Message'
import Loader from '../Loader'
import { listCalls } from '../../actions/callActions'


const CallScrene = () => {
    const dispatch = useDispatch()

    const callList = useSelector(state => state.callList)
    const { loading, error, calls } = callList

    useEffect(() => {
        dispatch(listCalls())
    },[dispatch])

    return (
        <>
            <h2>Current Calls</h2>
            {loading ? (
            <Loader />
             ): error ? ( 
             <Message variant='danger'>{error}</Message>
              ) : (
            <Row>
                {calls.map(call => (
                    <Col>
                       <Call call={call} />
                    </Col>
                ))}
            </Row>
              )}
        </>
    )
}

export default CallScrene
