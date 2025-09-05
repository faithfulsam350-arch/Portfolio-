
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { softSkills, technicalSkills, experiences, tools } from "@/lib/data";
import { ClickableImage } from "@/components/clickable-image";
import { ScrollAnimation } from "@/components/scroll-animation";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 md:px-[100px] py-12 md:py-16">
      <div className="flex flex-col items-center text-center mb-12">
        <ScrollAnimation>
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-6">Hello, I'm Faithful</h1>
        </ScrollAnimation>
        <ScrollAnimation delay={200}>
          <div className="w-72 h-72 mb-4 border-4 border-primary shadow-lg rounded-full overflow-hidden relative">
            <ClickableImage
              src="https://placehold.co/300x300.png"
              alt="Professional Headshot of Faithful Samuel"
              fill
              className="object-cover"
              data-ai-hint="professional headshot"
            />
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay={400}>
          <p className="text-muted-foreground">UI/UX Designer | Product Designer</p>
          <div className="mt-6 max-w-2xl space-y-4 text-foreground/80 text-left">
            <p>
              I started out in graphic design because I loved making things look good. But I quickly realized design is more than visuals, it’s about how people think, move, and connect with what you create. That curiosity led me into product design, where I could blend creativity with real problem-solving.
            </p>
            <p>
              Before stepping fully into UX, I worked on email marketing, SEO, and Shopify, helping brands grow and connect with their audiences. That experience taught me to think beyond the screen and to design with purpose, data, and results in mind.
            </p>
            <p>
              Now, I create digital experiences that are not just beautiful, but intentional and user-focused.
            </p>
             <p>
              And when I’m not designing, you can usually find me listening to music, making beats, taking photos of nature, or watching the sunset they are the calm, reflective moments that inspire my creativity.
            </p>
          </div>
        </ScrollAnimation>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <ScrollAnimation>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">My Skills & Strengths</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
               <div>
                  <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {technicalSkills.map(skill => (
                      <div key={skill.name} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <skill.icon className="h-6 w-6 text-primary" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
               </div>
               <div>
                  <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {softSkills.map(skill => (
                      <div key={skill.name} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <skill.icon className="h-6 w-6 text-primary" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
               </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Tools</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {tools.map(skill => (
                      <div key={skill.name} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <skill.icon className="h-6 w-6 text-primary" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
               </div>
            </CardContent>
          </Card>
        </ScrollAnimation>

        <ScrollAnimation>
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
