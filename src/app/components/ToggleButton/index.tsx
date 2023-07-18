import { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { useSelector } from 'react-redux'
import { getcolorState } from 'src/redux/AppSlice'

interface Props {
  label: string,
  cb: () => void
}
export const Toggle = ({ label, cb }: Props) => {
    const [isToggled, toggle] = useState<boolean>(false)
    const colorState = useSelector(getcolorState)

    useEffect(() => {
        toggle(colorState === 'light' ? false : true)
    },[colorState])

    const callback = () => {
        toggle(!isToggled)
        cb && cb()
    }

    return (
        <label className={styles.label}>
            <input className={styles.input} type="checkbox" defaultChecked={isToggled} onClick={callback} />
            <span className={styles.span} />
            <strong>{label}</strong>
        </label>
    )
}