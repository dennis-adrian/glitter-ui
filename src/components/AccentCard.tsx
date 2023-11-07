import './AccentCard.scss'

type Props = {
  children: React.ReactNode,
  styles?: React.CSSProperties,
}

const AccentCard = ({ children, styles }: Props) => {
  return (
    <div className='accent-card' style={styles} >{children}</div>
  )
}

export default AccentCard