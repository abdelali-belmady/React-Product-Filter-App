import React from 'react'

export default function Rating(props) {
    return (
        <>
            <span className="badge rounded-pill text-bg-primary">{props.rate} / 5</span>
        </>
    )
}
