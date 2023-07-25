import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiSuperHero = () => {
    let [state, setState] = useState([])

    useEffect(() => {
        axios.get("https://akabab.github.io/superhero-api/api/all.json")
            .then((res) => setState(res.data))

    }, [])
    console.log(state)
    return (
        <div className='grid'>
            {state.map((elem) => {
                let { id, name, slug, appearance, powerstats, images } = elem
                return (
                    <div className='shl'>
                        <ul>
                            <li> Id:{id}</li>
                            <li> Name:{name}</li>
                            <li> Slug:{slug}</li>
                            <li><img src={images.sm} alt="img" /> </li>
                            <li><ol>
                                <span><u>Appearance</u> </span>
                                <li>Gender :{appearance.gender}</li>
                                <li>Race:{appearance.race}</li>
                                <li>Height:{appearance.height[0]}</li>
                                <li>Weight:{appearance.weight[1]}</li>
                            </ol></li>
                            <li><ol>
                                <span><u><i>Powerstats</i> </u> </span>
                                <li>Intelligence:{powerstats.intelligence}</li>
                                <li>Stewngth:{powerstats.strength}</li>
                                <li>Speed:{powerstats.speed}</li>
                                <li>Durability:{powerstats.durability}</li>
                                <li>Power:{powerstats.power}</li>
                                <li>Combat:{powerstats.combat}</li>
                            </ol></li>
                        </ul>
                    </div>

                )
            })}
        </div>
    )
}

export default ApiSuperHero
