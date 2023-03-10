import React, { useState, useEffect } from 'react'

const Alert = ({ type, message, delay = false, delayTime = 3000 }) => {
    const [showAlert, setShowAlert] = useState(true);

    const closeAlert = (e) => {
        e.target.parentElement.parentElement.classList.add("alert-fade")

        setTimeout(() => {
            setShowAlert(false)
        }, 400)
    }

    useEffect(() => {
        delay &&
            setTimeout(() => {
                setShowAlert(false)
            }, delayTime)
    })

    return (
        showAlert &&
        <div className={`alert alert-${type}`}>
            <span>{message}</span>
            <button className="btn-close" onClick={closeAlert}>x</button>
        </div>
    )
}

export default Alert
