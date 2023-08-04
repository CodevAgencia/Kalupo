import {FC} from "react";
const Avatar: FC<{
  src: string,
  className?: string,
  alt:string
  onClick?: () => void,
}> = ({src, className, alt,onClick}) => {

  return (
    <div className={`flex justify-items-center overflow-hidden rounded-full cursor-pointer ${className ?? ''}`}>
      <img
        className={'object-scale-down rounded-full h-ful w-full'}
        onClick={() => onClick()}
        src={src}
        alt={alt}
      />
    </div>
  );
}

export default Avatar;