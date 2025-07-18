import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills, experiences } from "@/lib/data";
import { ScrollAnimation } from "@/components/scroll-animation";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 md:px-[100px] py-12 md:py-16">
      <div className="flex flex-col items-center text-center mb-12">
        <ScrollAnimation>
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-6">Hello, I'm Faithful Samuel</h1>
        </ScrollAnimation>
        <ScrollAnimation variant="grow">
          <Avatar className="w-48 h-48 mb-4 border-4 border-primary shadow-lg">
            <AvatarImage src="https://placehold.co/300x300.png" alt="Professional Headshot of Faithful Samuel" data-ai-hint="professional headshot" />
            <AvatarFallback>FS</AvatarFallback>
          </Avatar>
        </ScrollAnimation>
        <ScrollAnimation>
          <p className="text-muted-foreground">UI/UX Designer | Product Designer</p>
          <p className="mt-4 max-w-xl">
            I am a passionate UI/UX designer dedicated to creating clean, intuitive, and impactful digital products that users love.
          </p>
        </ScrollAnimation>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <ScrollAnimation delay="200">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">My Skills & Strengths</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map(skill => (
                  <div key={skill.name} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <skill.icon className="h-6 w-6 text-primary" />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>

        <ScrollAnimation delay="400">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Work Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6 relative before:absolute before:inset-y-0 before:w-px before:bg-border before:left-4">
                {experiences.map((exp, index) => (
                  <div key={index} className="pl-10 relative">
                    <div className="absolute left-4 top-1 w-2 h-2 rounded-full bg-primary -translate-x-1/2"></div>
                    <p className="text-xs text-muted-foreground">{exp.period}</p>
                    <h3 className="font-semibold text-lg">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-1">{exp.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>
    </div>
  );
}
