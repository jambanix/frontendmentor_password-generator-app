import { generatePassword } from "./lib/password";
import { StrengthIndicator } from "./components/StrengthIndicator";
import { useState, useReducer } from "react";
import { GeneratedPassword } from "./components/GeneratedPassword";
import { GenerationOptions } from "./components/GenerationOptions";
import { Button } from "./components/Button";

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

  const handleGenerateClick = () => {
    const {password, strength} = generatePassword({...state});
    setGeneratedPassword(password);
    setStrength(strength);
  }

  const handleClipboardClick = () => {
    navigator.clipboard.writeText(generatedPassword)
  }

  return (
    <>
      <main className="flex items-center justify-center bg-very-dark-grey min-h-screen w-full p-4">
        <div className="flex flex-col gap-5 max-w-[540px] w-full">

          {/* Title */}
          <header className="flex items-center justify-center text-lg">
            <h2 className="text-grey">Password Generator</h2>
          </header>

          {/* Generated password */}
          <GeneratedPassword password={generatedPassword} clipboardOnClick={handleClipboardClick} className="text-lg py-4 px-6 flex justify-between bg-dark-grey text-almost-white placeholder:text-grey"/>

          <section className="flex flex-col bg-dark-grey p-6 gap-6">
            {/* Length slider down to last checkbox */}
            <GenerationOptions {...{state, dispatch}} className="flex flex-col bg-dark-grey gap-5 text-almost-white"/>

            {/* Strength indicator */}
            <div className="flex justify-between bg-very-dark-grey p-5 items-center">
              <h3 className="text-grey uppercase">Strength</h3>
              <StrengthIndicator strength={strength} />
            </div>

            {/* Generate button */}
            <Button onClick={handleGenerateClick} className="flex gap-4 bg-neon-green items-center justify-center w-full hover:bg-very-dark-grey hover:text-neon-green hover:border hover:border-neon-green h-10 md:h-12">Generate</Button>
          </section>
        </div>
      </main>
    </>
  )
}

export default App
