import React, {useContext} from 'react'
import GuestContext from '../../context/guestContext/guestContext'
const GuestCounter = () => {
    const {guests} = useContext(GuestContext)
    const totalInvited = guests.length
    const attending = guests.filter(guest=>guest.isConfirmed)
    const totalAttending = attending.length
    const invitedByChow = (type) => guests.filter(guest => guest.chow === type).length
    const attendingByChow = (type) => attending.filter(guest => guest.chow === type).length
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>eVitee</th>
                        <th>Invited</th>
                        <th>Attending</th>
                    </tr>
                    <tr>
                        <th>Small-Chops</th>
                        <td>{invitedByChow('Small-Chops')}</td>
                        <td>{attendingByChow('Small-Chops')}</td>
                    </tr>
                    <tr>
                        <th>Continental</th>
                        <td>{invitedByChow('Continental')}</td>
                        <td>{attendingByChow('Continental')}</td>
                    </tr>
                    <tr>
                        <th>African (Swallow)</th>
                        <td>{invitedByChow('African')}</td>
                        <td>{attendingByChow('African')}</td>
                    </tr>
                    <tr>
                        <th>Total</th>
                        <td>{totalInvited}</td>
                        <td>{totalAttending}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default GuestCounter