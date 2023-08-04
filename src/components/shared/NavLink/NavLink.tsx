import React from 'react'
import Link from "next/link";

interface NavLinkProps {
  route: string;
  children: React.ReactNode;
  color?: string;
  large?: boolean;
  onClick?: React.MouseEventHandler<Element>;
  className?: string
}

const NavLink = ({ route, children, color, large, onClick, className }: NavLinkProps) => {

  return (
    <Link
      href={route}
      onClick={onClick}
      color={color}
      className={`font-extrabold p-0 ${className}`}
    >
      {children}
    </Link>
  )
}

export default NavLink