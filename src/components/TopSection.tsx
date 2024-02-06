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
          className="mx-auto block w-[60%]"
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
        <div className="text-center bg-[#083800] text-[42px] font-bold family-Inter h-full">
          <div className="container mx-auto px-[19px] xl:px-0">
            <div className="pt-[72px] pb-[52px] tracking-[-1.56px] leading-[100%]">
              <h1 className="text-[#7CC770]">That one simple trick</h1>
              <h2 className="text-white">for your health &amp; happiness</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[32px] pb-[88px]">
              <a
                href="https://lifehacker.com/living-near-happy-friends-has-the-greatest-effect-on-yo-1736728928"
                target="_blank"
              >
                <div className="min-h-[220px] lg:min-h-[304px] flex flex-col text-left bg-white rounded-[24px] p-[24px] text-[24px] font-bold leading-[120%] tracking-[-0.48px]">
                  {" "}
                  “Living near happy friends has the greatest effect on your own
                  happiness”{" "}
                  <div className="mt-auto">
                    <img
                      src="/assets/Property 1_image 7-746e0784.svg"
                      alt="lifehacker"
                    />
                  </div>
                </div>
              </a>
              <a
                href="https://www.theatlantic.com/family/archive/2023/03/neighbors-friendship-happiness/673352/"
                target="_blank"
              >
                <div className="min-h-[220px] lg:min-h-[304px] flex flex-col text-left bg-white rounded-[24px] p-[24px] text-[24px] font-bold leading-[120%] tracking-[-0.48px]">
                  {" "}
                  “Live closer to your friends”{" "}
                  <div className="mt-auto">
                    <img
                      src="/assets/Property 1_image 8-ed1409ac.svg"
                      alt="the atlantic"
                    />
                  </div>
                </div>
              </a>
              <a
                href="https://annehelen.substack.com/p/youd-be-happier-living-closer-to"
                target="_blank"
              >
                <div className="min-h-[220px] lg:min-h-[304px] flex flex-col text-left bg-white rounded-[24px] p-[24px] text-[24px] font-bold leading-[120%] tracking-[-0.48px]">
                  {" "}
                  “You'd be happier living closer to friends. Why don't you?”{" "}
                  <div className="mt-auto">
                    <img
                      src="/assets/Property 1_image 9-55a90c60.svg"
                      alt="culture study"
                    />
                  </div>
                </div>
              </a>
              <a
                href="https://www.bloomberg.com/news/articles/2023-07-15/it-s-time-we-design-a-15-minute-city-for-friendship"
                target="_blank"
              >
                <div className="min-h-[220px] lg:min-h-[304px] flex flex-col text-left bg-white rounded-[24px] p-[24px] text-[24px] font-bold leading-[120%] tracking-[-0.48px]">
                  {" "}
                  “Living close to friends matters”{" "}
                  <div className="mt-auto">
                    <img
                      src="/assets/New_Bloomberg_Logo-5389c6ca.svg"
                      alt="bloomberg"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
