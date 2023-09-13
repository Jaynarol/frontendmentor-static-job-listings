import { FC } from 'react'

type Props = {
  text: string
  isOnFilterPanel?: boolean
}

const Tag: FC<Props> = ({ text, isOnFilterPanel = false }) => {
  const dynamicClass = isOnFilterPanel
    ? 'hover:cursor-default'
    : 'rounded-r-md hover:bg-primary hover:text-secondary-light'

  return (
    <div>
      <button
        className={`${dynamicClass} rounded-l-md bg-secondary-light px-2 pt-1 text-lg font-bold text-primary duration-200`}
      >
        {text}
      </button>
      {isOnFilterPanel && (
        <button className="rounded-r-md bg-primary px-2 pt-1 text-lg text-secondary-light duration-200 hover:bg-secondary-dark hover:text-secondary-light">
          ✖
        </button>
      )}
    </div>
  )
}

export default Tag
