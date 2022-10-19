import { NavMenu }  from '../../components/NavMenu'
import { Button } from 'react-bootstrap'

export function Home() {

    return (
        <div>
            <NavMenu></NavMenu>
            <div style={{marginLeft:'45%'}}>
                <Button href='/Lobby' variant="warning" size="lg">
                    Join Lobby
                </Button>{' '}
                <Button href='/Community' variant="primary" size="lg">
                    Create Lobby
                </Button>
            </div>
        </div>
    );    

}