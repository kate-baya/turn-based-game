import React from 'react'
import dinos from '../data/dinos'

function ChosenDino (props) {
    const dino = dinos.find(dino => {
        return dino.id == props.match.params.id
    })

    return (
        <div>
            <h5>{dino.name}</h5>
            <p>Level: {dino.level}</p>
            <p>Type: {dino.type}</p>
            <p>Sex: {dino.sex}</p>
            <div>
                {dino.stats.map((stat, key) => {
                    return <p key={key}>{stat.statType}: {stat.points}</p>
                })}
            </div>
        </div>
    )
}

export default ChosenDino