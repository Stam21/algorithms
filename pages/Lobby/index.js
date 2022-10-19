import { NavMenu }  from '../../components/NavMenu'
import { Button } from 'react-bootstrap'

export default function Lobby() {

    return (
        <div >
            <NavMenu></NavMenu>
            <div>
                <div className="d-flex flex-row">
                        <Button href='/Games/EasyMode' variant="outline-primary" size="lg">
                                Easy
                        </Button>
                        <select className="form-select" aria-label="Default select example">
                            <option defaultValue>1 floor (3x3)</option>
                            <option value="1">1 floor (4x4)</option>
                        </select>
                </div>
                <div className="d-flex flex-row">
                    <Button href='/Community' variant="outline-primary" size="lg">
                            Medium
                    </Button>
                    <select className="form-select" aria-label="Default select example">
                        <option defaultValue>2 floors (3x3)</option>
                    </select>
                </div>
                <div className="d-flex flex-row">
                    <Button href='/Community' variant="outline-primary" size="lg">
                            Hard
                    </Button>
                    <select className="form-select" aria-label="Default select example">
                        <option defaultValue>1 floor (5x5)</option>
                        <option value="1">2 floors (3x4)</option>
                        <option value="2">3 floors (3x3)</option>
                    </select>
                </div>
            </div>
        </div>
    );    

}