import IllustrationHero from "./assets/illustration-hero.svg";
import IconMusic from "./assets/icon-music.svg";

function App() {
  return (
    <div className="App">
      <div className="xs:bg-pattern-desktop bg-pattern-mobile bg-pattern bg-repeat-x absolute h-full w-full flex justify-center items-center">
        <div className="rounded-2xl shadow-lg bg-white overflow-hidden max-w-[400px] min-w-[375px] mx-6">
          <div>
            <img src={IllustrationHero} alt="Hero illustration" />
          </div>
          <div className="xs:px-8 xs:py-10 p-8">
            <div className="px-4 flex flex-col gap-2 mb-5">
              <h1 className="capitalize text-dark-blue font-black text-2xl text-center">
                Order summary
              </h1>
              <p className="text-center text-desaturated-blue text-base font-medium tracking-wider">
                You can now listen to millions of songs, audiobooks, and
                podcasts on any device anywhere you like!
              </p>
            </div>
            <div className="rounded-xl bg-very-pale-blue flex justify-between px-6 py-4 mb-7">
              <div className="flex gap-4">
                <img src={IconMusic} alt="Icon music" />
                <dl>
                  <dt className="capitalize text-dark-blue font-extrabold">Annual plan</dt>
                  <dd className="text-desaturated-blue">$59.99/year</dd>
                </dl>
              </div>
              <div className="flex items-center">
                <button className="text-bright-blue font-bold underline text-sm transition-all hover:text-bright-blue/80 hover:no-underline">Change</button>
              </div>
            </div>
            <div className="mb-7"><button className="bg-bright-blue text-white font-bold w-full rounded-lg xs:py-4 py-3 text-[15px] drop-shadow-2xl tracking-wider transition-colors hover:bg-bright-blue/80">Proceed to Payment</button></div>
            <div className="text-center">
              <button className="font-black text-desaturated-blue text-base capitalize text-[15px] transition-colors hover:text-dark-blue">Cancel order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
