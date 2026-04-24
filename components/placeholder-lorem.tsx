const DEFAULT_LOREM = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Integer at erat facilisis, tincidunt nisl vel, pharetra magna. Curabitur id lacus a felis tristique tincidunt. Nam pretium, augue a dignissim scelerisque, mauris sem pulvinar massa, sit amet hendrerit nisi risus a risus.",
];

type PlaceholderLoremProps = {
  /** Extra paragraphs; defaults to three lorem blocks. */
  extraParagraphs?: string[];
};

export function PlaceholderLorem({ extraParagraphs }: PlaceholderLoremProps) {
  const lines = [
    ...DEFAULT_LOREM,
    ...(extraParagraphs?.length ? extraParagraphs : []),
  ];
  return (
    <div className="space-y-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
      {lines.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
    </div>
  );
}
