# Getting started

Ankayma puts your machines on a private mesh where they reach each other **directly** —
no VPN, no public ports — and you can **prove** the vendor was never in the middle. No
credit card: signing in creates your own free **F0** space.

## Your first win — SSH from your phone into your laptop (5 minutes)

Two roles: your **MacBook is the target** (the machine you reach) and your **iPhone is
the client** (where you type). Set up the MacBook first — in the app you scan a QR *with
the phone*, so the laptop is the one that shows it, and the phone joins with no second
GitHub login.

1. **On the MacBook** — install the app, click **GitHub** to sign in (this creates your
   free F0 space), then **Connect** on the *Devices* screen. macOS asks for your password
   once — a network device needs admin rights. You'll see **"You're in the mesh"**.
   → [Devices](devices.md)
2. **Add the iPhone** — on the MacBook, **Devices → Add a device → show a QR**. On the
   iPhone, install Ankayma, tap **Scan QR** to join the same account, then **Connect**.
   <!-- IMG: getting-started-01-iphone-join-qr.png — Add a device on the MacBook showing the QR, and the iPhone scanning it -->
3. **SSH in** — on the iPhone, open **Services**, find the MacBook, tap **SSH**. You're in
   a shell on your laptop — no key, no bastion, no public port. This is **NoKey**.
   → [SSH](ssh.md)
4. **Prove It** — tap **◈ path → Vendor in path: No ✓**. The session went straight between
   your two devices. → [Prove it](prove-it.md)

<!-- IMG: getting-started-02-ssh-from-iphone.png — iPhone in a shell on the MacBook, path chain showing "Vendor in path: No" -->

> Reaching a **server** (a VPS or home box) works the same way: install the agent there so
> it becomes another target, then SSH into it from any of your devices.

Prefer a browser app? Instead of SSH, reach an internal web app with **NoVPN** — a private
name only your mesh resolves, opened in your browser. See [Subdomains](subdomains.md).

## Where to next

- **Keep going solo** — hitting the free limits (10 devices, 5 private names), or want a
  second factor and raw-TCP tunneling? → [Upgrade to F0-Plus](upgrade.md).
- **Bring a team** — teammates, shared access rules, an admin console? → [Members](members.md)
  and [Access](access.md), on a team tier. See [Upgrade](upgrade.md).

What each tier includes is laid out in [Tiers](tiers.md).
