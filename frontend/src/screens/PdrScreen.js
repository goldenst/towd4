import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Col, Row } from 'react-bootstrap'
// import Call from '../components/Calls/Call'
import Message from '../components/Message'
import Loader from '../components/Loader'
// import { listCalls } from '../actions/callActions'


const PdrScreen = () => {
    // const dispatch = useDispatch()

    // const pdrList = useSelector(state => state.pdrList)
    // const { loading, error, pdrs } = pdrList

    // useEffect(() => {
    //     dispatch(())
    // },[dispatch])

    return (
        <>
            <h2>Current Pdrs</h2>
            {/* {loading ? (
            <Loader />
             ): error ? ( 
             <Message variant='danger'>{error}</Message>
              ) : (
            <Row>
                {pdrs.map(pdr => (
                    <Col>
                       <pdr pdr={pdr} />
                    </Col>
                ))}
            </Row>
              )} */}
        </>
    )
}

export default PdrScreen
