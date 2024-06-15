import { ReactNode } from "react";

interface Props{
    children:ReactNode;
}
const Alert = ({children}:Props) => {
  return (
    <div className="alert alert-prymary">{children}</div>
  )
}

export default Alert