import React from 'react'
import dinos from '../data/dinos'
import secondDino from '../data/dinos'
import {Link} from 'react-router-dom'
import { getDinos } from '../api'

export default class DinoList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dinos: []
        }
    }

    componentDidMount () {
        getDinos()
            .then(data => {
                this.setState({dinos: data})
                console.log(data)
            })
            .catch(err => {
                res.status(500).send(err.message)
            })
    }

    render () {
        return (
            <ul>
            {this.state.dinos.map((dino, id) => {
                return <li key={id}>
                    <Link to={`/tamedDinos/${dino.id}`}>{dino.name} ({dino.level})</Link>
                    {secondDino.map((dino2, id) => {
                        return <Link key={id} to={`/tamedDinos/${dino.id}/${dino2.id}`}><p>Compare</p></Link>
                    })}
                    </li>
            })}
            </ul>
        )
    }
}