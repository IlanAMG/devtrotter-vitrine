import React from 'react'
import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
    return (
        <div>
            <h1>PAGE INTROUVABLE</h1>
            <Link to='/'>PAGE D'ACCUEIL</Link>
        </div>
    )
}
