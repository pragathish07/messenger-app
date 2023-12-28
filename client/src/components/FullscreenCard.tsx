import { ReactNode } from "react"

type FullscreenCardProps = {
    children: ReactNode
}
function FullscreenCard({ children }:FullscreenCardProps) {
  return (
    <div>
        <div>{children}</div>
    </div>
  )
}

FullscreenCard.body = ({children}:FullscreenCardProps) =>{
    return <div>{children}</div>
}

FullscreenCard.belowCard = ({children}:FullscreenCardProps) =>{
    return <div>{children}</div>
}


export default FullscreenCard