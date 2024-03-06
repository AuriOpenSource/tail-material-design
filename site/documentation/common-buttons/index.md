---
title: Common Buttons
description: Common buttons prompt most actions in a UI
slug: sveltekit-markdown-blog
theme: '#3e4a36'
thumb: https://lh3.googleusercontent.com/fBiDraZxIJW5LYve7S3RGdiBIk48r1K6TXtpJsQQnfYMiDpUwrIaDT3CNLkqoNrxUTfuBQ5lX5fGpl12bND5_pEhiZcUfV_7C345dXfCxb7kn0b7oAcT=s0
published: '2023-04-28'
category:
  - sveltekit
  - tutorial
---

## Overview

Common buttons prompt most actions in a UI.

- Can contain an optional leading icon
- Five types: elevated, [filled](#Filled), filled tonal, [outlined](#Outlined), and text
- Keep labels concise and in sentence-case
- Containers have fully rounded corners and are wide enough to fit label text

Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like, Dialogs, Modal windows, Forms, Cards, Toolbars.

But buttons are just one option for representing actions in a product and shouldn’t be overused. Too many buttons on a screen disrupts the visual hierarchy. Consider placing additional actions in a navigation drawer, set of chips, text links, or icon buttons.

## Usage

For now there are 3 kinds of buttons.

### Label Text

Label text is the most important element of a button. It describes the action that will occur if a user taps a button.

Capitalize the first letter of the first word and proper nouns in button label text. This allows the text to distinguish proper nouns, for example: Book with Flights vs BOOK WITH FLIGHTS.

### Common Structure

You can just use the common structure, that alone can make it look like a ghost button, it adds padding, fully rounded corners and holds the label text.

```svelte
<button class="btn">Common</button>
```

### Filled

Filled buttons have the most visual impact after the FAB, and should be used for important, final actions
that complete a flow, like Save, Join now, or Confirm.

Filled buttons display a container around a text label. Container size can be described in different ways:

- Set container width to the size of the text label with consistent padding on the left and right
- Set the container’s relative position to the responsive layout grid

Filled buttons should have containers with a solid color.

```svelte
<button class="btn btn-filled">Filled</button>
```

### Outlined

Outlined buttons are medium-emphasis buttons. They contain actions that are important, but aren’t the
primary action in an app.

Outlined buttons pair well with filled buttons to indicate an alternative, secondary action.

```svelte
<button class="btn btn-outlined">Outlined</button>
```
