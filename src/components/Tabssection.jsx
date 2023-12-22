import { useState } from 'react';
import { Container, Tab } from 'react-bootstrap';
import { Tabs } from 'react-bootstrap';

function Tabssection() {
    const [key, setKey] = useState('DESCRIPTION');

    return (
        <Container className='py-5'>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3 tab-gap"
            >
                <Tab eventKey="DESCRIPTION" title="DESCRIPTION" defaultChecked className='ff-poppins fs-md color-black fw-normal op-7'>
                    Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla in leo ullamcorper, in finibus elit porta. Sed eget congue neque, mattis finibus neque. In vel dolor ac augue pretium suscipit. Ut nec massa in ligula vestibulum mattis. Suspendisse imperdiet lorem eleifend nisi euismod, vel consequat ipsum luctus. Morbi auctor vulputate hendrerit. Etiam vel lectus tortor. Pellentesque non pharetra mi. Cura
                </Tab>
                <Tab eventKey="ADDITIONAL INFORMATION" title="ADDITIONAL INFORMATION" className='ff-poppins fs-md color-black fw-normal op-7'>
                    Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla in leo ullamcorper, in finibus elit porta. Sed eget congue neque, mattis finibus neque. In vel dolor ac augue pretium suscipit. Ut nec massa in ligula vestibulum mattis. Suspendisse imperdiet lorem eleifend nisi euismod, vel consequat ipsum luctus. Morbi auctor vulputate hendrerit. Etiam vel lectus tortor. Pellentesque non pharetra mi. Cura
                </Tab>
                <Tab eventKey="REVIEWS (1)" title="REVIEWS (1)" className='ff-poppins fs-md color-black fw-normal op-7'>
                    Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla in leo ullamcorper, in finibus elit porta. Sed eget congue neque, mattis finibus neque. In vel dolor ac augue pretium suscipit. Ut nec massa in ligula vestibulum mattis. Suspendisse imperdiet lorem eleifend nisi euismod, vel consequat ipsum luctus. Morbi auctor vulputate hendrerit. Etiam vel lectus tortor. Pellentesque non pharetra mi. Cura
                </Tab>
            </Tabs>
        </Container>
    );
}
export default Tabssection