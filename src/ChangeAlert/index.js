import React from 'react'
import { withStorageListener } from './withStorageListener'
import './ChangeAlert.css'

function ChangeAlert({ show, toggleShow }){
    if (show){
        return (
            <div className='ChangeAlert--container'>
                <p>We have changes</p>
                <button
                    onClick={()=> toggleShow(false )}
                >
                    Update info
                </button>
            </div>
        )
    } else {
        return null
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }