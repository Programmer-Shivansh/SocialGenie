import {
  LandingContainer,
  LandingCTA,
  LandingFAQ,
  LandingFeatures,
  LandingHero,
  LandingHowItWorks,
  LandingPainPoints,
  LandingPricing,
  LandingSocialProof,
  LandingSocialRating,
  LandingTestimonials,
} from '~/designSystem'

export default function LandingPage() {
  const features = [
    {
      heading: `AI-Powered Content Creation`,
      description: `Generate engaging social media posts and captions automatically with our advanced AI technology that maintains your brand voice.`,
      icon: <i className="las la-robot"></i>,
    },
    {
      heading: `Smart Scheduling`,
      description: `Post at optimal times across all platforms with our intelligent scheduling system that maximizes engagement.`,
      icon: <i className="las la-clock"></i>,
    },
    {
      heading: `Multi-Platform Management`,
      description: `Manage all your social accounts from one dashboard with seamless cross-posting capabilities.`,
      icon: <i className="las la-share-alt"></i>,
    },
    {
      heading: `Brand Consistency`,
      description: `Maintain visual and messaging consistency with AI that learns and applies your brand guidelines.`,
      icon: <i className="las la-palette"></i>,
    },
    {
      heading: `Performance Analytics`,
      description: `Track engagement, reach, and ROI with comprehensive analytics and actionable insights.`,
      icon: <i className="las la-chart-line"></i>,
    },
    {
      heading: `Time-Saving Automation`,
      description: `Save 15-20 hours per week with fully automated content creation and publishing workflows.`,
      icon: <i className="las la-magic"></i>,
    },
  ]

  const testimonials = [
    {
      name: `Sarah Johnson`,
      designation: `Digital Marketing Manager`,
      content: `This tool has completely transformed how we handle social media. We're posting more consistently and seeing 3x more engagement, all while spending less time on content creation.`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `Michael Chen`,
      designation: `E-commerce Owner`,
      content: `The AI-generated content is incredibly on-brand and engaging. My online store's social presence has never been stronger, and sales have increased by 40%.`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: `Emma Rodriguez`,
      designation: `Social Media Consultant`,
      content: `Managing multiple client accounts used to be overwhelming. Now I can deliver better results for more clients in half the time.`,
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `Pricing`,
      link: `#pricing`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Starter`,
      description: `Perfect for solopreneurs and small businesses`,
      monthly: 49,
      yearly: 470,
      features: [
        `3 social accounts`,
        `100 AI-generated posts/month`,
        `Basic analytics`,
        `Smart scheduling`,
      ],
    },
    {
      title: `Professional`,
      description: `Ideal for growing businesses and agencies`,
      monthly: 99,
      yearly: 950,
      features: [
        `10 social accounts`,
        `Unlimited AI-generated posts`,
        `Advanced analytics`,
        `Priority support`,
      ],
      highlight: true,
    },
    {
      title: `Enterprise`,
      description: `Custom solutions for large organizations`,
      monthly: 199,
      yearly: 1900,
      features: [
        `Unlimited social accounts`,
        `Custom AI training`,
        `API access`,
        `Dedicated success manager`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `How does the AI content generation work?`,
      answer: `Our AI analyzes your brand voice, past content, and industry trends to generate unique posts that resonate with your audience while maintaining your brand identity.`,
    },
    {
      question: `Can I review content before it's posted?`,
      answer: `Absolutely! You have full control to review, edit, or approve all content before it goes live.`,
    },
    {
      question: `Which social media platforms are supported?`,
      answer: `We currently support Twitter, Facebook, Instagram, LinkedIn, and Pinterest, with more platforms being added regularly.`,
    },
    {
      question: `How much time can I expect to save?`,
      answer: `Our users report saving 15-20 hours per week on average by automating their social media content creation and management.`,
    },
  ]

  const steps = [
    {
      heading: `Connect Your Accounts`,
      description: `Link your social media profiles in just a few clicks`,
    },
    {
      heading: `Set Your Brand Guidelines`,
      description: `Tell our AI about your brand voice, style, and content preferences`,
    },
    {
      heading: `Review Generated Content`,
      description: `Approve or edit AI-created posts that match your brand`,
    },
    {
      heading: `Automate & Grow`,
      description: `Let our system handle posting while you focus on scaling`,
    },
  ]

  const painPoints = [
    {
      emoji: `😫`,
      title: `Spending endless hours creating content`,
    },
    {
      emoji: `😤`,
      title: `Struggling to maintain consistent posting`,
    },
    {
      emoji: `😩`,
      title: `Missing opportunities due to poor timing`,
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Transform Your Social Media Presence with AI-Powered Content Creation`}
        subtitle={`Save 20+ hours per week while delivering engaging content that grows your audience and drives results`}
        buttonText={`Start Free Trial`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/s5q8Se-socialgenie-1EqI`}
        socialProof={
          <LandingSocialRating
            numberOfUsers={5000}
            suffixText={`from happy social media managers`}
          />
        }
      />
      <LandingSocialProof title={`Featured on`} />
      <LandingPainPoints
        title={`83% of marketers struggle with consistent social media management, impacting their business growth`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`Your Journey to Effortless Social Media Management`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Everything You Need to Dominate Social Media`}
        subtitle={`Powerful features that transform hours of work into minutes`}
        features={features}
      />
      <LandingTestimonials
        title={`Join Thousands of Successful Social Media Managers`}
        subtitle={`See how others are achieving more with less effort`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Choose Your Path to Social Media Success`}
        subtitle={`Plans that scale with your growth`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Common Questions About Our AI-Powered Platform`}
        subtitle={`Everything you need to know to get started`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Ready to Transform Your Social Media Strategy?`}
        subtitle={`Join thousands of successful businesses saving time and growing their audience`}
        buttonText={`Start Your Free Trial`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
