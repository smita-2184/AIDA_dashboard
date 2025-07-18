import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, BarChart3, GraduationCap, Target } from "lucide-react"

export function PillarsOverview() {
  const pillars = [
    {
      id: 1,
      title: "Supporting Knowledge, Education, and Training",
      icon: BookOpen,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      activities: [
        "Complement existing information on AI skills needs and gaps in the EU",
        "Design curricula for educational programmes and trainings",
        "Implement and pilot educational programmes",
        "Implement at least one Bachelor or Master's programme in generative AI",
        "Support women participation through scholarships and returnships",
        "Provide training opportunities for the unemployed",
      ],
    },
    {
      id: 2,
      title: "Building the Ecosystem",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-50",
      activities: [
        "Attract and retain European and international talent",
        "Facilitate matching of AI-skilled workers with opportunities",
        "Build diverse ecosystem of stakeholders",
        "Promote AI fellowships for international talent",
        "Offer practical professional experiences with industry",
        "Pilot full-time AI apprenticeship programme",
        "Communicate opportunities through DSJP platform",
      ],
    },
    {
      id: 3,
      title: "Measuring Progress",
      icon: BarChart3,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      activities: [
        "Monitor impact of Academy activities",
        "Track progress in closing AI skills gaps",
        "Collect and analyze participant feedback",
        "Measure outcomes and results",
        "Report on ecosystem development",
        "Assess talent retention and attraction",
      ],
    },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Three Pillars of Action</h2>
        <p className="text-gray-600">The AI Skills Academy activities are centered around these core pillars</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {pillars.map((pillar) => {
          const IconComponent = pillar.icon
          return (
            <Card key={pillar.id} className="h-full">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${pillar.bgColor} flex items-center justify-center mb-4`}>
                  <IconComponent className={`w-6 h-6 ${pillar.color}`} />
                </div>
                <CardTitle className="text-lg">
                  Pillar {pillar.id}: {pillar.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {pillar.activities.map((activity, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                      <Target className="w-3 h-3 mt-1 text-gray-400 flex-shrink-0" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-indigo-600" />
            Key Deliverables
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900">Educational Programs</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Bachelor/Master's in Generative AI</li>
                <li>• Higher education curricula</li>
                <li>• Technical education programs</li>
                <li>• On-the-job training schemes</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900">Ecosystem Building</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• AI apprenticeship program</li>
                <li>• Fellowship schemes</li>
                <li>• Industry partnerships</li>
                <li>• DSJP platform integration</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
