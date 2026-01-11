# Frequently Asked Questions

Questions NoPaper users commonly ask, organized by topic.

---

## Getting Started & Onboarding

### How do I create a NoPaper account?
NoPaper doesn't require a traditional account. Simply connect your **VeWorld wallet** and you're ready to start earning rewards!

### What information do you need to sign up?
None! We only need your wallet address. No email, phone, or personal details required.

### Do I need to verify my identity?
No KYC (Know Your Customer) is required. Your wallet is your identity.

### Can I use NoPaper without installing an app?
Yes! NoPaper works directly in your mobile browser. Just visit [nopaper.life](https://nopaper.life) on your phone.

### What devices and browsers are supported?
NoPaper is optimized for **mobile devices**. We support all modern browsers (Chrome, Safari, Firefox) on iOS and Android.

### How long does setup take?
About 30 seconds! Just connect your wallet and you're ready to submit.

### Can I try NoPaper before committing?
Absolutely! Connect on **Testnet** to practice without using real tokens.

---

## Wallet & Account Management

### How do I connect my wallet?
1. Go to [nopaper.life](https://nopaper.life)
2. Tap "Connect Wallet"
3. Select VeWorld
4. Approve the connection

### Can I use multiple wallets?
**Absolutely not.** To prevent farming and ensure fair rewards, we enforce a **zero-tolerance 1 Device + 1 Wallet + 1 IP address** policy. Any attempt to use multiple wallets or devices to bypass limits will result in a permanent and irreversible ban.

### How do I switch wallets?
Disconnect your current wallet in VeWorld, then reconnect with a different wallet.

### How do I update my notification preferences?
NoPaper doesn't send notifications. Check your wallet directly for B3TR balance updates.

---

## Privacy & Data

### What personal data do you collect?
We collect:
- Wallet address (public on blockchain)
- IP address (for fraud prevention, not stored long-term)
- Uploaded receipt images (stored privately)

### How do you store my receipt data?
- **Original images**: Encrypted in Backblaze B2 (private)
- **Blurred versions**: Used for on-chain proof
- **Submission metadata**: Stored in PostgreSQL

### Who can see my receipts and transaction history?
- **You**: Full access via your wallet
- **Public**: Only your wallet address and reward amounts (on-chain)
- **NoPaper team**: Blurred versions only for verification

### Do you sell or share my data with third parties?
**No.** We never sell user data. The only sharing is with VeBetterDAO for reward distribution.

### How long do you retain receipts and user data?
- IP tracking records: 24 hours
- Image hashes: Permanent (for duplicate detection)
- Submission history: Permanent (for your records)

### Is my data encrypted?
Yes. Images are encrypted at rest in B2, and all API traffic uses HTTPS.

---

## Receipts & Submissions

### How do I submit a receipt?
1. Take a **digital screenshot** of your receipt
2. Tap "Upload Receipt" on NoPaper
3. Select your image
4. Wait for AI verification (~10 seconds)

### What kind of receipts are accepted?
- ✅ Digital screenshots of grocery receipts
- ✅ E-receipts from organic/sustainable stores
- ✅ Farmers market purchases
- ❌ Camera photos of paper receipts
- ❌ Fuel, parking, or utility bills

### How do receipts get associated with my account?
Your connected wallet address is attached to each submission automatically.

### Can I search and filter past receipts?
Yes! View your submission history in the app, sorted by date.

### Can I tag or categorize receipts?
Not currently. Receipts are auto-categorized by our AI (e.g., "Green Groceries", "Organic Food").

### Can receipts be shared with accountants?
Not directly. You can view your history and manually share screenshots if needed.

### How do I dispute an incorrect rejection or a ban?
If your submission was rejected or your wallet was flagged/banned due to "Multiple IP Addresses" or other security suspicions:
1. **Wait for the Appeal System**: We are currently building an in-app appeal system.
2. **Submit an Appeal**: Once live, you will be able to submit an appeal directly within the application.
3. **Contact Support**: In the meantime, you can reach out to our team at `support@nopaper.life`.

### I didn't receive my receipt verification. What happened?
Check your submission history. Common reasons for missing results:
- Network error during upload
- Image too large or corrupt
- Rate limit exceeded

### My receipt shows wrong reward. How do I correct it?
Rewards are calculated by AI based on receipt content. Each submission is independent—just submit again next time!

---

## Rewards, Incentives & Economics

### Do users earn rewards for using NoPaper?
Yes! You earn **B3TR tokens** for each approved submission.

### How are rewards calculated?
Rewards depend on:
1. **Wallet age** (older = more trusted = higher rewards)
2. **Receipt quality** (more eco-items = higher reward)
3. **VOT3 multiplier** (optional ecosystem bonus)

### Are rewards tradable or transferable?
Yes! B3TR is a standard VeChain token. You can:
- Trade on exchanges
- Transfer to other wallets
- Use in VeBetterDAO governance

### How do I see my reward history?
Check your **Submission History** in the NoPaper app or view your wallet on [VeChain Explorer](https://explore.vechain.org).

### Are there minimums or caps for rewards?
- **Minimum**: 0.01 B3TR (new wallets)
- **Maximum**: 10 B3TR per submission (after multipliers)

### How do I redeem or withdraw rewards?
B3TR goes directly to your wallet—no redemption needed! Trade on exchanges anytime.

### What percentage goes to users vs platform?
**100% of allocated rewards go to users.** NoPaper doesn't take a cut of B3TR rewards.

### How are reward calculations auditable?
All rewards are recorded on the public VeChainThor blockchain. Check your transaction history!

---

## Security & Fraud Prevention

### How does NoPaper prevent multi-wallet farming?
We use a sophisticated multi-layer security system:
- **Strict Network Policy**: Maximum 1 wallet per IP address.
- **Strict Device Policy**: Strictly 1 smartphone per user.
- **No Multiple Wallets**: We use advanced analysis to link accounts; multiple wallet usage is forbidden.
- **VPN/Proxy Block**: We automatically block all hosting providers, VPNs, and proxies.
- **Image Fingerprinting**: We detect if the same image is uploaded by different wallets.
- **Wallet Trust**: Older, established wallets receive higher rewards.

### What is your policy for suspicious activity?
Suspicious wallets are:
1. Blocked from submitting
2. Reported to VeBetterPassport (mainnet)
3. May be blacklisted on-chain

### Do you offer two-factor authentication?
Your **wallet signature** IS your authentication. No additional 2FA needed since only you control your private keys.

### What happens if my wallet is compromised?
NoPaper can't help recover wallets. Secure your seed phrase! If compromised, create a new wallet immediately.

### Can I freeze my wallet temporarily?
No. If you suspect issues, disconnect from NoPaper and secure your wallet.

### How do you monitor and respond to fraud?
- Real-time IP collision detection
- 24/7 automated blocking
- Manual admin review for edge cases
- VeBetterPassport signaling (mainnet)

### Do you have a bug bounty or security disclosure process?
Contact us at `support@nopaper.life` for security issues. We appreciate responsible disclosure!

---

## Governance & Community

### How is NoPaper governed?
NoPaper is part of the **VeBetterDAO** ecosystem. Major decisions go through VeBetterDAO governance.

### Can users participate in protocol decisions?
Yes! Hold VOT3 tokens and vote for NoPaper in VeBetterDAO allocation rounds.

### Is there token-based governance?
Yes. VOT3 holders influence reward allocations across VeBetterDAO apps including NoPaper.

### Who audits governance changes and smart contracts?
VeBetterDAO contracts are audited. NoPaper's contract follows VeBetterDAO's X2Earn template.

### Are governance records publicly auditable?
Yes! All votes are on-chain via VeBetterDAO's transparent governance.

### How can I join the NoPaper community?
Follow our official newspaper on [Medium](https://medium.com/@nopaper). For support, contact us directly via email.

---

## Fees & Pricing

### Is NoPaper free for consumers?
**Yes!** The only cost is minimal VET for gas fees (fractions of a cent).

### Are there subscription fees?
No subscriptions. NoPaper is completely free to use.

### How are gas fees handled?
You pay standard VeChain gas fees (~0.01 VET per transaction). Rewards far exceed this cost!

---

## Troubleshooting & Support

### I didn't receive my receipt/reward. What do I do?
1. Check your submission history for status
2. Verify your wallet is connected correctly
3. Check VeChain Explorer for the transaction

### Why was I blocked from submitting?
Common reasons include:
- **VPN/Proxy detected**: Please use a standard home or mobile network.
- **Multiple Wallets**: More than one wallet was detected on the same IP or device.
- **Network Change**: Frequently switching between Mobile Data and WiFi can sometimes trigger security flags.
- **Rate Limit**: You've reached your limit of 2 submissions per 20 hours.
- **Duplicate Image**: This image has already been submitted by you or someone else.

### App crashes or won't load. How do I fix it?
1. Refresh the page
2. Clear browser cache
3. Check our **[Server Status](https://status.nopaper.life)** for any ongoing maintenance
4. Try a different browser or internet connection

### How do I report a bug?
Email us at `support@nopaper.life` and describe the issue with screenshots.

### How fast is support response time?
Support is available via email. Response time varies but usually within 24 hours.

### How do I escalate an unresolved issue?
Follow up on your existing email thread if your issue isn't resolved.

---

## Technical Questions

### Which blockchain is NoPaper on?
**VeChainThor** blockchain. We support both Testnet and Mainnet.

### What is B3TR?
B3TR is the utility token of VeBetterDAO, used for rewards and governance.

### What is VOT3?
VOT3 is VeBetterDAO's governance token that gives you voting power and ecosystem multipliers.

### Can I export my data?
View your history in-app. Blockchain records are always accessible via VeChain Explorer.

### Where can I see my transactions?
Check [VeChain Explorer](https://explore.vechain.org) with your wallet address.

---

## Still Have Questions?

Join our community:
- 📝 [Medium](https://medium.com/@nopaper)
- ✉️ [support@nopaper.life](mailto:support@nopaper.life)
