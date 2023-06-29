import { useState } from 'react'
import styles from './index.module.scss'

interface Props {
  label: string,
  toggled: boolean,
  cb: (isToggled:boolean) => void
}
export const Toggle = ({ label, toggled = false, cb }: Props) => {
    const [isToggled, toggle] = useState<boolean>(toggled)

    const callback = () => {
        toggle(!isToggled)
        cb && cb(!isToggled)
    }

    return (
        <label className={styles.label}>
            <input className={styles.input} type="checkbox" defaultChecked={isToggled} onClick={callback} />
            <span className={styles.span} />
            <strong>{label}</strong>
        </label>
    )
}