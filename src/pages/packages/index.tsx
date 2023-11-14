import { useState } from 'react'
import './index.css'
import { Card } from '../../components/PackageCard'
import { usePackageData } from '../../hooks/usePackageData'
import { CreateModal } from '../../components/Package-modal'

function Packages(){
const { data } = usePackageData();
const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    
    <div className="container">
    <h1>Pacotes de Viagem</h1>
    <div className="card-grid">
      {data?.map(packageData => 
        <Card
          price={packageData.price} 
          title={packageData.title} 
          image={packageData.image}
          description={packageData.description}
        />
      )}
    </div>
    {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button className="button" onClick={handleOpenModal}><span>Novo</span></button>
  </div>
  )

}

export default Packages