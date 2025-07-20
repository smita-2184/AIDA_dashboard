"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Euro, Users, Target, BookOpen, Building2, BarChart3, Briefcase, MapPin, BarChart } from "lucide-react"
import { CallOverview } from "@/components/call-overview"
import { ConsortiumTable } from "@/components/consortium-table"
import { ResourcesTable } from "@/components/resources-table"
import { TimelineTable } from "@/components/timeline-table"
import { BudgetTracker } from "@/components/budget-tracker"
import { PillarsOverview } from "@/components/pillars-overview"
import { OnTheJobTrainingTable } from "@/components/on-the-job-training-table"
import { ApprenticeshipMap } from "@/components/apprenticeship-map"
import { ProposalMatrices } from "@/components/proposal-matrices"

export default function ProposalOrganizer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center items-center gap-4 mb-4">
            <img src="/aida-logo.png" alt="AIDA Logo" className="w-24 h-16" />
            <div>
              <h1 className="text-4xl font-bold text-gray-900">EU AI Skills Academy Proposal Organizer</h1>
              <p className="text-sm text-blue-600 font-medium">Powered by AIDA Consortium</p>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            DIGITAL-2025-SKILLS-08-GENAI-ACADEMY-STEP — Sectoral Digital Skills Academies
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Badge variant="secondary" className="text-sm">
              <Euro className="w-4 h-4 mr-1" />
              €7M Budget
            </Badge>
            <Badge variant="secondary" className="text-sm">
              <CalendarDays className="w-4 h-4 mr-1" />
              Deadline: Sept 2, 2025
            </Badge>
            <Badge variant="secondary" className="text-sm">
              <Users className="w-4 h-4 mr-1" />
              Min 6 Partners
            </Badge>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-9 lg:w-fit lg:grid-cols-9">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="pillars" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Pillars
            </TabsTrigger>
            <TabsTrigger value="consortium" className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              Consortium
            </TabsTrigger>
            <TabsTrigger value="resources" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Resources
            </TabsTrigger>
            <TabsTrigger value="training" className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Training
            </TabsTrigger>
            <TabsTrigger value="apprenticeship" className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Apprenticeship
            </TabsTrigger>
            <TabsTrigger value="matrices" className="flex items-center gap-2">
              <BarChart className="w-4 h-4" />
              Matrices
            </TabsTrigger>
            <TabsTrigger value="timeline" className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4" />
              Timeline
            </TabsTrigger>
            <TabsTrigger value="budget" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Budget
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <CallOverview />
          </TabsContent>

          <TabsContent value="pillars">
            <PillarsOverview />
          </TabsContent>

          <TabsContent value="consortium">
            <ConsortiumTable />
          </TabsContent>

          <TabsContent value="resources">
            <ResourcesTable />
          </TabsContent>

          <TabsContent value="training">
            <OnTheJobTrainingTable />
          </TabsContent>

          <TabsContent value="apprenticeship">
            <ApprenticeshipMap />
          </TabsContent>

          <TabsContent value="matrices">
            <ProposalMatrices />
          </TabsContent>

          <TabsContent value="timeline">
            <TimelineTable />
          </TabsContent>

          <TabsContent value="budget">
            <BudgetTracker />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
