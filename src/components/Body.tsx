
interface HeroProps {
  onNavigate: (page: string) => void;
}

function Hero({ onNavigate }: HeroProps) {
    return (
        <div>
            <div className="relative h-screen ">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-5xl lg:text-9xl text-black bg-white rounded px-5 font-bold">BOTTOM TEXT</h1>
                    
                    
                </div>
            </div>
        </div>

    )
}

export default Hero