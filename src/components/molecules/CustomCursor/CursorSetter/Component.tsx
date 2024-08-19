'use client';

import { useCursorStore, CursorTypes, CursorMotionTypes, useCursorMotionStore } from '@stores/cursor'
import s from "./CursorSetter.module.css";

interface PropTypes {
    cursor: CursorTypes
    motion?: CursorMotionTypes;
    children: any
}
const CursorSetter = (props: PropTypes): JSX.Element => {
    const setCursor = useCursorStore((state) => state.setCursor);
    const setCursorMotion = useCursorMotionStore((state) => state.setCursorMotion);

    return (
        <span className={s.wrapper}
            onMouseEnter={() => {
                setCursor(props.cursor)
                if (props.motion) {
                    setCursorMotion('snap')
                }
            }}
            onMouseLeave={() => {
                setCursor('default')
                setCursorMotion('default')
            }}>
            {props.children}
        </span>
    )
}

export default CursorSetter