import { generatePassword } from "./lib/password";
import { StrengthIndicator } from "./components/StrengthIndicator";
import { useState, useReducer } from "react";
import { GeneratedPassword } from "./components/GeneratedPassword";
import { GenerationOptions } from "./components/GenerationOptions";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LENGTH":
      return { ...state, length: action.payload }
    case "TOGGLE_UPPERCASE":
      return { ...state, includeUpperCase: !state.includeUpperCase }
    case "TOGGLE_LOWERCASE":
      return { ...state, includeLowerCase: !state.includeLowerCase }
    case "TOGGLE_NUMBERS":
      return { ...state, includeNumbers: !state.includeNumbers }
    case "TOGGLE_SYMBOLS":
      return { ...state, includeSymbols: !state.includeSymbols }
    default:
      return state
  }
}

function App() {

  const [generatedPassword, setGeneratedPassword] = useState("");
  const [strength, setStrength] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    length: 12,
    includeUpperCase: true,
    includeLowerCase: true,
    includeNumbers: true,
    includeSymbols: true
  })

  const handleClick = () => {
    const {password, strength} = generatePassword({...state});
    setGeneratedPassword(password);
    setStrength(strength);
  }

  return (
    <>
      <main className="flex items-center justify-center bg-very-dark-grey min-h-screen w-full">
        <div className="flex flex-col gap-3">

          {/* Title */}
          <header>
            <h2>Password Generator</h2>
          </header>

          {/* Generated password */}
          <GeneratedPassword password={generatedPassword} className="p-4 flex justify-between bg-dark-grey"/>

          <section>
            {/* Length slider down to last checkbox */}
            <GenerationOptions {...{state, dispatch}} className="flex flex-col bg-dark-grey p-4 gap-3"/>

            {/* Strength indicator */}
            <div className="flex justify-between bg-dark-grey p-4">
              <h3>Strength</h3>
              <StrengthIndicator strength={strength} />
            </div>

            {/* Generate button */}
            <button className="flex gap-4 bg-neon-green items-center justify-center w-full" onClick={handleClick}>
              <p>GENERATE</p>
              <img src="images/icon-arrow-right.svg" alt="Generate password"/>
            </button>

          </section>
        </div>
      </main>
    </>
  )
}

export default App
