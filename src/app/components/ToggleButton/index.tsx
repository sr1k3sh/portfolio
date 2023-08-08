import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getThemeMode, setTheme } from 'src/redux/ThemeSlice'
import { changeColorByValue } from 'src/redux/AppSlice'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
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
    },[date, dispatch])

    useEffect(() => {
        if (date && localStorage.getItem('mode') === 'null'){
            if (date < 12) {
                dispatch(setTheme({mode: 'light'}))
                document.documentElement.classList.remove('dark');
            } else {
                dispatch(setTheme({mode: 'dark'}))
                document.documentElement.classList.add('dark');
            }
        } else {
            dispatch(setTheme({mode: localStorage.getItem('mode')}))
            if(localStorage.getItem('mode') === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    },[date, dispatch])

    const callback = () => {
        if(currentTheme === 'dark') {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
        dispatch(setTheme({mode: currentTheme === 'dark' ? 'light' : 'dark' }))
    }

    return (
        <label className={'bg-black-600 relative flex w-16 h-8 rounded-full overflow-hidden'}>
            <input className={'peer invisible'} type="checkbox" defaultChecked={currentTheme === 'light' ? false : true} onClick={callback} />
            <span className={'w-full absolute h-full peer-checked:bg-white-600'} />
            <span className={'absolute transition duration-300 w-8 h-8 rounded-full bg-white-100 dark:bg-black-100 left:0 top:0 peer-checked:translate-x-8 flex justify-center items-center'}>
                {
                    currentTheme === 'light' ?
                    <MdLightMode/> :
                    <MdDarkMode/>
                }
            </span>
        </label>
    )
}