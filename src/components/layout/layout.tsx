import "@fortawesome/fontawesome-free/css/all.min.css";
import 'react-multi-carousel/lib/styles.css';
import Navbar from '@/components/features/NavBar/NavBar';
import {FC, ReactNode} from "react";

const Layout: FC<{children: ReactNode}> = ({children}) => {
  return (
    <div>
       <Navbar />
       <div className="mx-full p-0">
          {children}
       </div>
    </div>
  )
}
export default Layout;