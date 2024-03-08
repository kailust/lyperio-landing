import CalendlyBtn from "@/components/calendlyBtn";

export default function ContactUs() {
  return (
    <div className="bg-gradient-secondary rounded-2xl flex items-center flex-col py-8 px-2 gap-3">
      <div className="font-semibold text-3xl text-center">Want to learn more?</div>
      <div className="font-medium text-lg text-center">Schedule a free 15-minute discovery call with us!</div>
      <CalendlyBtn btnProps={{ size: "lg" }} classNames="text-white font-medium bg-gradient-primary">
        Schedule a Discovery Call
      </CalendlyBtn>
      <div className="flex flex-col items-center w-full">
        <div className="font-medium text-center">Text the founder</div>
        <a href="mailto:dhonam@playkidx.com.com">dhonam@playkidx.com</a>
      </div>
    </div>
  )
}