import { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getThemeMode, setTheme, toggleTheme } from 'src/redux/ThemeSlice'
import { changeColorByValue } from 'src/redux/AppSlice'

interface Props {
    label: string,
    cb?: () => void
}

const isLocalStorageAvailable = () => {
    try {
      const testKey = '__test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
}

export const Toggle = ({ label }: Props) => {
    const [isToggled, toggle] = useState<boolean>(false)
    const dispatch = useDispatch()
    const [date, setDate] = useState<number | null>(null)

    const currentTheme = useSelector(getThemeMode)

    useEffect(() => {
        toggle(currentTheme === 'light' ? false : true)
        isLocalStorageAvailable()
        localStorage.setItem('mode', currentTheme)
        console.log(localStorage.getItem('mode'), currentTheme)
        // if(currentTheme === 'dark') {
        // } else {
        //     localStorage.setItem('mode', 'light')
        // }
    }, [currentTheme])

    useEffect(() => {

        setDate(new Date().getHours())

        if (date && !localStorage.getItem('mode')) {
            if (date >= 6 && date < 18) {
                if (date < 12) {
                    dispatch(changeColorByValue({ greet: "Good morning" }))
                    dispatch(setTheme({ mode: 'light' }))
                } else {
                    dispatch(changeColorByValue({ greet: "Good afternoon" }))
                    dispatch(setTheme({ mode: 'light' }))
                }
            } else {
                dispatch(changeColorByValue({ greet: "Good evening" }))
                dispatch(setTheme({ mode: 'dark' }))
            }
        }

        return () => {

        }
    }, [date, dispatch])

    const callback = () => {
        dispatch(toggleTheme())
    }

    return (
        <label className={styles.label}>
            <input className={styles.input} type="checkbox" defaultChecked={isToggled} onClick={callback} />
            <span className={styles.span} />
            <strong>{label}</strong>
        </label>
    )
}