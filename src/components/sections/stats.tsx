import Image from 'next/image';

const stats = [
  { value: "5,600+", label: "Solved Cases", icon: "/images/icons/balance.png" },
  { value: "4,000+", label: "Cases Won", icon: "/images/icons/gavel.png" },
  { value: "10+", label: "Awards Won", icon: "/images/icons/trophy.png" },
  { value: "25+", label: "Years in Practice", icon: "/images/icons/award.png" },
];

export default function Stats() {
  return (
    <section id="stats" className="bg-primary text-primary-foreground py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div className="relative h-12 w-12 mb-3">
                 <Image src={stat.icon} alt={stat.label} fill className="object-contain filter invert brightness-0" />
              </div>
              <p className="text-4xl font-bold font-headline">{stat.value}</p>
              <p className="text-sm uppercase tracking-wider text-primary-foreground/80 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
