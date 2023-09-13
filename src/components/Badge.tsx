import { FC } from 'react'

type BadgeProps = {
  type: 'new' | 'featured'
}

const Badge: FC<BadgeProps> = ({ type }) => {
  const className = {
    new: 'bg-primary text-secondary-light rounded-l-full rounded-r-full',
    featured:
      'bg-secondary-dark text-secondary-light rounded-l-full rounded-r-full',
  }

  return (
    <span className={`${className[type]} px-2 pt-1 font-bold`}>
      {type === 'new' && 'NEW!'}
      {type === 'featured' && 'FEATURED'}
    </span>
  )
}

export default Badge
