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
    const dispatch = useDispatch()
    const [date, setDate] = useState<number | null>(null)

    const currentTheme = useSelector(getThemeMode)

    useEffect(() => {
        isLocalStorageAvailable()
    }, [currentTheme])

    useEffect(() => {
        setDate(new Date().getHours())

        return () => {

        }
    }, [])

    useEffect(() => {
        if (date) {
            if (date >= 6 && date < 18) {
                if (date < 12) {
                    dispatch(changeColorByValue({ greet: "Good morning" }))
                } else {
                    dispatch(changeColorByValue({ greet: "Good afternoon" }))
                }
            } else {
                dispatch(changeColorByValue({ greet: "Good evening" }))
            }
        }
    },[date])

    useEffect(() => {
        console.log(localStorage.getItem('mode'), typeof localStorage.getItem('mode'))
        if (date && localStorage.getItem('mode') === 'null'){
            if (date < 12) {
                dispatch(setTheme({mode: 'light'}))
            } else {
                dispatch(setTheme({mode: 'dark'}))
                console.log('here',localStorage)
            }
        } else {
            dispatch(setTheme({mode: localStorage.getItem('mode')}))
        }
    },[date])

    const callback = () => {
        dispatch(setTheme({mode: currentTheme === 'dark' ? 'light' : 'dark' }))
    }

    return (
        <label className={styles.label}>
            <input className={styles.input} type="checkbox" defaultChecked={currentTheme === 'light' ? false : true} onClick={callback} />
            <span className={styles.span} />
            <strong>{label}</strong>
        </label>
    )
}