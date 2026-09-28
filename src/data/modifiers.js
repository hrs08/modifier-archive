// This file is SAMPLE DATA ONLY.
//
// The entries below are generic placeholders so you can see the app working —
// they are intentionally NOT taken from any specific book. Replace them with
// your own reading notes. Each entry follows the same shape:
//
// {
//   id: unique number,
//   name: string,
//   category: string (used for the filter chips — reuse categories you like),
//   effect: string — what it does, in plain terms,
//   hidden: string — the part that isn't obvious on a first read,
//   knownBy: array of strings — who is aware of it in-story,
//   connections: array of strings — names of OTHER entries this links to
//     (must match another entry's "name" exactly to render as a tag)
// }
//
// Add, remove, or rename fields freely — just update the components in
// src/components/ if you change the shape of an entry.

export const modifiers = [
  {
    id: 1,
    name: 'Regression',
    category: 'core-ability',
    effect: 'Returns its holder to a fixed point in time, memories intact, after death.',
    hidden: 'Only one character is ever confirmed to have this. Whether anyone else quietly shares it is left open.',
    knownBy: ['The protagonist'],
    connections: ['Fourth Wall Awareness'],
  },
  {
    id: 2,
    name: 'Fourth Wall Awareness',
    category: 'meta',
    effect: 'Recognizing that the current world follows the structure of a known story.',
    hidden: 'What this actually grants is never stated outright — only inferred from how the character acts on it.',
    knownBy: ['The protagonist', 'One close ally'],
    connections: ['Regression', 'Narrative Sponsor'],
  },
  {
    id: 3,
    name: 'Narrative Sponsor',
    category: 'system',
    effect: 'An outside watcher grants power or resources in exchange for a compelling story.',
    hidden: 'Sponsors can withdraw support without warning the moment the story stops being interesting to them.',
    knownBy: ['Most characters, by the later arcs'],
    connections: ['Fourth Wall Awareness'],
  },
  {
    id: 4,
    name: 'Silent Whisper',
    category: 'hidden',
    effect: 'A passive ability that lets its holder receive information no one else can hear.',
    hidden: 'Whether it is a blessing or a curse is left deliberately ambiguous for most of the story.',
    knownBy: ['Unconfirmed'],
    connections: [],
  },
  {
    id: 5,
    name: 'Twin Vessel',
    category: 'identity',
    effect: 'Two separate identities occupying the same body at different points in the timeline.',
    hidden: 'Which identity is the "original" one is never resolved on the page.',
    knownBy: ['The protagonist', 'A small circle'],
    connections: ['Regression'],
  },
  {
    id: 6,
    name: 'Last Line',
    category: 'hidden',
    effect: 'A single sentence, spoken once, that reframes how an entire arc reads in hindsight.',
    hidden: 'Its exact wording is withheld from the reader until the final chapters of its arc.',
    knownBy: ['Unrevealed'],
    connections: ['Narrative Sponsor'],
  },
]

// Categories are derived automatically from the data above (see App.jsx),
// so you never need to update a separate list by hand.
