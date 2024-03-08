import CalendlyBtn from "@/components/calendlyBtn";
import Chat from "@/components/chat";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 items-center">
      <div className="flex flex-col gap-4 justify-center flex-[1.5_0_0%]">
        <div className="max-w-3xl font-extrabold text-transparent text-5xl leading-tight bg-clip-text bg-gradient-primary">
          Revolutionize Kid's Learning with AI.
        </div>
        <div className="font-medium">
          Tired of manual teaching tasks? Spending too much time on repetitive activities? Let KidX AI revolutionize
          how children learn with advanced AI-powered solutions. Scale your educational initiatives effortlessly and
          efficiently.
        </div>
        <div className="flex gap-2">
          <CalendlyBtn classNames="bg-black text-white" btnProps={{ variant: "solid", radius: "sm", size: "lg" }}>
            Book a Free Demo
          </CalendlyBtn>
        </div>
      </div>
      <Chat classNames="pb-5 w-full max-w-xl flex-1 max-h-[450px] " />
    </div>
  )
}
