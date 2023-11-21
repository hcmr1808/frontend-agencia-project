import { useState } from 'react'
import '../packages/index.css'
import { useAccommodationData } from '../../hooks/useAccommodationData'
import { CardAccommodation } from '../../components/AccommodationCard'
import { AccommodationModal } from '../../components/Accommodation-modal'
import styled from 'styled-components'

const StyledTitle = styled.h1`
font-family: Arial, Helvetica, sans-serif;

`

function Accommodations(){
const { data } = useAccommodationData();
const [isModalOpen, setIsModalOpen] = useState(false);



  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    
    <div className="container">
    <StyledTitle>Hospedagens</StyledTitle>
    <div className="card-grid">
      {data?.map(accommodationData => 
        <CardAccommodation
          id_accommodation={accommodationData.id_accommodation}
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