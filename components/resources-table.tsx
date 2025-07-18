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
import { Plus, Edit, Trash2, ExternalLink, BookOpen } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"

interface Resource {
  id: string
  title: string
  type: string
  category: string
  url: string
  description: string
  tags: string[]
}

export function ResourcesTable() {
  const [resources, setResources] = useState<Resource[]>([
    {
      id: "1",
      title: "Digital Skills and Jobs Platform",
      type: "Platform",
      category: "Official EU Resources",
      url: "https://digital-skills-jobs.europa.eu",
      description: "Main platform where Academy activities will be uploaded",

      tags: ["DSJP", "Platform", "Integration"],
    },
    {
      id: "2",
      title: "Erasmus Charter for Higher Education",
      type: "Documentation",
      category: "Requirements",
      url: "https://erasmus-plus.ec.europa.eu/programme-guide/part-a/who-can-participate/eligible-organisations",
      description: "Requirements for HEI partners",
      tags: ["ECHE", "Requirements", "HEI"],
    },
    {
      id: "3",
      title: "AI Skills Gap Analysis Report",
      type: "Research",
      category: "Background Research",
      url: "https://example.com/ai-skills-gap",
      description: "Latest EU report on AI skills gaps",
      tags: ["Research", "Skills Gap", "Analysis"],
    },
    {
      id: "4",
      title: "Dual VET (Germany)",
      type: "Program",
      category: "Germany",
      url: "https://www.cedefop.europa.eu/en/tools/vet-toolkit-tackling-early-leaving/resources/dual-vet",
      description: "German dual education system - potential model for AI apprenticeships",
      priority: "High",
      status: "Reference",
      tags: ["Germany", "VET", "Dual Education", "Apprenticeship"],
    },
    {
      id: "5",
      title: "MCAST Apprenticeships (Malta)",
      type: "Program",
      category: "Malta",
      url: "https://www.cedefop.europa.eu/en/tools/vet-toolkit-tackling-early-leaving/resources/mcast-apprenticeships",
      description: "Malta College of Arts, Science and Technology apprenticeship programs",
      priority: "Medium",
      status: "Reference",
      tags: ["Malta", "VET", "MCAST", "Apprenticeship"],
    },
    {
      id: "6",
      title: "Italian Apprenticeship Type 1",
      type: "Program",
      category: "Italy",
      url: "https://www.cedefop.europa.eu/en/tools/vet-toolkit-tackling-early-leaving/resources/apprenticeship-vocational-qualification-diploma-upper-secondary-education-diploma-high-technical-specialisation-certificate-type-1",
      description:
        "Apprenticeship for vocational qualification and diploma, upper secondary education diploma and high technical specialisation certificate",
      priority: "Medium",
      status: "Reference",
      tags: ["Italy", "VET", "Type 1", "Vocational", "Apprenticeship"],
    },
    {
      id: "7",
      title: "Italian Higher Education Apprenticeship Type 3",
      type: "Program",
      category: "Italy",
      url: "https://www.cedefop.europa.eu/en/tools/vet-toolkit-tackling-early-leaving/resources/higher-education-research-apprenticeship-type-3",
      description: "Higher education and research apprenticeship program - relevant for AI Skills Academy structure",
      priority: "High",
      status: "Reference",
      tags: ["Italy", "VET", "Type 3", "Higher Education", "Research", "Apprenticeship"],
    },
    {
      id: "8",
      title: "EPAS Apprenticeships (Greece)",
      type: "Program",
      category: "Greece",
      url: "https://www.cedefop.europa.eu/en/tools/vet-toolkit-tackling-early-leaving/resources/epas-apprenticeships",
      description: "Greek apprenticeship system through EPAS (Manpower Employment Organisation)",
      priority: "Medium",
      status: "Reference",
      tags: ["Greece", "VET", "EPAS", "Apprenticeship"],
    },
  ])

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingResource, setEditingResource] = useState<Resource | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    category: "",
    url: "",
    description: "",
    tags: "",
  })

  const resourceTypes = ["Platform", "Documentation", "Research", "Template", "Tool", "Contact", "Program", "Funding", "Consortium"]

  const categories = [
    "Official EU Resources",
    "Requirements",
    "Background Research",
    "Templates",
    "Partner Resources",
    "Funding Information",
    "Technical Resources",
    "Best Practices",
    "VET Programs",
    "1.2 Vocational Training",
    "1.3 On-the-Job Training",
    "Germany",
    "Italy",
    "Malta",
    "Greece",
  ]



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const resourceData = {
      ...formData,
      tags: formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag),
    }

    if (editingResource) {
      setResources(
        resources.map((r) => (r.id === editingResource.id ? { ...resourceData, id: editingResource.id } : r)),
      )
    } else {
      setResources([...resources, { ...resourceData, id: Date.now().toString() }])
    }
    setIsDialogOpen(false)
    setEditingResource(null)
    setFormData({ title: "", type: "", category: "", url: "", description: "", tags: "" })
  }

  const handleEdit = (resource: Resource) => {
    setEditingResource(resource)
    setFormData({
      ...resource,
      tags: resource.tags.join(", "),
    })
    setIsDialogOpen(true)
  }

  const handleDelete = (id: string) => {
    setResources(resources.filter((r) => r.id !== id))
  }



  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        {categories.slice(0, 4).map((category) => {
          const count = resources.filter((r) => r.category === category).length
          return (
            <Card key={category}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{count}</div>
                <p className="text-xs text-gray-600">resources</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Resources & Links
              </CardTitle>
              <CardDescription>Organize all resources, links, and references for your proposal</CardDescription>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  onClick={() => {
                    setEditingResource(null)
                    setFormData({
                      title: "",
                      type: "",
                      category: "",
                      url: "",
                      description: "",

                      tags: "",
                    })
                  }}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Resource
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{editingResource ? "Edit Resource" : "Add New Resource"}</DialogTitle>
                  <DialogDescription>Add or edit resource information</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
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
                      <Select
                        value={formData.type}
                        onValueChange={(value) => setFormData({ ...formData, type: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          {resourceTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Select
                        value={formData.category}
                        onValueChange={(value) => setFormData({ ...formData, category: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="url">URL</Label>
                      <Input
                        id="url"
                        type="url"
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
                      placeholder="Brief description of the resource"
                    />
                  </div>
                  <div>
                    <Label htmlFor="tags">Tags (comma-separated)</Label>
                    <Input
                      id="tags"
                      value={formData.tags}
                      onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                      placeholder="tag1, tag2, tag3"
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit">{editingResource ? "Update" : "Add"} Resource</Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Tags</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {resources.map((resource) => (
                <TableRow key={resource.id}>
                  <TableCell className="font-medium">
                    <div>
                      <div>{resource.title}</div>
                      {resource.description && <div className="text-xs text-gray-500 mt-1">{resource.description}</div>}
                    </div>
                  </TableCell>
                  <TableCell>{resource.type}</TableCell>
                  <TableCell>{resource.category}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {resource.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {resource.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{resource.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      {resource.url && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={resource.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                      <Button size="sm" variant="outline" onClick={() => handleEdit(resource)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => handleDelete(resource.id)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            1.2 Vocational Training - EU Apprenticeship Schemes
          </CardTitle>
          <CardDescription>
            Existing VET apprenticeship programs across EU countries - reference for AI Skills Academy design
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Country</TableHead>
                <TableHead>Scheme Name</TableHead>
                <TableHead>Link</TableHead>
                <TableHead>Relevance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Germany</TableCell>
                <TableCell>Dual VET</TableCell>
                <TableCell>
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href="https://www.cedefop.europa.eu/en/tools/vet-toolkit-tackling-early-leaving/resources/dual-vet"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      CEDEFOP
                    </a>
                  </Button>
                </TableCell>
                <TableCell>
                  <Badge className="bg-red-100 text-red-800">High</Badge>
                  <span className="text-xs text-gray-500 ml-2">Model for AI apprenticeships</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Malta</TableCell>
                <TableCell>MCAST Apprenticeships</TableCell>
                <TableCell>
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href="https://www.cedefop.europa.eu/en/tools/vet-toolkit-tackling-early-leaving/resources/mcast-apprenticeships"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      CEDEFOP
                    </a>
                  </Button>
                </TableCell>
                <TableCell>
                  <Badge className="bg-yellow-100 text-yellow-800">Medium</Badge>
                  <span className="text-xs text-gray-500 ml-2">Small country example</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Italy</TableCell>
                <TableCell>
                  Apprenticeship for vocational qualification and diploma, upper secondary education diploma and high
                  technical specialisation certificate (Type 1)
                </TableCell>
                <TableCell>
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href="https://www.cedefop.europa.eu/en/tools/vet-toolkit-tackling-early-leaving/resources/apprenticeship-vocational-qualification-diploma-upper-secondary-education-diploma-high-technical-specialisation-certificate-type-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      CEDEFOP
                    </a>
                  </Button>
                </TableCell>
                <TableCell>
                  <Badge className="bg-yellow-100 text-yellow-800">Medium</Badge>
                  <span className="text-xs text-gray-500 ml-2">Technical specialisation</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Italy</TableCell>
                <TableCell>Higher education and research apprenticeship (Type 3)</TableCell>
                <TableCell>
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href="https://www.cedefop.europa.eu/en/tools/vet-toolkit-tackling-early-leaving/resources/higher-education-research-apprenticeship-type-3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      CEDEFOP
                    </a>
                  </Button>
                </TableCell>
                <TableCell>
                  <Badge className="bg-red-100 text-red-800">High</Badge>
                  <span className="text-xs text-gray-500 ml-2">Higher ed + research focus</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Greece</TableCell>
                <TableCell>EPAS apprenticeships</TableCell>
                <TableCell>
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href="https://www.cedefop.europa.eu/en/tools/vet-toolkit-tackling-early-leaving/resources/epas-apprenticeships"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      CEDEFOP
                    </a>
                  </Button>
                </TableCell>
                <TableCell>
                  <Badge className="bg-yellow-100 text-yellow-800">Medium</Badge>
                  <span className="text-xs text-gray-500 ml-2">Public sector model</span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">Key Insights for AI Skills Academy:</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• German Dual VET system provides excellent framework for industry-academia collaboration</li>
              <li>• Italian Type 3 apprenticeships show how to integrate higher education with research</li>
              <li>• Multiple countries have established legal frameworks for apprenticeships</li>
              <li>• CEDEFOP provides comprehensive documentation and best practices</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
