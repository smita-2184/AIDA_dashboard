import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Users, Euro, Calendar, MapPin, GraduationCap } from "lucide-react"

export function CallOverview() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600" />
            Call Objective
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">
            Create a one-stop-shop AI Skills Academy focusing on Generative AI to bridge the EU's AI skills gap, with
            particular emphasis on women's participation and key economic sectors.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Euro className="w-5 h-5 text-green-600" />
            Funding Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Budget:</span>
            <Badge variant="secondary">€7M</Badge>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Funding Rate:</span>
            <Badge variant="secondary">50%</Badge>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Duration:</span>
            <Badge variant="secondary">3-4 years</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-600" />
            Consortium Requirements
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="text-sm">
            <strong>Minimum:</strong> 6 entities from 3+ countries
          </div>
          <div className="space-y-1 text-xs text-gray-600">
            <div>• 2 Higher Education Institutions (ECHE)</div>
            <div>• 2 Industry Partners (SMEs/Startups)</div>
            <div>• 1 AI Research Organization</div>
            <div>• 1 VET Institution</div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-red-600" />
            Key Dates
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Opening:</span>
            <span className="font-medium">April 15, 2025</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Deadline:</span>
            <span className="font-medium text-red-600">Sept 2, 2025</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Results:</span>
            <span className="font-medium">Nov 2025</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Start:</span>
            <span className="font-medium">Feb 2026</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-orange-600" />
            Geographic Scope
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-2">Digital Europe Programme eligible countries:</p>
          <div className="flex flex-wrap gap-1">
            {["Austria", "Belgium", "Bulgaria", "Cyprus", "Czech Republic", "Germany", "Denmark"].map((country) => (
              <Badge key={country} variant="outline" className="text-xs">
                {country}
              </Badge>
            ))}
            <Badge variant="outline" className="text-xs">
              +20 more
            </Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-indigo-600" />
            Target Skills Level
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Badge variant="secondary">Advanced</Badge>
          <Badge variant="secondary">Digital Expert</Badge>
          <p className="text-xs text-gray-600 mt-2">
            Focus on Artificial Intelligence and Generative AI specialization
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
