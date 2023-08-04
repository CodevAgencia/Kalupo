
interface CarInfoBlueProps {
  imageUri: string
  title: string
  subtitle: React.ReactNode
}

export const CarInfoBlue:React.FC<CarInfoBlueProps> = ({imageUri, title, subtitle}) => {


  return (
    <div className="bg-blue p-4 rounded-lg flex items-center gap-4">
      <div className="icon"> 
        <img src={imageUri} alt="Icon" width={24} height={24} />
      </div>
      <div className="content text-white "> 
        <p className="font-semibold" >{title}</p>
        {subtitle}
      </div>
    </div>
  )
}