import Link from 'next/link'
import { useEffect, useState } from 'react'
// import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router'

export default function Car() {
    const router = useRouter()
    const { carId } = router.query
    const [car, setCar] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        let componentMounted = true
        if (carId != null) {
            fetchData(carId).then(car => {
                if (componentMounted) {
                    let fetchData = async (carId) => {
                        const response = await fetch(`https://api.staging.myautochek.com/v1/inventory/car/${carId}`);
                        const data = await response.json();
                        return data;
                    }

                    setCar(fetchData())
                    setLoading(false)
                }
            })
        }
        return () => { componentMounted = false }
    }, [carId])
    console.log(car)
    return (
        <div className='container'>
            {!loading && (
                <>
                    <h1>{car.year}-{car.carName}</h1>
                    <div>
                        <img alt={car.id} src={car.country} />
                        <p>{car.transmission}</p>
                    </div>
                </>
            )}
        </div>
    )
}