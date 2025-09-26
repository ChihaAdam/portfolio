import { Download, Fullscreen, XIcon } from "lucide-react"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import { DialogClose } from "@radix-ui/react-dialog"
interface CertificateCardProps {
  name: string,
  image_url: string
}

function CertificateCard({ data }: { data: CertificateCardProps }) {
  return (
    <div className="relative flex flex-col items-center justify-between animate-on-scroll hover:scale-105 transition-all duration-300 cursor-pointer bg-gray-800 rounded-lg p-4 shadow-lg hover:shadow-xl">
      <div className="flex flex-col gap-2">
        <img
          src={data.image_url}
          alt={data.name}
          className=" rounded-md"
        />
        <h1 className="text-2xl font-bold text-center">{data.name}</h1>
      </div>
      <div className="flex gap-2 items-center justify-center absolute top-6 right-6">
        <a href={data.image_url} download>
          <Download className="icon" />
        </a>
        <Dialog>
          <DialogTrigger>
            <Fullscreen className="icon max-md:hidden" />
          </DialogTrigger>
          <DialogContent className="bg-gray-800/40 backdrop-blur-sm border-0 min-w-[95vw] h-[95vh] p-4 flex flex-col items-center justify-between " showCloseButton={false}>
            <DialogHeader className="mb-4 flex flex-row items-center justify-between w-full">
              <DialogTitle>{data.name}</DialogTitle>
              <DialogClose>
                <XIcon className="icon !text-white" />
              </DialogClose>
            </DialogHeader>
            <div className="h-full w-full bg-center bg-contain bg-no-repeat bg-fixed" style={{ backgroundImage: `url(${data.image_url})` }} />

          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export default CertificateCard