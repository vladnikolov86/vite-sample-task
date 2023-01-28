import { useNavigate } from 'react-router-dom'
import * as Styles from './Header.styles'
import { ReactComponent as Logo } from '~/assets/react.svg'

export default function Header() {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/')
    }
    return <Styles.Wrap onClick={handleNavigate}>
        <Logo />
        <div>Logo</div>
    </Styles.Wrap>

}