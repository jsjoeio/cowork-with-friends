function Button() {
  return (
    <div>
      <div className="inline-block relative z-[2] w-full xl:w-auto xl:w-[300px]">
        <a
          href="https://forms.reform.app/WR4x5f/cwf-signup-form/41rn5c"
          target="_blank"
          className="border-2 border-light-green relative z-2 w-full text-[18px] z-1 font-bold rounded-full flex justify-center text-center whitespace-nowrap"
          style={{ padding: "18px 40px" }}
        >
          <span className="relative flex gap-x-2">
            {/**/}
            <span className="text-white">Let's do it</span>
          </span>
        </a>
        <span className="block absolute z-[-2] w-full h-full bottom-[-4px] right-[-4px] rounded-full bg-dark-green" />
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <div>
      <h1 className="text-dark-green text-[52px] text-center xl:text-left xl:text-[80px] font-black tracking-tight leading-[90%]">
        {" "}
        Cowork wtih friends <span className="text-white">near you</span>
      </h1>
      <p className="relative text-dark-green text-center text-2xl xl:text-3xl xl:text-left max-w-full xl:max-w-[520px] font-bold leading-[115%] mt-8 xl:mt-10 mb-8 xl:mb-11">
        {" "}
        We make remote work more fun by helping you cowork with friends local to
        you.{" "}
      </p>
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_160px] gap-[8px] items-center mb-[40px] xl:mb-[70px]">
        <Button />
      </div>
    </div>
  )
}
