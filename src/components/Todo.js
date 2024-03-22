import { useState } from 'react'

import Modal from './Modal'
import Backdrop from './Backdrop'

function Todo(props) {
    // 預設彈窗的狀態是false，點擊跳出彈窗->狀態設為true
    const [modalState, setmodalState] = useState(false)

    function deleteclick() {
        console.log('Click delete!')
        console.log(props.text)
        setmodalState(true)
    }
    
    // 關掉彈窗->狀態設為false
    function closebyBackdrop() {
        console.log('Close by Backdrop!')
        setmodalState(false)
    }

    function cancelModal() {
        console.log('Click cancel!')
        setmodalState(false)
    }

    function confirmModal() {
        console.log('Click confirm!')
        setmodalState(false)
    }

    return (
        <div className='card'>
            <h2>{props.text}</h2>
            <div className='actions'>
                <span>A Span</span>
                <button className='btn' onClick={deleteclick}>
                    DELETE
                </button>
            </div>
            {modalState && (
                <Modal onCancel={cancelModal} onConfirm={confirmModal} />
            )}
            {modalState && <Backdrop onClick={closebyBackdrop} />}
        </div>
    )
}
// 34:從App回傳的text參數
// 從index.css設計的樣式，以className='card'引入
// 41:modalState==ture && 彈窗開啟
// 42:將cancelModal或confirmModal函數作為參數傳到彈窗模組執行

export default Todo
// 自定義components以大寫字母開頭
