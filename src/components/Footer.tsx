export function Footer() {
  return (
    <div className="grow-0">
      <footer className="bg-dark-orange">
        <div className="container mx-auto px-[19px] xl:px-0">
          <div className="border-b border-black opacity-60 w-full" />
          <div className="grid grid-cols-1 gap-[24px] xl:gap-0 text-center xl:text-left xl:grid-cols-3 text-black opacity-60 text-[16px] justify-between py-[24px] font-normal">
            <div className="order-3 xl:order-1">
              © Cowork With Friends {new Date().getFullYear()}
            </div>
            <div className="order-1 xl:order-2 text-center space-x-2">
              <div>Wanna bring it to your city?</div>
              <div>
                {" "}
                We’d love to hear from you:{" "}
                <a
                  href="mailto:hello@coworkwithfriends.com"
                  className="underline"
                >
                  hello@coworkwithfriends.com
                </a>
              </div>
            </div>
            <div className="order-2 xl:order-3 text-right flex xl:block flex-col items-center">
              <a
                href="mailto:hello@coworkwithfriends.com?subject=Interested%20in%20Sponsoring"
                target="_blank"
                className="ml-0 xl:ml-[24px]"
              >
                Sponsor
              </a>

              <a href="/privacy" className="ml-0 xl:ml-[24px]">
                Privacy policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
