# Security & two-factor

Your sign-in is already passwordless — **NoPass**: you authenticate with GitHub and your
device's own identity, not a shared secret. This page is about the layer on top of that:
adding a **second factor** for sensitive actions.

**Settings → Security** shows what the agent knows about this device's posture, and lets
you set that second factor up.

## Device posture

When connected, the panel shows:

- **Authentication level (AAL)** — the assurance level this session holds.
- **Device certificate** — how long this device's mesh certificate is valid. (It shows
  "not reported yet" until the agent has reported it.)

## Two-factor authentication (TOTP)

Set up an authenticator app (Google Authenticator, 1Password, and the like) as your
step-up factor — faster than waiting on an emailed code.

1. **Set up authenticator app.**
2. Add the shown secret to your authenticator app (tap it to copy).
3. Enter the **6-digit code** it displays and click **Confirm**.

Once confirmed, the panel reads **Authenticator app — Enabled**.

<!-- IMG: security-01-totp-setup.png — TOTP setup: the secret to copy and the 6-digit confirm field -->

**Lost your authenticator?** Disable it here to set up a new one — you confirm with your
current code, or with an emailed code if you've lost access. (There's no separate
backup-codes step.)

## Step-up: what the prompts are

Some actions are sensitive — elevating to root over SSH, changing a deploy rule,
inviting or removing a teammate. For those, Ankayma asks you to **step up**: prove your
second factor right then, with your authenticator code (or an emailed code). The action
proceeds only after the proof, and the step-up is written to your audit ledger.

<!-- IMG: security-02-stepup-prompt.png — A step-up prompt asking for the authenticator code before a sensitive action -->

> On free **F0** you're the only person in your space, so there's nothing to step up —
> step-up starts to matter on **F0-Plus** and team tiers, where sensitive actions are
> gated behind a second factor. See [Tiers](tiers.md).

## Security key (YubiKey)

If your platform supports it, you can register a hardware security key (YubiKey or
similar) under **Security key → Register a security key**. It's optional today; higher
assurance tiers can require it.

> Honest edge: the hardware-key (WebAuthn/FIDO2) step-up ceremony is still being
> hardened across platforms. TOTP is the everyday second factor; the security key is an
> optional add-on until a tier mandates it.
