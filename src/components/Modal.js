function Modal(props) {

    function cancelHandler() {
        props.onCancel();
    }

    function confirmHandler() {
        props.onConfirm()
    }

    return (
        <div className='modal'>
            <p>Are you sure?</p>
            <botton className='btn btn--alt' onClick={cancelHandler}>
                Cancel
            </botton>
            <button className='btn' onClick={confirmHandler}>
                Confirm
            </button>
        </div>
    )
}
// 彈窗有兩個參數皆為function:onCancel和onConfirm，何者被點擊則從Todo傳遞參數
// 呈上，執行被傳過來的函數

export default Modal
