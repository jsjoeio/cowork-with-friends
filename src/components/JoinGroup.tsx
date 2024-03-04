type Props = {
  link: string
  text: string
}

export function JoinGroup({ link, text }: Props) {
  return (
    <div className="group">
      <div className="inline-block relative z-[2] w-full xl:w-auto xl:w-[300px]">
        <a
          href={link}
          target="_blank"
          className="border-2 border-light-green relative z-2 w-full text-[18px] z-1 font-bold rounded-full flex justify-center text-center whitespace-nowrap hover:bg-dark-orange group-hover:border-light-orange"
          style={{ padding: "18px 40px" }}
        >
          <span className="relative flex gap-x-2">
            {/**/}
            <span className="text-white">{text}</span>
          </span>
        </a>
        <span className="block absolute z-[-2] w-full h-full bottom-[-4px] right-[-4px] rounded-full bg-dark-green group-hover:bg-dark-orange" />
      </div>
    </div>
  )
}
