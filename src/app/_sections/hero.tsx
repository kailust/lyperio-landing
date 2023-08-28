import CalendlyBtn from "@/components/calendlyBtn";
import Chat from "@/components/chat";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 items-center">
      <div className="flex flex-col gap-4 justify-center flex-[1.5_0_0%]">
        <div className="max-w-3xl font-extrabold text-transparent text-5xl leading-tight bg-clip-text bg-gradient-primary">
          Guest Experience Manager, but better.
        </div>
        <div className="font-medium">
          Hired a lot of people to answer the same questions? Have a whole team of people who do repetitive tasks?
          Spending to much time on simple but time consuming tasks, when you could scale your business? Let AI do the
          same work, but better, cheaper and faster.
        </div>
        <div className="flex gap-2">
          <CalendlyBtn classNames="bg-black text-white" btnProps={{ variant: "solid", radius: "sm", size: "lg" }}>
            Book a Free Call
          </CalendlyBtn>
        </div>
      </div>
      <Chat classNames="pb-5 w-full max-w-xl flex-1 max-h-[450px] " />
    </div>
  )
}