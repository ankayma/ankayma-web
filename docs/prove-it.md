# Prove It (path proof)

Ankayma's core claim is that your traffic goes **straight between your devices** and the
vendor is never on the data path. **Prove It** lets you check that yourself, live, rather
than take it on faith. It's the trust proof behind every other feature — **NoKey** SSH,
**NoVPN** private services, **NoSecret** deploys.

## The path chain

On **Services**, click **◈ path** next to a machine. A small panel shows the live route
from **your device** to that node:

- **Route** — `direct peer-to-peer`, or `relayed (encrypted)` if a relay hop was needed.
- **Vendor in path** — **No ✓** when the connection is direct. If a relay is ever used,
  it says **Yes · relay (content encrypted)** — honest about the hop, and clear that the
  relay only ever moves already-encrypted bytes.
- **Endpoint** — the real address the tunnel is talking to.
- **Handshake** — how long ago the encrypted link last refreshed.
- **Traffic** — bytes sent and received over this direct link.

<!-- IMG: prove-it-01-path-chain.png — The path chain panel: Route direct peer-to-peer, Vendor in path No, endpoint, handshake, traffic -->

From the panel you can jump to that node's **signed activity** — the ledger receipts for
deploys and SSH sessions on it. Two different proofs: the path chain proves the live
*data path*; the ledger proves the *actions*.

> Today your traffic runs direct, so Vendor-in-path reads **No**. Relay is there only as
> a fallback for peers stuck behind hard NAT, and even then it carries encrypted bytes
> only — never plaintext, never your keys.

## Reachability dots

Each machine on **Services** carries a small dot:

- **Green ●** — responds over the mesh right now; SSH and Open will work.
- **Grey ○** — no live response. The machine may be powered on but its agent isn't
  connected, it's asleep, or it's behind NAT with no relay yet. Ankayma says "no
  handshake", not "offline" — it only reports what it can actually observe.

<!-- IMG: prove-it-02-reachability-dots.png — Services list with green (reachable) and grey (no handshake) dots -->

## Coexistence — add without breaking

Ankayma is designed to **layer on top of** what you already run, not replace it. Bringing
a machine onto the mesh doesn't reroute your existing production paths — your database
replication, your engine-native TLS, anything already working keeps working, off the
mesh, unchanged. You add a secured path alongside it, so you can adopt zero-trust access
without a risky migration.

## Honest edges

- The **live per-peer path** (route, endpoint, traffic) is shown on desktop. On mobile
  the app shows your connection but not yet the per-peer path detail — those rows read
  empty there.
- "Vendor in path: No" is a statement about the **network route**. The control plane
  still brokers identity and policy — that's the control channel, by design, and it
  never carries your data.
