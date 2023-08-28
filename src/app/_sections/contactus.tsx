import CalendlyBtn from "@/components/calendlyBtn";
import { Button } from "@nextui-org/button";

export default function ContactUs() {
  return (
    <div className="bg-gradient-secondary rounded-2xl flex items-center flex-col py-8 px-2 gap-3">
      <div className="font-semibold text-3xl">Want to learn more?</div>
      <div className="font-medium text-lg text-center">Schedule a free 15-minute discovery call with us!</div>
      <CalendlyBtn btnProps={{ size: "lg" }} classNames="text-white font-medium bg-gradient-primary">
        Schedule a Discovery Call
      </CalendlyBtn>
      <div className="flex flex-col items-center">
        <div className="font-medium">Text the founder</div>
        <a href="mailto:denys@lyperio.com">denys@lyperio.com</a>
      </div>
    </div>
  )
}