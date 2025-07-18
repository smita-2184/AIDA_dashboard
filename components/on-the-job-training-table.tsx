"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, ExternalLink, Briefcase } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"

interface OnTheJobTraining {
  id: string
  title: string
  type: string
  country: string
  description: string
  url: string
  tags: string[]
}

export function OnTheJobTrainingTable() {
  const [trainings, setTrainings] = useState<OnTheJobTraining[]>([
    {
      id: "1",
      title: "Continuing Education Grant (Germany)",
      type: "Funding",
      country: "Germany",
      description: "German continuing education grant program for adult learning and professional development",
      url: "https://www.cedefop.europa.eu/en/tools/financing-adult-learning-db/search/continuing-education-grant",
      tags: ["Germany", "Funding", "Adult Learning", "Professional Development"],
    },
    {
      id: "2",
      title: "Continuing Training 2020 (Germany)",
      type: "Funding",
      country: "Germany",
      description: "German continuing training program for 2020 and beyond",
      url: "https://www.cedefop.europa.eu/en/tools/financing-adult-learning-db/search/continuing-training-2020",
      tags: ["Germany", "Funding", "Continuing Training", "2020"],
    },
    {
      id: "3",
      title: "Education Voucher (Germany)",
      type: "Funding",
      country: "Germany",
      description: "German education voucher system for training and education programs",
      url: "https://www.cedefop.europa.eu/en/tools/financing-adult-learning-db/search/education-voucher",
      tags: ["Germany", "Funding", "Education Voucher", "Training"],
    },
    {
      id: "4",
      title: "Educational Leave Bremen (Germany)",
      type: "Funding",
      country: "Germany",
      description: "Educational leave program in Bremen, Germany for professional development",
      url: "https://www.cedefop.europa.eu/en/tools/financing-adult-learning-db/search/educational-leave-bremen-0",
      tags: ["Germany", "Bremen", "Educational Leave", "Professional Development"],
    },
    {
      id: "5",
      title: "Educational Leave Hessen (Germany)",
      type: "Funding",
      country: "Germany",
      description: "Educational leave program in Hessen, Germany for training and education",
      url: "https://www.cedefop.europa.eu/en/tools/financing-adult-learning-db/search/educational-leave-hessen-0",
      tags: ["Germany", "Hessen", "Educational Leave", "Training"],
    },
    {
      id: "6",
      title: "Federal Training Assistance Act (BAföG)",
      type: "Funding",
      country: "Germany",
      description: "German federal training assistance act providing financial support for education and training",
      url: "https://www.cedefop.europa.eu/en/tools/financing-adult-learning-db/search/federal-training-assistance-act-bafog",
      tags: ["Germany", "BAföG", "Federal Funding", "Training Assistance"],
    },
    {
      id: "7",
      title: "Funding for Companies - German Länder",
      type: "Funding",
      country: "Germany",
      description: "Funding programs for companies across German federal states (Länder)",
      url: "https://www.cedefop.europa.eu/en/tools/financing-adult-learning-db/search/funding-companies-german-lander-0",
      tags: ["Germany", "Länder", "Company Funding", "Federal States"],
    },
    {
      id: "8",
      title: "ESF Funding Programme - Specialised Workers Courses (Electric Mobility)",
      type: "Funding",
      country: "Germany",
      description: "ESF funding program for specialized worker courses focusing on electric mobility (2014-2020)",
      url: "https://www.cedefop.europa.eu/en/tools/financing-adult-learning-db/search/funding-programme-specialised-workers-courses-focus-electric-mobility-esf-2014-2020",
      tags: ["Germany", "ESF", "Electric Mobility", "Specialized Workers", "2014-2020"],
    },
    {
      id: "9",
      title: "KfW Students Loan (Germany)",
      type: "Funding",
      country: "Germany",
      description: "KfW student loan program for financing education and training in Germany",
      url: "https://www.cedefop.europa.eu/en/tools/financing-adult-learning-db/search/kfw-students-loan",
      tags: ["Germany", "KfW", "Student Loan", "Education Financing"],
    },
    {
      id: "10",
      title: "Mecklenburg-Vorpommern Training Vouchers for Start-ups and Founders",
      type: "Funding",
      country: "Germany",
      description: "Training voucher program in Mecklenburg-Vorpommern for start-ups and founders",
      url: "https://www.cedefop.europa.eu/en/tools/financing-adult-learning-db/search/mecklenburg-vorpommern-training-vouchers-start-founders",
      tags: ["Germany", "Mecklenburg-Vorpommern", "Training Vouchers", "Start-ups", "Founders"],
    },
    {
      id: "11",
      title: "North Rhine-Westphalia Education Cheque",
      type: "Funding",
      country: "Germany",
      description: "Education cheque program in North Rhine-Westphalia for training and education",
      url: "https://www.cedefop.europa.eu/en/tools/financing-adult-learning-db/search/north-rhine-westphalia-education-cheque",
      tags: ["Germany", "North Rhine-Westphalia", "Education Cheque", "Training"],
    },
    {
      id: "12",
      title: "North Rhine-Westphalia Education Cheque (Alternative)",
      type: "Funding",
      country: "Germany",
      description: "Alternative education cheque program in North Rhine-Westphalia",
      url: "https://www.cedefop.europa.eu/en/tools/financing-adult-learning-db/search/northrhine-westphalia-education-cheque",
      tags: ["Germany", "North Rhine-Westphalia", "Education Cheque", "Alternative"],
    },
    {
      id: "13",
      title: "Payback Commitment (Germany)",
      type: "Funding",
      country: "Germany",
      description: "German payback commitment program for training and education funding",
      url: "https://www.cedefop.europa.eu/en/tools/financing-adult-learning-db/search/payback-commitment-0",
      tags: ["Germany", "Payback Commitment", "Training Funding"],
    },
    {
      id: "14",
      title: "Qualifications Opportunities Act (Germany)",
      type: "Funding",
      country: "Germany",
      description: "German qualifications opportunities act for professional development and training",
      url: "https://www.cedefop.europa.eu/en/tools/financing-adult-learning-db/search/qualifications-opportunities-act",
      tags: ["Germany", "Qualifications Opportunities Act", "Professional Development"],
    },
    {
      id: "15",
      title: "Scholarship Advancement (Germany)",
      type: "Funding",
      country: "Germany",
      description: "German scholarship advancement program for education and training support",
      url: "https://www.cedefop.europa.eu/en/tools/financing-adult-learning-db/search/scholarship-advancement-0",
      tags: ["Germany", "Scholarship", "Advancement", "Education Support"],
    },
    {
      id: "16",
      title: "Tax Allowance for Work-related Income-related Expenses (Germany)",
      type: "Funding",
      country: "Germany",
      description: "German tax allowance for work-related expenses including training and education costs",
      url: "https://www.cedefop.europa.eu/en/tools/financing-adult-learning-db/search/tax-allowance-work-related-income-related-expensesspecial-expenses-0",
      tags: ["Germany", "Tax Allowance", "Work-related Expenses", "Training Costs"],
    },
    {
      id: "17",
      title: "Training Fund Scaffolding Sector (Germany)",
      type: "Funding",
      country: "Germany",
      description: "Training fund for the scaffolding sector in Germany",
      url: "https://www.cedefop.europa.eu/en/tools/financing-adult-learning-db/search/training-fund-scaffolding-sector-0",
      tags: ["Germany", "Training Fund", "Scaffolding Sector", "Sector-specific"],
    },
    {
      id: "18",
      title: "Upgrading Training Assistance (Germany)",
      type: "Funding",
      country: "Germany",
      description: "German upgrading training assistance program for professional development",
      url: "https://www.cedefop.europa.eu/en/tools/financing-adult-learning-db/search/upgrading-training-assistance",
      tags: ["Germany", "Upgrading Training", "Professional Development", "Assistance"],
    },
    {
      id: "19",
      title: "Interprofessional Funds (Italy)",
      type: "Funding",
      country: "Italy",
      description: "Italian interprofessional funds for training and professional development",
      url: "https://www.cedefop.europa.eu/en/tools/financing-adult-learning-db/search/interprofessional-funds",
      tags: ["Italy", "Interprofessional Funds", "Training", "Professional Development"],
    },
    {
      id: "20",
      title: "Loan for Studies (Italy)",
      type: "Funding",
      country: "Italy",
      description: "Italian loan program for financing studies and training",
      url: "https://www.cedefop.europa.eu/en/tools/financing-adult-learning-db/search/loan-studies-0",
      tags: ["Italy", "Loan", "Studies", "Training Financing"],
    },
    {
      id: "21",
      title: "Tax Allowance for Conference and Seminar Costs (Italy)",
      type: "Funding",
      country: "Italy",
      description: "Italian tax allowance for costs related to participation in conferences, seminars, and updating courses",
      url: "https://www.cedefop.europa.eu/en/tools/financing-adult-learning-db/search/tax-allowance-costs-related-participation-conference-seminars-updating-courses",
      tags: ["Italy", "Tax Allowance", "Conferences", "Seminars", "Updating Courses"],
    },
    {
      id: "22",
      title: "Tax Credits for Training Costs (Italy)",
      type: "Funding",
      country: "Italy",
      description: "Italian tax credits where training costs are deducted from tax due",
      url: "https://www.cedefop.europa.eu/en/tools/financing-adult-learning-db/search/tax-credits-costs-related-training-are-deducted-tax-due-0",
      tags: ["Italy", "Tax Credits", "Training Costs", "Tax Deduction"],
    },
    {
      id: "23",
      title: "Training Leave (Italy)",
      type: "Funding",
      country: "Italy",
      description: "Italian training leave program for professional development",
      url: "https://www.cedefop.europa.eu/en/tools/financing-adult-learning-db/search/training-leave-17",
      tags: ["Italy", "Training Leave", "Professional Development"],
    },
    {
      id: "24",
      title: "Training Tax Credit 40% (Italy)",
      type: "Funding",
      country: "Italy",
      description: "Italian training tax credit program providing 40% credit for training costs",
      url: "https://www.cedefop.europa.eu/en/tools/financing-adult-learning-db/search/training-tax-credit-40",
      tags: ["Italy", "Training Tax Credit", "40% Credit", "Training Costs"],
    },
    {
      id: "25",
      title: "Average Wage Earner Scheme (Malta)",
      type: "Funding",
      country: "Malta",
      description: "Malta's average wage earner scheme for training and professional development",
      url: "https://www.cedefop.europa.eu/en/tools/financing-adult-learning-db/search/average-wage-earner-scheme",
      tags: ["Malta", "Average Wage Earner", "Scheme", "Training"],
    },
    {
      id: "26",
      title: "Get Qualified (Malta)",
      type: "Funding",
      country: "Malta",
      description: "Malta's Get Qualified program for skills development and certification",
      url: "https://www.cedefop.europa.eu/en/tools/financing-adult-learning-db/search/get-qualified-0",
      tags: ["Malta", "Get Qualified", "Skills Development", "Certification"],
    },
    {
      id: "27",
      title: "Investing in Skills (Malta)",
      type: "Funding",
      country: "Malta",
      description: "Malta's Investing in Skills program for workforce development",
      url: "https://www.cedefop.europa.eu/en/tools/financing-adult-learning-db/search/investing-skills",
      tags: ["Malta", "Investing in Skills", "Workforce Development"],
    },
    {
      id: "28",
      title: "Training Pays Scheme (TPS) (Malta)",
      type: "Funding",
      country: "Malta",
      description: "Malta's Training Pays Scheme (TPS) for incentivizing training participation",
      url: "https://www.cedefop.europa.eu/en/tools/financing-adult-learning-db/search/training-pays-scheme-tps",
      tags: ["Malta", "Training Pays Scheme", "TPS", "Training Incentives"],
    },
    {
      id: "29",
      title: "Youth Specialisation Studies Scheme (Malta)",
      type: "Funding",
      country: "Malta",
      description: "Malta's Youth Specialisation Studies Scheme for young professionals",
      url: "https://www.cedefop.europa.eu/en/tools/financing-adult-learning-db/search/youth-specialisation-studies-scheme-0",
      tags: ["Malta", "Youth Specialisation", "Studies Scheme", "Young Professionals"],
    },
  ])

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingTraining, setEditingTraining] = useState<OnTheJobTraining | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    country: "",
    description: "",
    url: "",
    tags: "",
  })

  const trainingTypes = ["Funding", "Program", "Initiative", "Scheme"]
  const countries = ["Germany", "Italy", "Malta", "Greece", "Other"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trainingData = {
      ...formData,
      tags: formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag),
    }

    if (editingTraining) {
      setTrainings(
        trainings.map((t) => (t.id === editingTraining.id ? { ...trainingData, id: editingTraining.id } : t)),
      )
    } else {
      setTrainings([...trainings, { ...trainingData, id: Date.now().toString() }])
    }
    setIsDialogOpen(false)
    setEditingTraining(null)
    setFormData({ title: "", type: "", country: "", description: "", url: "", tags: "" })
  }

  const handleEdit = (training: OnTheJobTraining) => {
    setEditingTraining(training)
    setFormData({
      ...training,
      tags: training.tags.join(", "),
    })
    setIsDialogOpen(true)
  }

  const handleDelete = (id: string) => {
    setTrainings(trainings.filter((t) => t.id !== id))
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="w-5 h-5" />
            1.3 On-the-Job Training
          </CardTitle>
          <CardDescription>
            Funding programs and initiatives for on-the-job training and professional development from Germany, Italy, and Malta.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-2">
              <Badge variant="secondary">{trainings.length} Programs</Badge>
              <Badge variant="outline">Germany, Italy & Malta</Badge>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Training Program
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>
                    {editingTraining ? "Edit Training Program" : "Add New Training Program"}
                  </DialogTitle>
                  <DialogDescription>
                    {editingTraining ? "Update the training program details." : "Create a new on-the-job training program."}
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="type">Type</Label>
                      <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          {trainingTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Select value={formData.country} onValueChange={(value) => setFormData({ ...formData, country: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          {countries.map((country) => (
                            <SelectItem key={country} value={country}>
                              {country}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="url">URL</Label>
                      <Input
                        id="url"
                        value={formData.url}
                        onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                        placeholder="https://..."
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      rows={3}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="tags">Tags (comma-separated)</Label>
                    <Input
                      id="tags"
                      value={formData.tags}
                      onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                      placeholder="e.g., Germany, Funding, Training"
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit">
                      {editingTraining ? "Update" : "Create"} Training Program
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <div className="space-y-6">
            {/* Germany Section */}
            <div className="rounded-md border">
              <div className="bg-gray-50 px-4 py-3 border-b">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  🇩🇪 Germany
                  <Badge variant="secondary" className="ml-2">
                    {trainings.filter(t => t.country === "Germany").length} Programs
                  </Badge>
                </h3>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Tags</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {trainings
                    .filter((training) => training.country === "Germany")
                    .map((training) => (
                      <TableRow key={training.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{training.title}</div>
                            <div className="text-sm text-gray-500">{training.description}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary">{training.type}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {training.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                            {training.tags.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{training.tags.length - 2}
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            {training.url && (
                              <Button size="sm" variant="outline" asChild>
                                <a href={training.url} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                              </Button>
                            )}
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleEdit(training)}
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDelete(training.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>

            {/* Italy Section */}
            <div className="rounded-md border">
              <div className="bg-gray-50 px-4 py-3 border-b">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  🇮🇹 Italy
                  <Badge variant="secondary" className="ml-2">
                    {trainings.filter(t => t.country === "Italy").length} Programs
                  </Badge>
                </h3>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Tags</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {trainings
                    .filter((training) => training.country === "Italy")
                    .map((training) => (
                      <TableRow key={training.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{training.title}</div>
                            <div className="text-sm text-gray-500">{training.description}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary">{training.type}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {training.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                            {training.tags.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{training.tags.length - 2}
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            {training.url && (
                              <Button size="sm" variant="outline" asChild>
                                <a href={training.url} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                              </Button>
                            )}
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleEdit(training)}
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDelete(training.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>

            {/* Malta Section */}
            <div className="rounded-md border">
              <div className="bg-gray-50 px-4 py-3 border-b">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  🇲🇹 Malta
                  <Badge variant="secondary" className="ml-2">
                    {trainings.filter(t => t.country === "Malta").length} Programs
                  </Badge>
                </h3>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Tags</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {trainings
                    .filter((training) => training.country === "Malta")
                    .map((training) => (
                      <TableRow key={training.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{training.title}</div>
                            <div className="text-sm text-gray-500">{training.description}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary">{training.type}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {training.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                            {training.tags.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{training.tags.length - 2}
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            {training.url && (
                              <Button size="sm" variant="outline" asChild>
                                <a href={training.url} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                              </Button>
                            )}
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleEdit(training)}
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDelete(training.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 