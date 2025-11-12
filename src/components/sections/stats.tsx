import { Trophy, ShieldCheck, Scale, Award, Gavel } from 'lucide-react';



const stats = [

  { value: "5,600+", label: "Solved Cases", icon: ShieldCheck },

  { value: "4,000+", label: "Cases Won", icon: Gavel },

  { value: "10+", label: "Awards Won", icon: Trophy },


  { value: "Top 10", label: "Law Firm Ranking", icon: Scale },


  { value: "25+", label: "Years in Practice", icon: Award },

];



export default function Stats() {

  return (

    <section id="stats" className="bg-primary text-primary-foreground py-16 sm:py-24">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

          {stats.map((stat) => (

            <div key={stat.label} className="flex flex-col items-center">

              <stat.icon className="h-12 w-12 text-accent mb-3" />

              <p className="text-4xl font-bold font-headline">{stat.value}</p>

              <p className="text-sm uppercase tracking-wider text-primary-foreground/80 mt-1">{stat.label}</p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}