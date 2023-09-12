import { FC, PropsWithChildren } from 'react'

type BadgeProps = {
  type: 'new' | 'featured' | 'tag'
}

const Badge: FC<BadgeProps & PropsWithChildren> = ({ type, children }) => {
  const className = {
    new: 'bg-primary text-secondary-light rounded-l-full rounded-r-full',
    featured:
      'bg-secondary-dark text-secondary-light rounded-l-full rounded-r-full',
    tag: 'bg-secondary-light text-primary rounded-l-md rounded-r-md text-lg',
  }

  return (
    <span className={`${className[type]} px-2 pt-1 font-bold`}>
      {type === 'new' && 'NEW!'}
      {type === 'featured' && 'FEATURED'}
      {children}
    </span>
  )
}

export default Badge
