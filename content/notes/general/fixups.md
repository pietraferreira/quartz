---
title: "Fixups"
tags:
  - cs-concept/relocations
---
# Fix-ups
---
Fix-ups are used to represent information in instructions which is currently
unknown. During instruction encoding, if some information is unknown (such as a memory location of an external symbol), it is encoded as if the value is equal
to 0 and a fix-up is emitted which contains information on how to rewrite the
value when information is known.

The assembler goes through a stage of relaxation, applying fix-ups and modifying instruction values when they become known to the system. Once complete, any remaining fix-ups are converted to [relocations](notes/private/work/relocations.md) and stored in the object file.

Source: Embecosm