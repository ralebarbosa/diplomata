
The user wants to reduce the white space between the text column and the image column in each row of the `ConhecaSection`.

Currently, the grid uses:
- `grid-cols-12` with text on `md:col-span-8` and image on `md:col-span-4`
- Gap: `gap-8 md:gap-12`
- Text has `max-w-[480px]` which leaves extra empty space on the right side of the text column before the image starts

The white space comes from two sources:
1. The `gap-12` between columns on desktop
2. The text column being 8/12 wide while the text itself is capped at 480px, creating empty space inside that column

**Plan:**

1. In `src/components/landing/ConhecaSection.tsx`:
   - Reduce the grid gap from `md:gap-12` to `md:gap-6`
   - Rebalance the columns: change text from `md:col-span-8` to `md:col-span-7` and image from `md:col-span-4` to `md:col-span-5` so the image sits closer to the text and is slightly larger
   - Optionally tighten the text `max-w-[480px]` to `max-w-[520px]` so the text fills its column more naturally before the gap

This keeps the same overall layout concept while visibly reducing the empty gap between text and image.
