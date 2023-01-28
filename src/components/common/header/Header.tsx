import * as Styles from './Header.styles'
import { ReactComponent as Logo } from '~/assets/react.svg'

export default function Header() {
    return <Styles.Link href="/">
        <Styles.Wrap>
            <Logo />
            <div>Logo</div>
        </Styles.Wrap>
    </Styles.Link>
}