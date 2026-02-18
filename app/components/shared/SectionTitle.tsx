interface SectionTitleProps {
  title1: string;
  title2: string;
  subtitle: string;
}

export default function SectionTitle({ title1, title2, subtitle }: SectionTitleProps) {
  return (
    <div >
      <p className="uppercase">{subtitle}</p>
      <div className="flex items-center gap-2 text-3xl lowercase">
        <h2>{title1}</h2>
        <h2 className="font-semibold">{title2}</h2>
      </div>
    </div>
  )
}
