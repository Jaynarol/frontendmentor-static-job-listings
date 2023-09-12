import { FC } from 'react'
import Badge from '@/components/Badge'

export type CardProps = {
  id: number
  company: string
  logo: string
  new: boolean
  featured: boolean
  position: string
  role: string
  level: string
  postedAt: string
  contract: string
  location: string
  languages: Array<string>
  tools: Array<string>
}

const Card: FC<CardProps> = (props) => {
  const {
    logo,
    new: isNew,
    featured: isFeatured,
    company,
    position,
    postedAt,
    contract,
    location,
    role,
    level,
    languages,
  } = props
  const tags = [role, level, ...languages]

  return (
    <div
      className={`${
        isFeatured ? 'border-primary border-l-[6px]' : ''
      } flex w-full min-w-[300px] flex-col rounded-md bg-white p-7 shadow-lg`}
    >
      <picture>
        <img
          src={logo}
          alt={`${company} logo`}
          className="-mt-14 h-14 rounded-full"
        />
      </picture>
      <div className="mt-3 flex flex-col gap-2">
        <div>
          <h1 className="text-primary mr-6 inline text-lg font-bold">
            {company}
          </h1>
          {isNew && <Badge type="new" />}
          {isFeatured && <Badge type="featured" />}
        </div>
        <h2 className="text-lg font-bold">{position}</h2>
        <p className="text-primary">
          {postedAt}
          &nbsp;&nbsp;•&nbsp;&nbsp;
          {contract}
          &nbsp;&nbsp;•&nbsp;&nbsp;
          {location}
        </p>
      </div>
      <hr className="bg-primary my-5 h-px border-0" />
      <div className="flex flex-wrap gap-2">
        {tags.map((text) => (
          <Badge key={text} type="tag">
            {text}
          </Badge>
        ))}
      </div>
    </div>
  )
}

export default Card
