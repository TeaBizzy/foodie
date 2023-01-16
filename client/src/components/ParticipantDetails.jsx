import { FaUserAlt, FaPlusCircle, FaMinusCircle } from 'react-icons/fa'
import "./ParticipantDetails.css"

export default function ParticipantDetails(props) {
  const { invites, setInvites } = props;

  function drawInviteInputs() {
    if(invites.length === 1) {
      return
    }

    const components = [];

    for(let i = 1; i < invites.length; i++) {
      components.push(
        <div className="users">
          <input className="default" placeholder="Email" value={invites[i]} onChange={e => setInvites(prev => {
          const a = [...prev]
          a[i] = e.target.value
          return a
          })}/>
          <FaMinusCircle
            className="minus-circle"
            onClick={() => {
              setInvites(prev => {
                const a = [...prev]
                a.splice(i, 1)
                return a
              })
            }} 
          />
        </div>
      )
    }

    return components
  }

  return (
    <div className="participant-container">
      <FaUserAlt size={60} style={{color: '#8E8E8E'}}/>
      <div className="participant-selection">
        <h1 className="participants-h1">Who?</h1>
        <div className="users">
          <input className="default" placeholder="Email" value={invites[0]} onChange={e => setInvites(prev => {
            const a = [...prev]
            a[0] = e.target.value
            return a
          })}/>
        </div>
        {drawInviteInputs()}
        {invites.length < 4 &&
          <FaPlusCircle 
            className="plus-circle"
            onClick={() => {
            setInvites(prev => [...prev, ''])
            }} 
          />
        }
      </div>
    </div>
  )
}
