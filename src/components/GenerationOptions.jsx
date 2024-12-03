import { CheckOption } from "./CheckOption";

export const GenerationOptions = ({ state, dispatch, className }) => {
  return (
    <section className={`${className}`}>
      <div className="flex flex-col gap-3">
        <label htmlFor="lengthSlider" className="flex justify-between">
          <h3>Character Length</h3>
          <h3 className="text-neon-green text-2xl">{state.length}</h3>
        </label>
        <input
          id="lengthSlider"
          type="range"
          min="1"
          max="18"
          onChange={(e) =>
            dispatch({ type: "SET_LENGTH", payload: Number(e.target.value) })
          }
          value={state.length}
          className="accent-neon-green"
        />
      </div>
      <fieldset className="flex flex-col gap-3 justify-center text-sm">
        <CheckOption
          label="Include Uppercase Letters"
          checked={state.includeUpperCase}
          onChange={() => dispatch({ type: "TOGGLE_UPPERCASE" })}
        />
        <CheckOption
          label="Include Lowercase Letters"
          checked={state.includeLowerCase}
          onChange={() => dispatch({ type: "TOGGLE_LOWERCASE" })}
        />
        <CheckOption
          label="Include Numbers Letters"
          checked={state.includeNumbers}
          onChange={() => dispatch({ type: "TOGGLE_NUMBERS" })}
        />
        <CheckOption
          label="Include Symbols"
          checked={state.includeSymbols}
          onChange={() => dispatch({ type: "TOGGLE_SYMBOLS" })}
        />
      </fieldset>
    </section>
  );
};
