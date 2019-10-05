import React from 'react'

const Guest = () => {
    return (
        <div className="guest-card">
            <div className="card-head">
                <div>
                    <label>Confirmed 
                        <i className="fas fa-check-square">
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
                <h2>John Doe</h2>
                <span className="badge red">Small Chops</span>
                <div className="contact">
                    <i className="fas fa-phone-alt"/>
                    <p>09012345678</p>
                </div>
            </div>
        </div>
    )
}

export default Guest