# Tiers

A side-by-side of what each tier includes. The numbers here are the ones the app's
**Upgrade** screen shows; see [Upgrade](upgrade.md) for prices and how to switch.

| | **F0** (free) | **F0-Plus** (personal) | **F1** (team) |
|---|---|---|---|
| **Price** | Free | $9 / mo | from $19 / mo |
| **People** | just you | just you | 3 – 25 members |
| **Passwordless sign-in (NoPass)** | ✓ | ✓ | ✓ |
| **Mesh nodes** | 10 | 50 | 50 |
| **Private domains (NoVPN)** | 5 | 20 | 20 |
| **SSH, no bastion/static key (NoKey)** | ✓ | ✓ | ✓ |
| **Secretless deploy rules (NoSecret)** | 1 repo | more | more |
| **Path proof (Prove It)** | ✓ | ✓ | ✓ |
| **Raw TCP tunneling** | — | ✓ | ✓ |
| **Step-up 2FA (TOTP)** | — | ✓ | ✓ |
| **Shared access policy & roles** | — | — | ✓ |
| **Admin console** | — | — | ✓ |

**F1** is sold in seat packs (3 / 5 / 10 / 25 members), and every F1 plan includes
everything in F0-Plus. Full breakdown and admin seats: [Upgrade](upgrade.md).

<!-- IMG: tiers-01-comparison.png — Optional: the three tiers side by side as shown on the Upgrade screen -->

## What each row means

- **NoPass** — passwordless sign-in, with your device's own identity. See [Getting started](getting-started.md).
- **Mesh nodes** — how many machines you can enroll. See [Devices](devices.md).
- **NoVPN** — private domains: branded names only your mesh resolves. See [Subdomains](subdomains.md).
- **NoKey** — SSH with no bastion and no static key. See [SSH](ssh.md).
- **NoSecret** — deploy from CI without a static secret. See [Deploy Rules](deploy-rules.md).
- **Prove It** — verify the vendor wasn't on your data path. See [Prove it](prove-it.md).
- **Step-up 2FA** — a second factor for sensitive actions. See [Security](security.md).
- **Shared access policy & roles / Admin console** — team features. See
  [Members](members.md) and [Access](access.md).

> Where a limit isn't a hard number yet (deploy rules above the free repo, for example),
> the guide says "more" rather than invent a figure. Ankayma marks unfinished edges
> instead of hiding them.
