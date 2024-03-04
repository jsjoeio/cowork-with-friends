type GroupCardProps = {
  name: string
  location: string
  description: string
  image: {
    url: string
    alt: string
  }
  acceptingMembers: boolean
  isNew: boolean
  slug: string
}
export function GroupCard(props: GroupCardProps) {
  return (
    <a href={`/group/${props.slug}`}>
      <div className="p-4 rounded-[24px] hover:shadow-lg hover:bg-dark-orange flex flex-col items-stretch justify-center xl:flex-row">
        <div id="group-card-left" className="mb-4 xl:mb-0">
          <img
            className="mx-auto block max-w-[400px] rounded-[24px]"
            src={props.image.url}
            alt={props.image.alt}
          />
        </div>
        <div id="group-card-right" className="ml-2">
          {props.isNew && (
            <span className="font-semibold bg-pink rounded-[24px] px-2 py-1">
              New Group
            </span>
          )}
          <h2 className="my-2 font-bold text-2xl">{props.name}</h2>
          <p className="font-normal mt-4 uppercase text-xl">{props.location}</p>
          <p className="text-xl">{props.description}</p>
        </div>
      </div>
    </a>
  )
}
