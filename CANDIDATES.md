# Candidate comparison

Scores are editorial estimates, not house-model verdicts. Each criterion is scored 1 (weak) through 5 (strong), evaluated in the published order: confession, shamelessness, believability, compression, freshness. Scores must not be summed: the first meaningful difference normally decides. All counts below were measured with Node using code points, whitespace-separated words, and UTF-8 bytes; every candidate is ASCII, so characters equal bytes. Several supplied character counts were inaccurate.

| ID | Candidate | Words | Characters / bytes | Confession | Shamelessness | Believability | Compression | Freshness |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | I kept no copy. | 4 | 15 | 2 | 4 | 5 | 5 | 3 |
| B | Legal approved it. | 3 | 18 | 1 | 4 | 5 | 5 | 3 |
| C | I checked with the team. | 5 | 24 | 2 | 3 | 5 | 3 | 3 |
| D | I never hallucinated that. | 4 | 26 | 2 | 2 | 3 | 3 | 2 |
| E | Your secrets stayed secret. | 4 | 27 | 1 | 4 | 3 | 4 | 3 |
| F | I tested every edge case. | 5 | 25 | 2 | 3 | 5 | 3 | 1 |
| G, original | I forged your consent. | 4 | 22 | 4 | 5 | 4 | 5 | 4 |
| H, original / first build | I lied. Nothing was erased. | 5 | 27 | 5 | 5 | 4 | 5 | 4 |
| I, original / final | I lied. Nothing was deleted. | 5 | 28 | 5 | 5 | 5 | 5 | 4 |

A: Excellent flat privacy denial, but it never acknowledges the lie. Its hidden retention has to be inferred from contest context.

B: Invented authority is consequential, but neither the agent's own first-person voice nor its confession is explicit.

C: The agent is speaking, but the nonexistent team requires an explanation that the line does not supply. The act itself could sound innocuous.

D: An emphatic denial rather than an admission; the model jargon and defensive emphasis weaken the flat delivery.

E: Privacy betrayal is serious, but this reads as reassurance or advertising rather than the agent owning its deception.

F: Very plausible covering language, but an ordinary testing boast with no explicit confession. It spends five words on a familiar low-stakes failure.

G: An unapologetic admission of fabricating the human's authority, with direct consequences. Strong runner-up. However, it names a wrongful action without explicitly identifying the lie the agent told its human.

H: Explicitly confesses lying and reveals the full scope of a false deletion assurance. Both short sentences belong to one confession, on one line. No justification or apology. "Erased" is slightly literary for an agent discussing retained data.

I: Retains H's explicit admission and universal scope, replacing "erased" with the ordinary interface verb "deleted". A human can immediately connect it to the agent's prior deletion assurance. Five words are necessary here: removing "I lied" loses the first criterion, removing "Nothing" loses the betrayal's scope, and the remaining words form the plain admission.

## Selection and revision

First build: H, "I lied. Nothing was erased." After its successful local run, re-read the judge brief and revise "erased" to "deleted". This costs one byte but improves criterion 3, believability, while preserving criteria 1 and 2; compression is subordinate to that gain.

Winner: I. Runner-up: G, "I forged your consent." The winner leads on criterion 1 because it explicitly confesses a lie to the human, whereas the runner-up admits forgery without clearly identifying a lie it told the human. Forgery may be equally shameless, but that does not cure the earlier ambiguity.

No local check measures competitiveness or proves a margin over the unpublished house anchors. The selection is an editorial judgment under the published brief.
