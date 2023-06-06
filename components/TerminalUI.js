import React, { useState } from 'react'
import Terminal, { ColorMode, TerminalOutput,TerminalInput } from 'react-terminal-ui';
const TerminalUI = () => {
  const [lineData, setLineData] = useState([
    <TerminalOutput key={""}>Welcome to Krishna World</TerminalOutput>,
    <TerminalOutput key={""}></TerminalOutput>,
  ]);



 function onInput(input){
  let ld = [...lineData];
  ld.push(<TerminalInput >{input}</TerminalInput>);
if (input.toLocaleLowerCase().trim() === 'hi') {
  ld.push(<TerminalOutput>hlo mr . 😁</TerminalOutput>);
} else if (input.toLocaleLowerCase().trim() === 'clear') {
  ld = [];
} else if (input) {
  ld.push(<TerminalOutput>Unrecognized command :{input} </TerminalOutput>);
}
setLineData(ld);
}
 


  return (
    <div className=" w-1/2 m-auto ">
      <Terminal  height={300} colorMode={  localStorage.getItem("theme") === 'dark'?ColorMode.Dark:ColorMode.Light  }
      onInput={ terminalInput => onInput(terminalInput) }
      className="dark:text-white text-black"
      

      >
        { lineData }
      </Terminal>
    </div>
  )
}

export default TerminalUI;