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
import { Plus, Edit, Trash2, Calendar, Clock } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"

interface Milestone {
  id: string
  title: string
  type: string
  date: string
  status: string
  description: string
  responsible: string
  priority: string
}

export function TimelineTable() {
  const [milestones, setMilestones] = useState<Milestone[]>([
    {
      id: "1",
      title: "Call Opens",
      type: "Official Deadline",
      date: "2025-04-15",
      status: "Upcoming",
      description: "Official opening of the call for proposals",
      responsible: "European Commission",
      priority: "High",
    },
    {
      id: "2",
      title: "Consortium Formation Complete",
      type: "Internal Milestone",
      date: "2025-06-01",
      status: "Planned",
      description: "All partners confirmed and agreements signed",
      responsible: "Lead Partner",
      priority: "High",
    },
    {
      id: "3",
      title: "First Draft Complete",
      type: "Internal Milestone",
      date: "2025-07-15",
      status: "Planned",
      description: "Complete first draft of proposal ready for review",
      responsible: "Writing Team",
      priority: "High",
    },
    {
      id: "4",
      title: "Final Review Period",
      type: "Internal Milestone",
      date: "2025-08-15",
      status: "Planned",
      description: "Final review and polishing of proposal",
      responsible: "All Partners",
      priority: "Medium",
    },
    {
      id: "5",
      title: "Submission Deadline",
      type: "Official Deadline",
      date: "2025-09-02",
      status: "Critical",
      description: "Final submission deadline (17:00 CET)",
      responsible: "Lead Partner",
      priority: "Critical",
    },
    {
      id: "6",
      title: "Evaluation Results",
      type: "Official Deadline",
      date: "2025-11-30",
      status: "Awaiting",
      description: "Expected announcement of evaluation results",
      responsible: "European Commission",
      priority: "High",
    },
  ])

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingMilestone, setEditingMilestone] = useState<Milestone | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    date: "",
    status: "",
    description: "",
    responsible: "",
    priority: "",
  })

  const milestoneTypes = [
    "Official Deadline",
    "Internal Milestone",
    "Partner Meeting",
    "Review Deadline",
    "Submission",
    "Event",
  ]

  const statuses = ["Completed", "In Progress", "Planned", "Upcoming", "Critical", "Awaiting", "Overdue"]

  const priorities = ["Critical", "High", "Medium", "Low"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingMilestone) {
      setMilestones(
        milestones.map((m) => (m.id === editingMilestone.id ? { ...formData, id: editingMilestone.id } : m)),
      )
    } else {
      setMilestones([...milestones, { ...formData, id: Date.now().toString() }])
    }
    setIsDialogOpen(false)
    setEditingMilestone(null)
    setFormData({ title: "", type: "", date: "", status: "", description: "", responsible: "", priority: "" })
  }

  const handleEdit = (milestone: Milestone) => {
    setEditingMilestone(milestone)
    setFormData(milestone)
    setIsDialogOpen(true)
  }

  const handleDelete = (id: string) => {
    setMilestones(milestones.filter((m) => m.id !== id))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800"
      case "In Progress":
        return "bg-blue-100 text-blue-800"
      case "Planned":
        return "bg-gray-100 text-gray-800"
      case "Upcoming":
        return "bg-yellow-100 text-yellow-800"
      case "Critical":
        return "bg-red-100 text-red-800"
      case "Awaiting":
        return "bg-purple-100 text-purple-800"
      case "Overdue":
        return "bg-red-200 text-red-900"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critical":
        return "bg-red-100 text-red-800"
      case "High":
        return "bg-orange-100 text-orange-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "Low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getDaysUntil = (date: string) => {
    const today = new Date()
    const targetDate = new Date(date)
    const diffTime = targetDate.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const sortedMilestones = [...milestones].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Days to Submission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{getDaysUntil("2025-09-02")}</div>
            <p className="text-xs text-gray-600">days remaining</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {milestones.filter((m) => m.status === "Completed").length}
            </div>
            <p className="text-xs text-gray-600">milestones</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">In Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              {milestones.filter((m) => m.status === "In Progress").length}
            </div>
            <p className="text-xs text-gray-600">milestones</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Critical</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {milestones.filter((m) => m.priority === "Critical" || m.status === "Critical").length}
            </div>
            <p className="text-xs text-gray-600">items</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Project Timeline
              </CardTitle>
              <CardDescription>Track all important dates and milestones for your proposal</CardDescription>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  onClick={() => {
                    setEditingMilestone(null)
                    setFormData({
                      title: "",
                      type: "",
                      date: "",
                      status: "",
                      description: "",
                      responsible: "",
                      priority: "",
                    })
                  }}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Milestone
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{editingMilestone ? "Edit Milestone" : "Add New Milestone"}</DialogTitle>
                  <DialogDescription>Add or edit timeline milestone</DialogDescription>
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
                          {milestoneTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="date">Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="status">Status</Label>
                      <Select
                        value={formData.status}
                        onValueChange={(value) => setFormData({ ...formData, status: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          {statuses.map((status) => (
                            <SelectItem key={status} value={status}>
                              {status}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="responsible">Responsible</Label>
                      <Input
                        id="responsible"
                        value={formData.responsible}
                        onChange={(e) => setFormData({ ...formData, responsible: e.target.value })}
                        placeholder="Who is responsible for this milestone"
                      />
                    </div>
                    <div>
                      <Label htmlFor="priority">Priority</Label>
                      <Select
                        value={formData.priority}
                        onValueChange={(value) => setFormData({ ...formData, priority: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          {priorities.map((priority) => (
                            <SelectItem key={priority} value={priority}>
                              {priority}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Detailed description of the milestone"
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit">{editingMilestone ? "Update" : "Add"} Milestone</Button>
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
                <TableHead>Milestone</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Days Until</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Responsible</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedMilestones.map((milestone) => {
                const daysUntil = getDaysUntil(milestone.date)
                return (
                  <TableRow key={milestone.id}>
                    <TableCell className="font-medium">
                      <div>
                        <div>{milestone.title}</div>
                        {milestone.description && (
                          <div className="text-xs text-gray-500 mt-1">{milestone.description}</div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>{milestone.type}</TableCell>
                    <TableCell>{new Date(milestone.date).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <span
                        className={
                          daysUntil < 0 ? "text-red-600" : daysUntil < 30 ? "text-orange-600" : "text-gray-600"
                        }
                      >
                        {daysUntil < 0 ? `${Math.abs(daysUntil)} days ago` : `${daysUntil} days`}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(milestone.status)}>{milestone.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getPriorityColor(milestone.priority)}>{milestone.priority}</Badge>
                    </TableCell>
                    <TableCell>{milestone.responsible}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => handleEdit(milestone)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleDelete(milestone.id)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
