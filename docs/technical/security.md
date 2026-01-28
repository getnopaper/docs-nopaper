# Security & Trust

NoPaper is built on a foundation of fairness and absolute integrity. We implement advanced, multi-layered protection systems to ensure that rewards are distributed exclusively to genuine community members making a real-world impact.

## Our Security Architecture

Every submission is processed through a high-performance, asynchronous security engine. Instead of a single check, our system runs multiple parallel validations to protect the ecosystem:

### 1. Advanced Rate Limiting
We enforce a smart rate-limiting policy (typically 2 submissions per 20 hours). This ensures a fair distribution of rewards across the entire community and prevents systematic spamming.

### 2. Device & Hardware Identity
To prevent "Sybil" attacks (one person using many wallets), we use a multi-factor device fingerprinting system:
- **Hardware-Bound Keys**: Submissions are tied to a unique local hardware key stored securely on your device.
- **Device Fingerprinting**: Advanced browser and hardware identifiers help us ensure that each smartphone belongs to a unique human user.
- **Wallet Binding**: Each unique device is permanently associated with its authorized wallet address.

### 3. On-Chain Security Analysis
Unlike traditional apps, **NoPaper** analyzes the blockchain to verify user legitimacy:
- **Cross-Wallet Funding Analysis**: Our background workers analyze on-chain history to detect clusters of wallets that share a common source, a hallmark of automated bot farming.
- **DAO-Wide Signals**: We integrate with the wider VeBetterDAO ecosystem to check for global security signals, ensuring a unified defense against bad actors.

### 4. Network & Connectivity Guard
- **VPN & Proxy Blocking**: We block data centers, VPNs, and proxies to ensure growth from genuine local communities.
- **IP Reputation Tracking**: Our system monitors connection quality in real-time within a rolling 24-hour window to identify and mitigate coordinated attacks.

### 5. Asynchronous High-Performance Validation
Powered by a robust queuing system (BullMQ), our security checks are processed in high-priority background threads:
- **Sub-Second Image Processing**: Images are instantly hashed and analyzed for uniqueness.
- **Instant Response**: Users receive immediate feedback while our AI workers handle the heavy computational analysis in the background.

### 6. AI-Driven Content Verification
Our state-of-the-art AI (GPT-4o) performs a deep scan of every digital receipt to:
- Verify authenticity and timestamp.
- Categorize sustainable products.
- Detect manipulation or digital alterations.

---

## Ban Appeal Process

We recognize that legitimate users can sometimes be caught in automated security nets (e.g., using a public WiFi at a mall). We've built a transparent way to resolve these cases.

### The In-App Appeal System
If your account is flagged, you don't need to leave the app. An **Appeal Modal** will guide you through the process:
1.  **Explanation**: Provide context for the flagged activity.
2.  **VIP Review**: Your case is sent to a high-priority queue for manual review.
3.  **Community Moderation**: Trusted **VIP Endorsers** (community leaders) will analyze your history and restore access if you are a genuine user.

::: tip Fast Recovery
Most manual appeals are reviewed by our community leaders within 24-48 hours. Genuine users who provide clear context are almost always restored quickly.
:::

## Protecting Your Privacy

Security never comes at the cost of your privacy:
- **Private Storage**: Your original, high-resolution receipts are stored in an encrypted private vault, accessible only for verification.
- **On-Chain Zero-Knowledge**: Only a blurred, unreadable version of your receipt is recorded on-chain. This proves you have a valid receipt without exposing your personal shopping habits or merchant details to the public.
- **Data Minimization**: Security telemetry like IP records are automatically purged after 24 hours.

## Smart Contract Integrity

The final layer of security is the **Idempotency Lock**. Our smart contracts and backend workers are designed with strict "Exactly-Once" processing. Even in the event of a network failure or retry, our system ensures that a reward can **never be sent twice** for the same submission.
