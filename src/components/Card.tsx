import { FC } from 'react'
import Badge from '@/components/Badge'
import Tag from '@/components/Tags'

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
    tools,
  } = props

  const tags = [role, level, ...languages, ...tools]
  const featuredBorderClass = isFeatured
    ? 'border-l-[6px] border-primary md:border-l-[4px]'
    : ''

  return (
    <div
      className={`${featuredBorderClass} flex w-full min-w-[300px] max-w-6xl flex-col rounded-md bg-white p-7 shadow-lg md:flex-row md:justify-between`}
    >
      <div className="flex flex-col md:flex-row">
        <picture className="md:flex-none">
          <img
            src={logo}
            alt={`${company} logo`}
            className="-mt-14 h-14 rounded-full md:mt-auto md:h-full md:w-full md:p-1"
          />
        </picture>

        <div className="mt-3 flex flex-col gap-2 md:ml-5 md:mt-0">
          <div className="flex items-baseline gap-3">
            <h1 className="mr-4 inline text-lg font-bold text-primary">
              {company}
            </h1>
            {isNew && <Badge type="new" />}
            {isFeatured && <Badge type="featured" />}
          </div>

          <h2 className="text-lg font-bold duration-100 hover:cursor-pointer hover:text-primary">
            {position}
          </h2>
          <p className="text-primary">
            {postedAt}
            &nbsp;&nbsp;•&nbsp;&nbsp;
            {contract}
            &nbsp;&nbsp;•&nbsp;&nbsp;
            {location}
          </p>
        </div>
        <hr className="my-5 h-px border-0 bg-primary md:hidden" />
      </div>

      <div className="flex flex-wrap gap-2 md:flex-1 md:justify-end md:self-center">
        {tags.map((text) => (
          <Tag key={text} text={text} />
        ))}
      </div>
    </div>
  )
}

export default Card
