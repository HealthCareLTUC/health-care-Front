import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import RootNavBar from '../RootNavBar/RootNavBar';
import './Index.css';
import LoginDoctor from '../LoginDoctor/LoginDoctor.js';
import { useState } from 'react';
import LoginPatient from '../LoginPatient/LoginPatient';
import SignupDoctor from '../SignupDoctor/SignupDoctor';
import SignupPatient from '../SignupPatient/SignupPatient';
function Index() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
    return (
        <div>

            <RootNavBar />
            <LoginDoctor handleClose={handleClose} handleShow={handleShow} show={show} />
            <LoginPatient handleClose={handleClose1} handleShow={handleShow1} show={show1} />
            <SignupDoctor handleClose={handleClose2} handleShow={handleShow2} show={show2} />
            <SignupPatient handleClose={handleClose3} handleShow={handleShow3} show={show3} />
            <Stack direction="horizontal" gap={2} className="col-md-5 mx-auto my-2">
                <div className='mx-2'>
                    <fieldset className='border border-dark'>
                        <p className=' my-5 mx-2'>
                            Quality treatment and compationate care
                        </p>
                    </fieldset>
                </div>
                <img className='img1' src='https://sa1s3optim.patientpop.com/assets/images/provider/photos/2414214.jpg' alt='healthcare' />
            </Stack >
            <Stack direction="horizontal" gap={2} className="col-md-5 mx-auto my-2">
                <Button as="a" className='mx-5 my-5' variant="primary" onClick={() => setShow(!show)}>
                    Doctor's Login
                </Button>
                <Button as="a" className='mx-5 my-5' variant="success" onClick={() => setShow1(!show1)}>
                    Patient's Login
                </Button>
            </Stack>
            <Stack direction="horizontal" gap={2} className="col-md-5 mx-auto my-2">
                <Button as="a" className='mx-5 my-5' variant="primary" onClick={() => setShow2(!show2)}>
                    Doctor's Signup
                </Button>
                <Button as="a" className='mx-5 my-5' variant="success" onClick={() => setShow3(!show3)}>
                    Patient's Signup
                </Button>
            </Stack>
        </div>

    )
}
export default Index