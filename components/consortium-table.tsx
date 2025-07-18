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
import { Plus, Edit, Trash2, Building2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface Partner {
  id: string
  name: string
  type: string
  country: string
  role: string
  status: string
  contact: string
  notes: string
}

export function ConsortiumTable() {
  const [partners, setPartners] = useState<Partner[]>([
    {
      id: "3",
      name: "University of Malta",
      type: "Higher Education Institution",
      country: "Malta",
      role: "AIDA Partner - Potential Collaborator",
      status: "Interested",
      contact: "contact@um.edu.mt",
      notes: "Part of AIDA consortium, ECHE certified, experience in academic-industrial partnerships",
    },
    {
      id: "4",
      name: "University of Turin",
      type: "Higher Education Institution",
      country: "Italy",
      role: "AIDA Partner - Potential Collaborator",
      status: "Interested",
      contact: "international@unito.it",
      notes: "AIDA consortium member, strong in digital education, Italian HEI with ECHE",
    },
    {
      id: "5",
      name: "Humboldt University Berlin",
      type: "Higher Education Institution",
      country: "Germany",
      role: "AIDA Partner - Potential Collaborator",
      status: "Interested",
      contact: "international@hu-berlin.de",
      notes: "AIDA consortium member, prestigious German university, AI research capabilities",
    },
    {
      id: "6",
      name: "Malta Chamber of Commerce",
      type: "Industry Partner (Large)",
      country: "Malta",
      role: "Industry Network Partner",
      status: "Contacted",
      contact: "info@maltachamber.org.mt",
      notes: "AIDA partner, represents SME ecosystem, business network access",
    },
    {
      id: "7",
      name: "IHK Berlin",
      type: "VET Institution",
      country: "Germany",
      role: "VET Partner",
      status: "Contacted",
      contact: "service@berlin.ihk.de",
      notes: "AIDA partner, German Chamber of Commerce, VET expertise, SME connections",
    },
  ])

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingPartner, setEditingPartner] = useState<Partner | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    country: "",
    role: "",
    status: "",
    contact: "",
    notes: "",
  })

  const partnerTypes = [
    "Higher Education Institution",
    "Industry Partner (SME)",
    "Industry Partner (Large)",
    "Research Organization",
    "VET Institution",
    "National/Regional Institution",
  ]

  const countries = [
    "Austria",
    "Belgium",
    "Bulgaria",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Estonia",
    "Finland",
    "France",
    "Germany",
    "Greece",
    "Hungary",
    "Ireland",
    "Italy",
    "Latvia",
    "Lithuania",
    "Luxembourg",
    "Malta",
    "Netherlands",
    "Poland",
    "Portugal",
    "Romania",
    "Slovakia",
    "Slovenia",
    "Spain",
    "Sweden",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingPartner) {
      setPartners(partners.map((p) => (p.id === editingPartner.id ? { ...formData, id: editingPartner.id } : p)))
    } else {
      setPartners([...partners, { ...formData, id: Date.now().toString() }])
    }
    setIsDialogOpen(false)
    setEditingPartner(null)
    setFormData({ name: "", type: "", country: "", role: "", status: "", contact: "", notes: "" })
  }

  const handleEdit = (partner: Partner) => {
    setEditingPartner(partner)
    setFormData(partner)
    setIsDialogOpen(true)
  }

  const handleDelete = (id: string) => {
    setPartners(partners.filter((p) => p.id !== id))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-100 text-green-800"
      case "Interested":
        return "bg-yellow-100 text-yellow-800"
      case "Contacted":
        return "bg-blue-100 text-blue-800"
      case "Declined":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTypeRequirements = () => {
    const typeCounts = partners.reduce(
      (acc, partner) => {
        acc[partner.type] = (acc[partner.type] || 0) + 1
        return acc
      },
      {} as Record<string, number>,
    )

    return [
      { type: "Higher Education Institution", current: typeCounts["Higher Education Institution"] || 0, required: 2 },
      {
        type: "Industry Partner",
        current: (typeCounts["Industry Partner (SME)"] || 0) + (typeCounts["Industry Partner (Large)"] || 0),
        required: 2,
      },
      { type: "Research Organization", current: typeCounts["Research Organization"] || 0, required: 1 },
      { type: "VET Institution", current: typeCounts["VET Institution"] || 0, required: 1 },
    ]
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {getTypeRequirements().map((req) => (
          <Card key={req.type}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">{req.type}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {req.current}/{req.required}
              </div>
              <Badge variant={req.current >= req.required ? "default" : "secondary"} className="text-xs">
                {req.current >= req.required ? "Met" : "Needed"}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                Consortium Partners
              </CardTitle>
              <CardDescription>Manage your consortium partners and track requirements</CardDescription>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  onClick={() => {
                    setEditingPartner(null)
                    setFormData({ name: "", type: "", country: "", role: "", status: "", contact: "", notes: "" })
                  }}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Partner
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{editingPartner ? "Edit Partner" : "Add New Partner"}</DialogTitle>
                  <DialogDescription>Add or edit consortium partner information</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Organization Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="type">Partner Type</Label>
                      <Select
                        value={formData.type}
                        onValueChange={(value) => setFormData({ ...formData, type: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          {partnerTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Select
                        value={formData.country}
                        onValueChange={(value) => setFormData({ ...formData, country: value })}
                      >
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
                      <Label htmlFor="role">Role in Project</Label>
                      <Input
                        id="role"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        placeholder="e.g., Lead Partner, WP Leader"
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
                          <SelectItem value="Confirmed">Confirmed</SelectItem>
                          <SelectItem value="Interested">Interested</SelectItem>
                          <SelectItem value="Contacted">Contacted</SelectItem>
                          <SelectItem value="Declined">Declined</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="contact">Contact Email</Label>
                      <Input
                        id="contact"
                        type="email"
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="notes">Notes</Label>
                    <Input
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Additional information, expertise, etc."
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit">{editingPartner ? "Update" : "Add"} Partner</Button>
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
                <TableHead>Organization</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {partners.map((partner) => (
                <TableRow key={partner.id}>
                  <TableCell className="font-medium">{partner.name}</TableCell>
                  <TableCell>{partner.type}</TableCell>
                  <TableCell>{partner.country}</TableCell>
                  <TableCell>{partner.role}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(partner.status)}>{partner.status}</Badge>
                  </TableCell>
                  <TableCell>{partner.contact}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" onClick={() => handleEdit(partner)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => handleDelete(partner.id)}>
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
    </div>
  )
}
