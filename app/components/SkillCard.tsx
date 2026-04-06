interface SkillCardProps {
  name: string;
}

export default function SkillCard({ name }: SkillCardProps) {
  return (
    <div className="group flex items-center justify-center rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:shadow-lg">
      <span className="text-sm font-medium text-black text-center">{name}</span>
    </div>
  );
}
