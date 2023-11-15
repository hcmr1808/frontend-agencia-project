import { useState } from 'react'
import '../packages/index.css'
import { useAccommodationData } from '../../hooks/useAccommodationData'
import { CardAccommodation } from '../../components/AccommodationCard'
import { AccommodationModal } from '../../components/Accommodation-modal'

function Accommodations(){
const { data } = useAccommodationData();
const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    
    <div className="container">
    <h1>Hospedagens</h1>
    <div className="card-grid">
      {data?.map(accommodationData => 
        <CardAccommodation
          name={accommodationData.name} 
          street={accommodationData.street} 
          district={accommodationData.district}
          number={accommodationData.number}
          image={accommodationData.image}
        />
      )}
    </div>
    {isModalOpen && <AccommodationModal closeModal={handleOpenModal}/>}
      <button className="button" onClick={handleOpenModal}><span>Novo</span></button>
  </div>
  )

}

export default Accommodations;