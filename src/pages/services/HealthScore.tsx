import ServicePage from "@/components/ServicePage";

const HealthScore = () => (
  <ServicePage
    seoTitle="Security Health Score Hyderabad | GuardX360"
    seoDescription="Annual Security Health Score for gated communities in Hyderabad — a benchmarked, written report on coverage, integration, documentation and readiness."
    eyebrow="Service 08"
    title="Security Health Score"
    description="A yearly, benchmarked view of your community's security readiness — in writing."
    image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80"
    imageAlt="Analytics report showing security performance indicators"
    intro="An AMC keeps individual systems running. The Security Health Score steps back and evaluates the whole infrastructure — coverage, integration, documentation, compliance and readiness — against last year's baseline."
    bullets={[
      "Full infrastructure review covering every camera, access point, boom barrier and fence line.",
      "Benchmark against the previous year's score to show progress or regression.",
      "Written report to the committee with a prioritized action plan.",
      "Keeps security spending planned and evidence-based, not reactive.",
    ]}
  />
);

export default HealthScore;
