import React from 'react'

const Guest = ({guest}) => {
    const {name, phone, email, chow, drink, isConfirmed} = guest
    return (
        <div className="guest-card">
            <div className="card-head">
                <div>
                    <label className={`${isConfirmed && 'confirm'}`}>Confirmed 
                        <i className={`fas fa-check-square ${isConfirmed && 'confirm'}`}>
                            <input type="checkbox" />
                        </i>
                    </label>
                </div>
                <div>
                    <button>
                        <i className="fas fa-user-edit"></i>
                    </button>
                    <button>
                        <i className="fas fa-trash-alt remove"></i>
                    </button>
                </div>
            </div>
            <div className="card-body">
                <h2>{name}</h2>
                <span className={'badge ' + (chow === 'Small-Chops' ? 'red' : chow === 'Continental' ? 'green' : 'seaGreen')}>{chow}</span>
                
                <div className="contact">
                    <i className="fas fa-phone-alt"/>
                    <p>{phone}</p>
                </div>
            </div>
        </div>
    )
}

export default Guest