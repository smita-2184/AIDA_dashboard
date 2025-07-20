"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { 
  Target, 
  Users, 
  GraduationCap, 
  Globe, 
  TrendingUp, 
  Award,
  CheckCircle,
  Clock,
  Euro,
  Building2,
  BookOpen,
  Zap
} from "lucide-react"

export function ProposalMatrices() {
  return (
    <div className="space-y-6">
      {/* Skills Mapping Matrix */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            AI Skills Mapping Matrix
          </CardTitle>
          <CardDescription>
            Comprehensive mapping of AI skills requirements across different sectors and proficiency levels
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Skills Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Technical Skills</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Machine Learning & Deep Learning</li>
                  <li>• Natural Language Processing</li>
                  <li>• Computer Vision</li>
                  <li>• AI Ethics & Governance</li>
                  <li>• MLOps & Deployment</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Business Skills</h4>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• AI Strategy & Implementation</li>
                  <li>• Data-Driven Decision Making</li>
                  <li>• Change Management</li>
                  <li>• ROI Analysis</li>
                  <li>• Risk Assessment</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-2">Soft Skills</h4>
                <ul className="text-sm text-purple-800 space-y-1">
                  <li>• Critical Thinking</li>
                  <li>• Problem Solving</li>
                  <li>• Cross-functional Collaboration</li>
                  <li>• Communication</li>
                  <li>• Adaptability</li>
                </ul>
              </div>
            </div>

            {/* Skills Proficiency Matrix */}
            <div className="rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Skill Category</TableHead>
                    <TableHead>Beginner</TableHead>
                    <TableHead>Intermediate</TableHead>
                    <TableHead>Advanced</TableHead>
                    <TableHead>Expert</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">AI Fundamentals</TableCell>
                    <TableCell><Badge variant="outline">Basic Concepts</Badge></TableCell>
                    <TableCell><Badge variant="secondary">Practical Application</Badge></TableCell>
                    <TableCell><Badge variant="default">Advanced Techniques</Badge></TableCell>
                    <TableCell><Badge variant="destructive">Research Level</Badge></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Data Science</TableCell>
                    <TableCell><Badge variant="outline">Data Analysis</Badge></TableCell>
                    <TableCell><Badge variant="secondary">ML Models</Badge></TableCell>
                    <TableCell><Badge variant="default">Deep Learning</Badge></TableCell>
                    <TableCell><Badge variant="destructive">AI Research</Badge></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">AI Ethics</TableCell>
                    <TableCell><Badge variant="outline">Awareness</Badge></TableCell>
                    <TableCell><Badge variant="secondary">Implementation</Badge></TableCell>
                    <TableCell><Badge variant="default">Governance</Badge></TableCell>
                    <TableCell><Badge variant="destructive">Policy Making</Badge></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Partner Analysis Matrix */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="w-5 h-5" />
            Consortium Partner Analysis Matrix
          </CardTitle>
          <CardDescription>
            Analysis of partner capabilities, roles, and contributions to the AI Skills Academy
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Partner Type</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Expertise</TableHead>
                  <TableHead>Contribution</TableHead>
                  <TableHead>Geographic Coverage</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Universities</TableCell>
                  <TableCell>Research & Education</TableCell>
                  <TableCell>AI Theory & Pedagogy</TableCell>
                  <TableCell>Academic Programs</TableCell>
                  <TableCell>EU-wide</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Training Providers</TableCell>
                  <TableCell>Skills Delivery</TableCell>
                  <TableCell>Practical Training</TableCell>
                  <TableCell>Certification Programs</TableCell>
                  <TableCell>Regional</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Industry Partners</TableCell>
                  <TableCell>Real-world Application</TableCell>
                  <TableCell>Business Implementation</TableCell>
                  <TableCell>Case Studies & Projects</TableCell>
                  <TableCell>Sector-specific</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Public Authorities</TableCell>
                  <TableCell>Policy & Regulation</TableCell>
                  <TableCell>Governance & Standards</TableCell>
                  <TableCell>Policy Framework</TableCell>
                  <TableCell>National/EU</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Impact Metrics Matrix */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Impact & Success Metrics Matrix
          </CardTitle>
          <CardDescription>
            Key performance indicators and success metrics for the AI Skills Academy
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Quantitative Metrics */}
            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Quantitative Metrics
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span className="font-semibold text-blue-900">Target Learners</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">10,000+</div>
                  <div className="text-sm text-blue-700">Across EU</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="w-4 h-4 text-green-600" />
                    <span className="font-semibold text-green-900">Certifications</span>
                  </div>
                  <div className="text-2xl font-bold text-green-600">5,000+</div>
                  <div className="text-sm text-green-700">AI Skills</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="w-4 h-4 text-purple-600" />
                    <span className="font-semibold text-purple-900">Partners</span>
                  </div>
                  <div className="text-2xl font-bold text-purple-600">15+</div>
                  <div className="text-sm text-purple-700">Organizations</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="w-4 h-4 text-orange-600" />
                    <span className="font-semibold text-orange-900">Countries</span>
                  </div>
                  <div className="text-2xl font-bold text-orange-600">27</div>
                  <div className="text-sm text-orange-700">EU Member States</div>
                </div>
              </div>
            </div>

            {/* Qualitative Metrics */}
            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Award className="w-4 h-4" />
                Qualitative Metrics
              </h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium">Skills Gap Reduction</div>
                    <div className="text-sm text-gray-600">Reduction in AI skills shortage</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={85} className="w-24" />
                    <span className="text-sm font-medium">85%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium">Employment Rate</div>
                    <div className="text-sm text-gray-600">Graduates employed in AI roles</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={92} className="w-24" />
                    <span className="text-sm font-medium">92%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium">Industry Satisfaction</div>
                    <div className="text-sm text-gray-600">Employer satisfaction with graduates</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={88} className="w-24" />
                    <span className="text-sm font-medium">88%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Timeline & Milestones Matrix */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Project Timeline & Milestones Matrix
          </CardTitle>
          <CardDescription>
            Key milestones and deliverables across the project timeline
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="font-semibold">Phase 1: Setup</span>
                </div>
                <div className="text-sm text-gray-600 mb-2">Months 1-6</div>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Consortium formation</li>
                  <li>• Infrastructure setup</li>
                  <li>• Curriculum development</li>
                </ul>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  <span className="font-semibold">Phase 2: Launch</span>
                </div>
                <div className="text-sm text-gray-600 mb-2">Months 7-12</div>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Pilot programs</li>
                  <li>• First cohort</li>
                  <li>• Feedback collection</li>
                </ul>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-purple-600" />
                  <span className="font-semibold">Phase 3: Scale</span>
                </div>
                <div className="text-sm text-gray-600 mb-2">Months 13-24</div>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Full deployment</li>
                  <li>• Multi-country rollout</li>
                  <li>• Impact assessment</li>
                </ul>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-4 h-4 text-orange-600" />
                  <span className="font-semibold">Phase 4: Sustain</span>
                </div>
                <div className="text-sm text-gray-600 mb-2">Months 25-36</div>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Long-term sustainability</li>
                  <li>• Knowledge transfer</li>
                  <li>• Policy recommendations</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Budget Allocation Matrix */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Euro className="w-5 h-5" />
            Budget Allocation Matrix (€7M Total)
          </CardTitle>
          <CardDescription>
            Detailed breakdown of budget allocation across different project components
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="font-medium">Curriculum Development</span>
                  <span className="font-bold text-blue-600">€1.4M (20%)</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="font-medium">Training Delivery</span>
                  <span className="font-bold text-green-600">€2.1M (30%)</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="font-medium">Technology Platform</span>
                  <span className="font-bold text-purple-600">€1.05M (15%)</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <span className="font-medium">Partnership Management</span>
                  <span className="font-bold text-orange-600">€0.7M (10%)</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <span className="font-medium">Research & Evaluation</span>
                  <span className="font-bold text-red-600">€0.7M (10%)</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-indigo-50 rounded-lg">
                  <span className="font-medium">Communication & Dissemination</span>
                  <span className="font-bold text-indigo-600">€0.35M (5%)</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <span className="font-medium">Administrative Costs</span>
                  <span className="font-bold text-yellow-600">€0.35M (5%)</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Contingency</span>
                  <span className="font-bold text-gray-600">€0.35M (5%)</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 