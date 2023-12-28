import { Outlet } from 'react-router-dom'
import FullscreenCard from '../../components/FullscreenCard'

function Authlayout() {
  return (
    <FullscreenCard>
      <FullscreenCard.body>
      <Outlet/>
      </FullscreenCard.body>
      <FullscreenCard.belowCard>below card</FullscreenCard.belowCard>
    </FullscreenCard>
  )
}

export default Authlayout