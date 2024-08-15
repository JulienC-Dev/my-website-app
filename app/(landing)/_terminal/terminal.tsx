"use client";
import React, { useEffect, useRef, useState } from "react";
import AsciiArtJulien from "./AsciiArt";
import { Command, listOfCommand } from "./command";

const CommandInput: React.FC = () => {
  const [inputs, setInputs] = useState<string[]>([""]); // Start with one input field
  const [outputs, setOutputs] = useState<string[]>([]); // To store the outputs of commands
  const [filteredCommands, setFilteredCommands] = useState<Command[]>([]);

  // Create refs for input elements
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Focus on the last input field when the inputs change
  useEffect(() => {
    const lastInputIndex = inputs.length - 1;
    if (inputRefs.current[lastInputIndex]) {
      inputRefs.current[lastInputIndex]!.focus();
    }
  }, [inputs]);

  // Handle changes in the input fields
  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);

    if (event.target.value) {
      const filtered = listOfCommand.filter((command) => {
        const commandName = Object.keys(command)[0].toLowerCase();
        return commandName.startsWith(event.target.value.toLowerCase());
      });
      setFilteredCommands(filtered);
    } else {
      setFilteredCommands([]);
    }
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Tab" && filteredCommands.length > 0) {
      event.preventDefault();
      const firstCommandName = Object.keys(filteredCommands[0])[0];
      const newInputs = [...inputs];
      newInputs[index] = firstCommandName;
      setInputs(newInputs);
      setFilteredCommands([]);
    } else if (event.key === "Enter") {
      event.preventDefault();
      handleCommandExecution(index);
      setFilteredCommands([]);
    }
  };

  // Execute the command and set the output
  const handleCommandExecution = (index: number) => {
    const commandName = inputs[index].trim().toLowerCase();
    const command = listOfCommand.find(
      (cmd) => Object.keys(cmd)[0] === commandName
    );
    let output;
    if (command) {
      const commandDescription = Object.values(command)[0];
      output = `${commandDescription}`;
    } else {
      output = `Command not found ${commandName} - Type 'help' to see list of available commands.`;
    }

    const newInputs = [...inputs];
    setInputs([...newInputs, ""]); // Add a new input field

    // Store the command output
    const newOutputs = [...outputs];
    newOutputs[index] = output;
    setOutputs(newOutputs);
  };

  return (
    <div>
      <div>
        <p>
          <span className="text-amber-500">guest</span>
          <span className="text-amber-800">@julien</span>
          <span>:~$ </span>
        </p>
        <AsciiArtJulien />
        <p>Welcome to my interactive web terminal.</p>
        <p> For a list of available commands, type 'help'.</p>
      </div>
      {inputs.map((input, index) => (
        <div key={index}>
          <span className="text-amber-500">guest</span>
          <span className="text-amber-800">@julien</span>
          <span>:~$ </span>
          <input
            type="text"
            value={input}
            onChange={(event) => handleInputChange(index, event)}
            onKeyDown={(event) => handleKeyDown(index, event)}
            disabled={index < inputs.length - 1} // Disable previous inputs
            className="border-none outline-none bg-amber-100"
            ref={(el: HTMLInputElement | null) => {
              inputRefs.current[index] = el;
            }} // Assign ref to the input
          />
          {outputs[index] && <p>{outputs[index]}</p>}{" "}
          {/* Display command output */}
        </div>
      ))}
      {filteredCommands.length > 0 && (
        <ul>
          {filteredCommands.map((command, index) => {
            const commandName = Object.keys(command)[0];
            return (
              <li key={index}>
                <strong>{commandName} [Tab]</strong>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CommandInput;
