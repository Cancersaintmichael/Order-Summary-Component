import IllustrationHero from "./assets/illustration-hero.svg";

function App() {
  return (
    <div className="App">
      <div className="bg-pattern-desktop bg-pattern bg-repeat-x h-screen flex justify-center items-center">
        <div className="rounded-[16px] shadow-lg bg-white overflow-hidden max-w-[400px]">
          <div>
            <img src={IllustrationHero} alt="Hero illustration" />
          </div>
          <div className="p-8">
            <div className="px-8 flex flex-col gap-2">
              <h1 className="capitalize text-dark-blue font-black text-2xl text-center">
                Order summary
              </h1>
              <p className="text-center text-gray-400 text-sm">
                You can now listen to millions of songs, audiobooks, and
                podcasts on any device anywhere you like!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
