import { createContext, useState } from "react"

const FeaturesContext = createContext({
    reference: "",
    changeReference: (ref) => {},
});

export const FeaturesContextProvider = (props) => {
    const [userReference, setUserReference] = useState("0");

    const changeReferenceHandler = (ref) => {
        setUserReference(ref);
    }

    const context = {
        reference: userReference,
        changeReference: changeReferenceHandler,
    };

  return (
    <FeaturesContext.Provider value={context}>{props.children}</FeaturesContext.Provider>
  )
}

export default FeaturesContext
