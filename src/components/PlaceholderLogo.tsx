type PlaceholderLogoProps = {
  label: string
}

export function PlaceholderLogo({ label }: PlaceholderLogoProps) {
  return (
    <div className="placeholder-logo">
      <span>{label}</span>
    </div>
  )
}
