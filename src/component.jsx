import { useState } from 'react'
import './component.css'
import { Data } from './data'
function Component({ colorOne, colorTwo }) {
    const [color, setColor] = useState(true)
    const colors = {
        backgroundColor: color ? colorOne : colorTwo,
        color: color ? colorTwo : colorOne,
    }
    return (
        <div className='container'>
            <div
                className="card-wrapper"
                style={colors}
            >
                <div className="card-header">
                    <h2 className="card-title">{Data.title}</h2>
                    <h3 className="card-subtitle">{Data.subtTitle}</h3>
                </div>
                <div className="card-body">
                    <img className='image' src={require(`${Data.image}`)} alt="machu" />
                    <div className="card-body">{Data.cardBody}</div>
                    <button
                        style={colors}
                        onClick={() => setColor(!color)}
                        className='card-button'
                    >Change color</button>
                </div>
            </div>
        </div>
    )
}
export default Component