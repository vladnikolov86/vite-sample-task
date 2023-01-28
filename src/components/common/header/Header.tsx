import * as Styles from './Header.styles'
import { ReactComponent as Logo } from '~/assets/react.svg'

export default function Header() {
    return <Styles.Wrap>
        <Logo />
        <span>Logo</span>
    </Styles.Wrap>
}