import { ContactSection } from "@/components/Contact/ContactSection";
import { Count } from "@/components/Count/Count";
import { Hero } from "@/components/Hero/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { features } from "@/data/featureIcons";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Count />
      <section className="bg-gray-50 py-16 px-6 text-center items-center flex flex-col">
        <h2 className="text-5xl font-semibold mb-8 ">
          Why Choose <span className="text-[#3b8eca] font-bold">Wel</span>
          <span className="text-blue-950 font-bold">shire</span>
          <span className="text-amber-500 font-bold">?</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-2 justify-center lg:grid-cols-2 gap-8 ">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="p-4 h-40  shadow max-w-80 text-center space-y-3"
            >
              <CardContent className="flex h-full flex-col items-center justify-center space-y-2">
                {feature.icon}
                <p className="text-lg font-medium">{feature.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <ContactSection />
    </div>
  );
};

export default Home;
