import { Banner } from "./Banner"
import { CalIcon } from "./CalIcon"
import { Hero } from "./Hero"
import { LogoWithContainer } from "./LogoWithContainer"
import { MapIcon } from "./MapIcon"

function VisualSection() {
  return (
    <div className="mb-[40px] flex flex-col justify-center items-center">
      <div>
        <img
          className="mx-auto block w-[70%]"
          src="/assets/scottsdale-group.png"
          alt="Group of men working from laptops in coffee shop."
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="relative text-dark-green text-center text-2xl xl:text-3xl xl:text-left max-w-full xl:max-w-[520px] font-bold leading-[115%] mt-8 xl:mt-10 mb-2 xl:mb-4">
          Scottsdale Group
        </p>
        <p className="text-xl xl:text-2xl">Hosted by Joe Previte</p>
      </div>
      <div className="mx-auto">
        <div className="flex flex-col items-start">
          <div className="flex flex-row items-center justify-center mt-6">
            <CalIcon />
            <div className="ml-2">
              <p className="font-semibold">Wednesday, February 6</p>
              <p>10:00 AM - 1:00 PM</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center mt-6">
            <MapIcon />
            <div className="ml-2">
              <p className="font-semibold">85253</p>
              <p>a quiet coffee shop</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SecondSection() {
  return (
    <div className="text-center bg-dark-orange text-5xl font-bold h-full">
      <div className="container mx-auto px-5 xl:px-0">
        <div className="pt-20 pb-14 tracking-tighter leading-[100%]">
          <h1 className="text-light-orange">The best way to connect</h1>
          <h2 className="text-white">with your community</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 pb-24">
          <div className="min-h-[220px] lg:min-h-[304px] flex flex-col text-left bg-white rounded-[24px] p-[24px] text-[24px] font-bold leading-[120%] tracking-[-0.48px]">
            {" "}
            “So nice to get out of the house and meet other folks in the
            community.”{" "}
            <div className="mt-auto">
              <p>Brendan L.</p>
            </div>
          </div>
          <div className="min-h-[220px] lg:min-h-[304px] flex flex-col text-left bg-white rounded-[24px] p-[24px] text-[24px] font-bold leading-[120%] tracking-[-0.48px]">
            {" "}
            “I love being remote but miss being around people. Finally getting
            that energy back!”{" "}
            <div className="mt-auto">
              <p>Gehrig K.</p>
            </div>
          </div>
          <div className="min-h-[220px] lg:min-h-[304px] flex flex-col text-left bg-white rounded-[24px] p-[24px] text-[24px] font-bold leading-[120%] tracking-[-0.48px]">
            {" "}
            “I’ve been wanting to meet more people in tech so I was stoked to
            hear about this! It’s so much easier for meeting people”
            <div className="mt-auto">
              <p>Noah Z.</p>
            </div>
          </div>
          <div className="min-h-[220px] lg:min-h-[304px] flex flex-col text-left bg-white rounded-[24px] p-[24px] text-[24px] font-bold leading-[120%] tracking-[-0.48px]">
            {" "}
            “My favorite part about coworking with friends is having an excuse
            to see new parts of the city. Some of these coffee shops were right
            down the street and I had no idea!”{" "}
            <div className="mt-auto">
              <p>Brent L.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function TopSection() {
  return (
    <div className="grow">
      <main className="h-full flex flex-col">
        <Banner />
        <div className="container mx-auto px-5 xl:px-0 bg-light-green">
          <LogoWithContainer />
          <div className="grid grid-cols-1 xl:grid-cols-2">
            <Hero />
            <VisualSection />
          </div>
        </div>
        <SecondSection />
      </main>
    </div>
  )
}
