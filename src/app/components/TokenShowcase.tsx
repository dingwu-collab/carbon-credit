"use client"

import React, { useState, useEffect, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { ScrollArea } from "./ui/scroll-area"
import { Play, RotateCcw, Terminal, Loader2, CheckCircle2 } from 'lucide-react'

// --- THE PYTHON CODE (Embedded as a string) ---
// We add slight delays (time.sleep) so the demo feels like a process running, not instant text.
const PYTHON_CODE = `
import hashlib
import datetime
import json
import time

# Mocking time.sleep for the browser demo
def sleep(seconds):
    # In a real blocking python env this works, but in JS/Pyodide 
    # we usually need async. For this simple demo, we will just run it.
    pass

class CarbonCreditToken:
    def __init__(self, verification_id, owner, amount_tco2e):
        self.token_id = hashlib.sha256(f"{verification_id}{datetime.datetime.now()}".encode()).hexdigest()[:16]
        self.verification_id = verification_id
        self.owner = owner
        self.amount_tco2e = amount_tco2e
        self.status = "ACTIVE"
        self.history = []
        self.log_event("MINTED", f"Minted {amount_tco2e} tCO2e for {owner}")

    def log_event(self, action, details):
        entry = {
            "timestamp": str(datetime.datetime.now()),
            "action": action,
            "details": details,
            "current_owner": self.owner,
            "status": self.status
        }
        self.history.append(entry)

class BlockchainLedger:
    def __init__(self):
        self.tokens = {} 

    def record_token(self, token):
        self.tokens[token.token_id] = token
        print(f"[LEDGER] New Token Recorded: {token.token_id}")

    def get_token(self, token_id):
        return self.tokens.get(token_id)

class SmartContract:
    def __init__(self, ledger):
        self.ledger = ledger

    def mint_from_iot_data(self, project_owner, energy_saved_kwh):
        carbon_reduction = energy_saved_kwh * 0.0005 
        if carbon_reduction > 0:
            print(f"--- VERIFICATION SUCCESSFUL: {carbon_reduction} tCO2e saved ---")
            new_token = CarbonCreditToken(f"IOT-DEVICE-{energy_saved_kwh}", project_owner, carbon_reduction)
            self.ledger.record_token(new_token)
            return new_token.token_id
        return None

    def transfer_token(self, token_id, current_owner, new_owner):
        token = self.ledger.get_token(token_id)
        if not token or token.owner != current_owner or token.status != "ACTIVE":
            print(f"FAIL: Transfer blocked. Status: {token.status if token else 'N/A'}")
            return
        token.owner = new_owner
        token.log_event("TRANSFER", f"Transferred to {new_owner}")
        print(f"[TX] Success: Token {token.token_id} transferred to {new_owner}")

    def pledge_collateral(self, token_id, owner, bank_name):
        token = self.ledger.get_token(token_id)
        if token and token.owner == owner and token.status == "ACTIVE":
            token.status = "PLEDGED"
            token.log_event("PLEDGED", f"Collateralized for loan from {bank_name}")
            print(f"[SMART CONTRACT] Token {token.token_id} LOCKED for {bank_name}.")
        else:
            print("Pledge Failed.")

if __name__ == "__main__":
    my_ledger = BlockchainLedger()
    contract = SmartContract(my_ledger)

    print("--- 1. STARTING ESG MINING (IoT Data Stream) ---")
    token_id = contract.mint_from_iot_data("GreenTech SME", 5000)
    
    print("\\n--- 2. EXECUTING TRADE (Smart Contract) ---")
    contract.transfer_token(token_id, "GreenTech SME", "Global Fund")
    
    print("\\n--- 3. PLEDGING COLLATERAL (DeFi Integration) ---")
    contract.pledge_collateral(token_id, "Global Fund", "DBS Bank")
    
    print("\\n--- 4. ATTEMPTING ILLEGAL TRANSFER (Fraud Check) ---")
    contract.transfer_token(token_id, "Global Fund", "Bad Actor")

    print("\\n--- 5. FINAL AUDIT TRAIL ---")
    final_token = my_ledger.get_token(token_id)
    # Pretty print json manually for display
    print(json.dumps(final_token.history, indent=2))
`

// export function TokenShowcase() {
//   const [output, setOutput] = useState<string[]>([])
//   const [isRunning, setIsRunning] = useState(false)
//   const [pyodide, setPyodide] = useState<any>(null)
//   const [isLoadingEngine, setIsLoadingEngine] = useState(true)

//   // 1. Load Pyodide from CDN on Mount
//   useEffect(() => {
//     const loadPyodideEngine = async () => {
//       try {
//         // @ts-ignore
//         const pyodideInstance = await window.loadPyodide({
//           indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/"
//         })
//         setPyodide(pyodideInstance)
//         setIsLoadingEngine(false)
//       } catch (e) {
//         console.error("Failed to load Pyodide", e)
//       }
//     }

//     if (!window.document.getElementById('pyodide-script')) {
//       const script = document.createElement('script')
//       script.src = "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js"
//       script.id = 'pyodide-script'
//       script.onload = loadPyodideEngine
//       document.body.appendChild(script)
//     } else {
//       loadPyodideEngine()
//     }
//   }, [])

//   // 2. Function to Run the Python Code
//   const runSimulation = async () => {
//     if (!pyodide) return
//     setIsRunning(true)
//     setOutput([]) // Clear previous run

//     try {
//       // Redirect Python's "print" to our React state
//       pyodide.setStdout({
//         batched: (msg: string) => {
//           setOutput((prev) => [...prev, msg])
//         }
//       })
      
//       await pyodide.runPythonAsync(PYTHON_CODE)
//     } catch (err) {
//       setOutput((prev) => [...prev, `Error: ${err}`])
//     } finally {
//       setIsRunning(false)
//     }
//   }

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[600px]">
      
//       {/* LEFT: Code Viewer */}
//       <Card className="flex flex-col overflow-hidden border-zinc-800 bg-zinc-950 text-zinc-300">
//         <CardHeader className="bg-zinc-900/50 border-b border-zinc-800 py-3 flex flex-row items-center justify-between">
//           <div className="flex items-center gap-2">
//             <div className="w-3 h-3 rounded-full bg-red-500"/>
//             <div className="w-3 h-3 rounded-full bg-yellow-500"/>
//             <div className="w-3 h-3 rounded-full bg-green-500"/>
//             <span className="ml-2 text-sm font-mono text-zinc-400">token_simulation.py</span>
//           </div>
//           <Button 
//             size="sm" 
//             onClick={runSimulation} 
//             disabled={isLoadingEngine || isRunning}
//             className="bg-emerald-600 hover:bg-emerald-700 text-white"
//           >
//             {isRunning ? <Loader2 className="w-4 h-4 animate-spin mr-2"/> : <Play className="w-4 h-4 mr-2"/>}
//             {isLoadingEngine ? "Loading Engine..." : "Run Simulation"}
//           </Button>
//         </CardHeader>
//         <CardContent className="flex-1 p-0 overflow-hidden relative group">
//            <ScrollArea className="h-full w-full p-4 font-mono text-xs leading-relaxed text-blue-300/90">
//              <pre>{PYTHON_CODE}</pre>
//            </ScrollArea>
//         </CardContent>
//       </Card>

//       {/* RIGHT: Terminal Output */}
//       <Card className="flex flex-col overflow-hidden border-zinc-800 bg-black text-green-500 font-mono shadow-2xl">
//         <CardHeader className="bg-zinc-900/50 border-b border-zinc-800 py-3 flex flex-row items-center justify-between">
//           <div className="flex items-center gap-2">
//              <Terminal className="w-4 h-4 text-zinc-500"/>
//              <span className="text-sm text-zinc-500">Bash — Live Execution</span>
//           </div>
//           <Button 
//             variant="ghost" 
//             size="icon" 
//             className="h-6 w-6 text-zinc-500 hover:text-white"
//             onClick={() => setOutput([])}
//           >
//             <RotateCcw className="w-3 h-3"/>
//           </Button>
//         </CardHeader>
//         <CardContent className="flex-1 p-4 overflow-y-auto bg-black/95">
//           {output.length === 0 ? (
//             <div className="h-full flex flex-col items-center justify-center text-zinc-700 space-y-4">
//                <div className="p-4 rounded-full bg-zinc-900/50">
//                   <Play className="w-8 h-8 opacity-50"/>
//                </div>
//                <p>Click "Run Simulation" to execute Smart Contract</p>
//             </div>
//           ) : (
//             <div className="space-y-1">
//               {output.map((line, i) => (
//                 <div key={i} className="break-all whitespace-pre-wrap animate-in fade-in slide-in-from-left-2 duration-300">
//                   <span className="text-zinc-600 mr-2">$</span>
//                   {line}
//                 </div>
//               ))}
//               {/* Blinking Cursor */}
//               {!isRunning && output.length > 0 && (
//                 <div className="mt-4 flex items-center gap-2 text-emerald-600">
//                   <CheckCircle2 className="w-4 h-4" />
//                   <span className="text-sm">Process Finished</span>
//                 </div>
//               )}
//             </div>
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   )
// }