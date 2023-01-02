import {useEffect, useState} from "react";
import {AccessKey, BasicUrl, DefaultCity} from "./const";
import axios from "axios";
import "./CityInput.scss"

const CityInput = ({cbUpdateImages}) => {
    const [city, setCity] = useState(DefaultCity)
    const [images, setImages] = useState([])
    const cbInput = e => {
        let newCity =e.target.value.trim().toLowerCase()
        e.key === "Enter" && newCity !== city &&
        (()=>{
            setCity(newCity)
           fechCity(newCity)
        })()
    }
    useEffect(()=>{fechCity(DefaultCity)
    }, [])

    const fechCity = (newCity) => {
        axios.get(BasicUrl, {
            params: {
                query: newCity,
                orientation: "landscape",
            },
            headers: {
                Authorization: `Client-ID ${AccessKey}`
            }
        }).then(res => {
            console.log("raw data", res)
            let {data: {results}} = res
            let imageList = results.map(
                item => ({
                    des: item.alt_description,
                    regular: item.urls.regular,
                    thumb: item.urls.thumb
                })
            )
            console.log("tidyList", imageList)
            setImages(imageList)
            cbUpdateImages(imageList)
        }).catch(err => console.log("Catch error", err))
    }

    return(
        <>
        <input className="inputCity" placeholder="Search City here..." onKeyDown={cbInput}/>
        </>
    )
}

export default CityInput