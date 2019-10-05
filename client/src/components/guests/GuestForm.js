import React from 'react';

const GuestForm = () => {
    return (
        <div className="invite-section">
            <h1>Send e-Vite</h1>
            <form>
                <input type="text" placeholder="Full Name" name="fullname"/>
                <input type="text" placeholder="Phone" name="phone" />
                <input type="email" placeholder="Email Address" name="email" />
                <p className="options-label">Chow...</p>
                <div className="options">
                    <label className="container">Small Chops 
                        <input type="radio" name="chow" Value="Small-Chops" />
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">Continental
                        <input type="radio" name="chow" Value="Continental"/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">African (Swallow)
                        <input type="radio" name="chow" Value="African" />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <p className="options-label">What's your poison...</p>
                <div className="options">
                    <label className="container">Non-Acoholic
                        <input type="radio" name="drink" Value="Non-Acoholic"/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">Spirits
                        <input type="radio" name="drink" Value="Spirits"/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">Wines
                        <input type="radio" name="drink" Value="Wines"/> 
                        <span className="checkmark"></span>
                    </label>
                </div>
                <input type="submit" value="Add eVitee" className="btn" />
            </form>
        </div>
    )
}

export default GuestForm;