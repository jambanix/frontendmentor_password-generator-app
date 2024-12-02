import { generatePassword, calculateStrength } from "./lib/password";
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
  const [state, dispatch] = useReducer(reducer, {
    length: 12,
    includeUpperCase: true,
    includeLowerCase: true,
    includeNumbers: true,
    includeSymbols: true
  })

  const handleClick = () => setGeneratedPassword(generatePassword({...state}));
  const strength = calculateStrength({...state});
  console.log(strength);
  return (
    <>
      <main className="flex items-center justify-center bg-very-dark-grey min-h-screen w-full">
        <div className="flex flex-col gap-3">
          <h2>Password Generator</h2>
          <GeneratedPassword password={generatedPassword} />
          <GenerationOptions state={state} dispatch={dispatch}/>
          <section className="flex justify-between bg-dark-grey">
            <h3>Strength</h3>
            <StrengthIndicator strength={strength} />
          </section>
          <button className="flex gap-4 bg-neon-green items-center justify-center" onClick={handleClick}>
            <p>GENERATE</p>
            <img src="images/icon-arrow-right.svg" alt="Generate password"/>
          </button>
        </div>
      </main>
    </>
  )
}

export default App
