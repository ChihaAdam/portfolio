import CertificatesList from "../../certificates.json"
import CertificateCard from "../CertificateCard"
function Certifications() {
  return (
    <div className="flex flex-col items-center justify-center px-2 lg:py-16  max-w-7xl mx-auto">
    <h2 className="text-5xl text-gradiant text-center font-bold max-md:3xl">Certifications</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {CertificatesList.map((certificate,index) => (
        <CertificateCard key={index} data={certificate} />
      ))}
    </div>
    </div>
  )
}

export default Certifications