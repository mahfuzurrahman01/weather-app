const styling1 = {
  backgroundImage: `url('/weatherCard.jpg')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'
}

const recentSearch = ['Bangladesh', 'Italy', 'France', 'Turkey', 'India', 'Dubai']

export default function Home() {
  return (
    <main
      className="flex min-h-screen w-full flex-col items-center justify-center relative bg-gradient-to-tl bg-opacity-80 bg-orange-600 from-gray-500"
    >
      <div className="flex lg:w-3/4 w-11/12 mx-auto rounded-tl-2xl lg:flex-row flex-col rounded-br-2xl" style={styling1}>

        {/* *******weather details********* */}
        <div className="lg:w-4/6 w-4/5 lg:relative bg-opacity-50 mx-auto lg:h-[560px] h-300px lg:p-0 p-3" >
          <div className="lg:absolute lg:bottom-10 lg:left-0 lg:right-0 text-center flex lg:justify-center justify-between items-center lg:gap-10 gap-1">
            <p className="lg:text-8xl text-5xl font-sans font-semibold text-gray-100 flex items-center">16<sup className="lg:text-5xl text-2xl">o</sup></p>
            <div>
              <p className="lg:text-4xl text-sm text-gray-100">London</p>
              <p className="text-gray-100 lg:text-sm text-xs">06:09 PM, Monday</p>
            </div>
            <div className="text-md text-gray-200">
              <p className="lg:text-lg text-sm font-light">cloudy</p>
              <small>Lorem, ipsum.</small>
            </div>
          </div>
        </div>

        {/* *********** extra info ************* */}
        <div className="flex-grow bg-opacity-70 bg-slate-600 rounded-br-2xl p-4 relative">
          <div className="w-full p-2">
            <input type="text" className="w-[80%] bg-transparent border rounded-md px-2 py-1 border-gray-100" placeholder="Search here" />
            <button className="w-[18%] py-1 ml-1 bg-white text-amber-600 rounded">Search</button>
          </div>
          <div className="my-4 p-2">
            <p className="font-light text-white">Recent search</p>
            <hr />
            <div className="my-3  flex flex-col gap-2">
              {
                recentSearch.map((place: string) => <p key={place} className="cursor-pointer text-gray-100 bg-gray-700 bg-opacity-40 px-3 py-1 rounded hover:bg-gray-200 hover:text-amber-700 hover:scale-105 duration-300">{place}</p>)
              }
            </div>
          </div>
          <div className="absolute lg:bottom-10 bottom-[-60px] left-0 right-0 text-center">
            <small className="text-gray-100">Developed by <span className="text-sm font-light text-amber-700 bg-white p-1 rounded-md">Mahfuzur Rahman</span></small>
          </div>
        </div>
      </div>

    </main>
  );
}








