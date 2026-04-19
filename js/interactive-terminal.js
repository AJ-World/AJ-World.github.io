const terminalOutput = document.querySelector('.terminal-output');
const commandInput = document.querySelector('.command-input');

const defaultHelp = "Available commands:\nhelp - show this message\nprojects - list portfolio projects\nskills - show my skills\ncontact - contact info\nclear - clear terminal\nls - list demo files\ncat [filename] - show demo file content";

// Print the default help when page loads
terminalOutput.innerHTML = defaultHelp + "\n";
terminalOutput.scrollTop = terminalOutput.scrollHeight;

const commands = {
  help: "Available commands:\nhelp - show this message\nprojects - list portfolio projects\nskills - show my skills\ncontact - contact info\nclear - clear terminal\nls - list demo files\ncat [filename] - show demo file content",
  
  projects: "Project 1: Windows Endpoint Setup\nProject 2: Secure Linux Lab\nProject 3: Compliance Reporting Tool",
  
  skills: "Skills:\nPowerShell, Bash, Linux, Windows, Microsoft 365, Intune, Endpoint Security, System Hardening",
  
  contact: "Email: schacht.ajs@gmail.com\nPhone: (352) 219-5641",
  
  ls: "demo-scripts:\nendpoint-setup.ps1\nlinux-lab.sh\ncompliance-report.ps1",
  
  // Simulated file content for cat command
  "cat endpoint-setup.ps1": `[DEMO] PowerShell script for Windows endpoint setup
- Checks system environment
- Installs required software
- Configures firewall and security policies
- Maps network drives
- Runs in safe demo mode`,
  
  "cat linux-lab.sh": `[DEMO] Bash script for Secure Linux Lab
- Updates system packages
- Configures UFW firewall
- Sets up SSH key authentication
- Creates restricted users
- Enables automatic updates`,
  
  "cat compliance-report.ps1": `[DEMO] Compliance Reporting Script
- Connects to Microsoft 365 demo tenant
- Collects activity and compliance data
- Generates mock reports
- Safe demo mode: no real data accessed`,
};

// Function to print output to terminal
function printOutput(text) {
  terminalOutput.innerHTML += text + "\n";
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

// Event listener for user input
commandInput.addEventListener('keydown', function(e) {
  if (e.key === "Enter") {
    const input = commandInput.value.trim();
    printOutput(`user@portfolio:~$ ${input}`);
    
    if (input === "clear") {
      terminalOutput.innerHTML = "";
    } else if (commands[input]) {
      printOutput(commands[input]);
    } else if (input.startsWith("cat ")) {
      if (commands[input]) {
        printOutput(commands[input]);
      } else {
        printOutput(`File not found: ${input.slice(4)}`);
      }
    } else if (input.length > 0) {
      printOutput(`Command not found: ${input}`);
    }
    
    commandInput.value = "";
  }
});