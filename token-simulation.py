import hashlib
import datetime
import json

# --- 1. DATA STRUCTURES ( The "On-Chain" Assets ) ---

class CarbonCreditToken:
    """
    Represents the unique digital token.
    """
    def __init__(self, verification_id, owner, amount_tco2e):
        # Create a unique hash ID to simulate a blockchain address
        self.token_id = hashlib.sha256(f"{verification_id}{datetime.datetime.now()}".encode()).hexdigest()[:16]
        self.verification_id = verification_id
        self.owner = owner
        self.amount_tco2e = amount_tco2e
        
        # Status tracks lifecycle: ACTIVE, PLEDGED, or RETIRED
        self.status = "ACTIVE"
        
        # Immutable history log
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

# --- 2. THE LEDGER ( The "Immutable Database" ) ---

class BlockchainLedger:
    """Simulates the immutable ledger where all transactions are recorded."""
    def __init__(self):
        self.tokens = {} # Stores all tokens by ID

    def record_token(self, token):
        self.tokens[token.token_id] = token
        print(f"[LEDGER] New Token Recorded: {token.token_id}")

    def get_token(self, token_id):
        return self.tokens.get(token_id)

# --- 3. SMART CONTRACT ( The Logic Core ) ---

class SmartContract:
    """
    Handles Minting, Trading, Pledging, and Retiring.
    """
    def __init__(self, ledger):
        self.ledger = ledger

    # --- ESG MINING & MINTING ---
    def mint_from_iot_data(self, project_owner, energy_saved_kwh):
        """
        Simulates AI/Oracle verification. If data is valid, mints a token.
        """
        # Conversion factor (Example: 0.0005 tCO2e per kWh)
        carbon_reduction = energy_saved_kwh * 0.0005 
        
        # Verification Logic (Simulated accredited auditor) 
        if carbon_reduction > 0:
            print(f"\n--- VERIFICATION SUCCESSFUL: {carbon_reduction} tCO2e saved ---")
            
            # Mint the token
            new_token = CarbonCreditToken(
                verification_id=f"IOT-DEVICE-{energy_saved_kwh}",
                owner=project_owner,
                amount_tco2e=carbon_reduction
            )
            self.ledger.record_token(new_token)
            return new_token.token_id
        else:
            print("Verification Failed: No reduction detected.")
            return None

    # --- TRADING (LIQUIDITY) ---
    def transfer_token(self, token_id, current_owner, new_owner):
        token = self.ledger.get_token(token_id)
        
        # Security Checks 
        if not token:
            print("Error: Token not found.")
            return
        if token.owner != current_owner:
            print(f"FRAUD PREVENTED: {current_owner} does not own this token.")
            return
        if token.status != "ACTIVE":
            print(f"FAIL: Cannot trade. Token status is {token.status}.")
            return

        # Execute Transfer
        previous_owner = token.owner
        token.owner = new_owner
        token.log_event("TRANSFER", f"Transferred from {previous_owner} to {new_owner}")
        print(f"[TX] Success: Token {token.token_id} transferred to {new_owner}")

    # --- FINANCING (PLEDGING) ---
    def pledge_collateral(self, token_id, owner, bank_name):
        token = self.ledger.get_token(token_id)
        
        if token.owner == owner and token.status == "ACTIVE":
            # Lock the token
            token.status = "PLEDGED"
            token.log_event("PLEDGED", f"Collateralized for loan from {bank_name}")
            
            print(f"\n[SMART CONTRACT] Token {token.token_id} LOCKED.")
            print(f" >> Triggering Interest Rate Reduction...")
            print(f" >> Beneficiary: {bank_name}")
        else:
            print("Pledge Failed: Token not active or owner mismatch.")

    # --- RETIREMENT ---
    def retire_token(self, token_id, owner):
        token = self.ledger.get_token(token_id)
        
        # Can only retire if ACTIVE (must unpledge first if pledged)
        if token.owner == owner and token.status == "ACTIVE":
            token.status = "RETIRED"
            token.log_event("RETIRED", "Permanently removed from circulation")
            print(f"[RETIREMENT] Token {token.token_id} retired. Offset claimed.")
        else:
            print(f"Retire Failed: Token status is {token.status}")

# --- 4. EXECUTION SIMULATION ---

if __name__ == "__main__":
    # Initialize Blockchain System
    my_ledger = BlockchainLedger()
    contract = SmartContract(my_ledger)

    # 1. SME generates solar energy (IoT Data Input)
    sme_company = "GreenTech SME"
    print(f"--- 1. STARTING ESG MINING FOR {sme_company} ---")
    token_id = contract.mint_from_iot_data(sme_company, energy_saved_kwh=5000)

    # 2. SME sells the credit to an Investor (Trading)
    investor = "Global Fund"
    print(f"\n--- 2. TRADING ASSET ---")
    contract.transfer_token(token_id, current_owner=sme_company, new_owner=investor)

    # 3. Investor tries to sell it, but decides to PLEDGE it for a loan instead
    bank = "DBS Bank"
    print(f"\n--- 3. PLEDGING COLLATERAL ---")
    contract.pledge_collateral(token_id, owner=investor, bank_name=bank)

    # 4. Investor tries to sell the PLEDGED token (Should Fail)
    print(f"\n--- 4. ATTEMPTING ILLEGAL TRANSFER (Double Spending Test) ---")
    contract.transfer_token(token_id, current_owner=investor, new_owner="Another Buyer")

    # 5. Inspect the Audit Trail
    print(f"\n--- 5. FINAL AUDIT TRAIL FOR TOKEN {token_id} ---")
    final_token = my_ledger.get_token(token_id)
    print(json.dumps(final_token.history, indent=2))