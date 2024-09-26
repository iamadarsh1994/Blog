function Home (){
    
    return (
        <div className="p-4 m-4">
            
        {/* <div className="gap-4 columns-3">
            <div className="border-2 border-red-700">box1</div>
            <div className="border-2 border-red-700">box2</div>
            <div className="border-2 border-red-700">box3</div>
            <div className="border-2 border-red-700">box4</div>
            <div className="border-2 border-red-700">box5</div>
            <div className="border-2 border-red-700">box6</div>
            <div className="border-2 border-red-700">box7</div>
            <div className="border-2 border-red-700">box8</div>
            <div className="border-2 border-red-700">box9</div>
        </div> */}
        <div class="cursor-pointer flex flex-row gap-3 mb-3">
            <div class="flex items-center justify-center basis-1/3 bg-black box-border h-16 w-16 hover:bg-emerald-700 rounded-tl-lg outline outline-offset-2 outline-2 transition-all duration-300 ease-in-out transform hover:scale-110">01</div>
            <div class="flex items-center justify-center basis-1/3 bg-black box-border h-16 w-16 hover:bg-emerald-700 outline outline-offset-2 outline-2 transition-all duration-300 ease-in-out transform hover:scale-110">02</div>
            <div class="flex items-center justify-center basis-1/3 bg-black box-border h-16 w-16 hover:bg-emerald-700 rounded-tr-lg outline outline-offset-2 outline-2 transition-all duration-300 ease-in-out transform hover:scale-110">03</div>
        </div>
        <div class="cursor-pointer flex flex-row gap-3 mb-3">
            <div class="flex items-center justify-center basis-1/3 bg-black box-border h-16 w-16 hover:bg-emerald-700 outline outline-offset-2 outline-2 transition-all duration-300 ease-in-out transform hover:scale-110">04</div>
            <div class="flex items-center justify-center basis-1/3 bg-black box-border h-16 w-16 hover:bg-emerald-700 outline outline-offset-2 outline-2 transition-all duration-300 ease-in-out transform hover:scale-110">05</div>
            <div class="flex items-center justify-center basis-1/3 bg-black box-border h-16 w-16 hover:bg-emerald-700 outline outline-offset-2 outline-2 transition-all duration-300 ease-in-out transform hover:scale-110">06</div>
        </div>
        <div class="cursor-pointer flex flex-row gap-3 mb-3">
            <div class="flex items-center justify-center basis-1/3 bg-black box-border h-16 w-16 hover:bg-emerald-700 rounded-bl-lg outline outline-offset-2 outline-2 transition-all duration-300 ease-in-out transform hover:scale-110">07</div>
            <div class="flex items-center justify-center basis-1/3 bg-black box-border h-16 w-16 hover:bg-emerald-700 outline outline-offset-2 outline-2 transition-all duration-300 ease-in-out transform hover:scale-110">08</div>
            <div class="flex items-center justify-center basis-1/3 bg-black box-border h-16 w-16 hover:bg-emerald-700 rounded-br-lg outline outline-offset-2 outline-2 transition-all duration-300 ease-in-out transform hover:scale-110">09</div>
        </div>
        </div>
    )
}

export default Home