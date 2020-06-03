import React, { useState, useContext, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom';

import Context from '../utils/context';
import StyledPrestations from '../styles/StyledPrestations';
import { FormContact } from '../components/FormContact/FormContact';
import { ItemPrestation } from '../components/ItemPrestation/ItemPrestation';

const optionsWeb = [
    {
        id: '0',
        name: 'Intégration Web',
        checked: false
    },
    {
        id: '1',
        name: 'Modification(s) Web',
        checked: false
    },
    {
        id: '2',
        name: 'Ajout de fonctionnalité(s)',
        checked: false
    },
    {
        id: '3',
        name: 'Mise en place d\'un CMS',
        checked: false
    },
    {
        id: '4',
        name: 'Mise en place d\'un tableau de bord',
        checked: false
    },
    {
        id: '5',
        name: 'Responsive Tablette et Mobile',
        checked: false
    },
    {
        id: '6',
        name: 'Correction de bugs',
        checked: false
    },
    {
        id: '7',
        name: "Refonte complète",
        checked: false
    },
    {
        id: '8',
        name: "Mise en place d'une base de donnée",
        checked: false
    },
    {
        id: '9',
        name: "Service mail avec nom de domaine pro",
        checked: false
    },
    {
        id: '10',
        name: "Migration technologique",
        checked: false
    },
    {
        id: '11',
        name: "Système d'authentification",
        checked: false
    },
    {
        id: '12',
        name: "Checkup complet",
        checked: false
    },
    {
        id: '13',
        name: "SEO Référencement Naturel",
        checked: false
    },
    {
        id: '14',
        name: "Maintenance",
        checked: false
    },
    {
        id: '15',
        name: "Autres",
        checked: false
    },
]

const optionsDesign = [
    {
        id: '0',
        name: 'Étude et création d\'un Logo',
        checked: false
    },
    {
        id: '1',
        name: 'Charte Graphique',
        checked: false
    },
    {
        id: '2',
        name: 'Bannières',
        checked: false
    },
    {
        id: '3',
        name: 'Carte de visite',
        checked: false
    },
    {
        id: '4',
        name: 'Mockup',
        checked: false
    },
    {
        id: '5',
        name: 'Wireframe',
        checked: false
    },
    {
        id: '6',
        name: 'Animation Logo / Bannière',
        checked: false
    },
    {
        id: '7',
        name: "Autres",
        checked: false
    }
]

export const Prestations = () => {
    const { setLocation } = useContext(Context)
    const [openForm, setOpenForm] = useState(false)
    const [prestaWeb, setPrestaWeb] = useState(optionsWeb)
    const [prestaDesign, setPrestaDesign] = useState(optionsDesign)
    const [prestaChecked, setPrestaChecked] = useState([])
    const [valueForm, setValueForm] = useState('')
    const location = useLocation()


    const handleOpenForm = () => {
        setOpenForm(!openForm)
    }

    const handleChecked = (i, type) => {
        if (type === 'web') {
            const clonePrestaWeb = [...prestaWeb]
            const newValue = !clonePrestaWeb[i].checked
            clonePrestaWeb[i].checked = newValue
            if (clonePrestaWeb[i].checked) {
                setPrestaChecked([
                    ...prestaChecked,
                    prestaWeb[i].name
                ])
            } else {
                const cloneChecked = [...prestaChecked]
                const index = cloneChecked.indexOf(clonePrestaWeb[i].name);
                    if (index >= 0) {
                        cloneChecked.splice(index, 1);
                        setPrestaChecked(cloneChecked)
                    }
            }
            return setPrestaWeb(clonePrestaWeb)
        }
        if (type === 'design') {
            const clonePrestaDesign = [...prestaDesign]
            const newValue = !clonePrestaDesign[i].checked
            clonePrestaDesign[i].checked = newValue
            if (clonePrestaDesign[i].checked) {
                setPrestaChecked([
                    ...prestaChecked,
                    prestaDesign[i].name
                ])
            } else {
                const cloneChecked = [...prestaChecked]
                const index = cloneChecked.indexOf(clonePrestaDesign[i].name);
                    if (index >= 0) {
                        cloneChecked.splice(index, 1);
                        setPrestaChecked(cloneChecked)
                    }
            }
            return setPrestaDesign(clonePrestaDesign)
        }
    }    

    useEffect(() => {
        setLocation(location.pathname)
    }, [])

    useEffect(() => {
        if (prestaChecked.length !== 0) {
            let autresPresta;
            if (prestaChecked.includes('Autres')) {
                autresPresta = ' + VOUS AVEZ SÉLÉCTIONNER UNE AUTRE PRESTATION, MERCI DE NOUS DÉTAILLER VOTRE BESOIN.'
                const listePresta = prestaChecked.join(' - ').replace('- Autres', '').replace('Autres', '')
                return setValueForm('Bonjour, je suis intéressé par les prestations suivantes : - ' + listePresta + autresPresta)
            } else {
                const listePresta = prestaChecked.join(' - ')
                return setValueForm('Bonjour, je suis intéressé par les prestations suivantes : - ' + listePresta)
            }
        } else {
            return setValueForm('')
        }
    }, [prestaChecked])

    return (
        <StyledPrestations>
            <Link to='/'>
                <svg width="21" height="31" viewBox="0 0 21 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.0571 1.00001L1 15.5L20.0571 30" stroke="#F0F0F0"/>
                </svg>
            </Link>
            <img className='bg' alt='background' src='https://i.goopics.net/GKkNa.jpg' />
            <div className='container-h1prest'>
                <h1>NOS PRESTATIONS</h1>
            </div>
            <section className='wrapper-sections'>
                <section className='container-web'>
                    <div className='container-h2'>
                        <h2>WEB & MOBILE</h2>
                    </div>
                    <div className='container-items'>
                        {
                            prestaWeb.map((option) => {
                                return <ItemPrestation key={option.id} id={option.id} type={'web'} handleChecked={handleChecked} checked={option.checked} name={option.name} />
                            })
                        }
                    </div>
                </section>
                <section className='container-design'>
                    <div className='container-h2'>
                        <h2>DESIGN</h2>
                    </div>
                    <div className='container-items'>
                        {
                            prestaDesign.map((option) => {
                                return <ItemPrestation key={option.id} type={'design'} id={option.id} handleChecked={handleChecked} checked={option.checked} name={option.name} />
                            })
                        }
                    </div>
                </section>
            </section>
            <button className='btn-prest' style={openForm ? {right: '720px', transform: 'translate(180deg)'} : null} onClick={handleOpenForm}>
                {
                    openForm ?
                        <svg width="21" height="31" viewBox="0 0 21 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.400004 0.999998L20 15.5L0.4 30" stroke="#F0F0F0"/>
                        </svg>
                    :
                        <svg width="21" height="31" viewBox="0 0 21 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.0571 1.00001L1 15.5L20.0571 30" stroke="#F0F0F0"/>
                        </svg>
                }
            </button>
            <section style={openForm ? {width: '720px'} : null} className='section-form'>
                <FormContact title={'DEMANDER UN DEVIS'} value={valueForm} />
            </section>
            <div className='wrapper-btn'>
                <button onClick={handleOpenForm}>DEMANDER UN DEVIS</button>
            </div>
        </StyledPrestations>
    )
}
