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
import { Plus, Edit, Trash2, Euro, TrendingUp, PieChart } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"

interface BudgetItem {
  id: string
  partner: string
  category: string
  description: string
  amount: number
  coFunding: number
  total: number
  status: string
}

export function BudgetTracker() {
  const [budgetItems, setBudgetItems] = useState<BudgetItem[]>([
    {
      id: "1",
      partner: "Technical University of Munich",
      category: "Personnel",
      description: "Research staff and project management",
      amount: 800000,
      coFunding: 800000,
      total: 1600000,
      status: "Estimated",
    },
    {
      id: "2",
      partner: "AI Startup Hub",
      category: "Personnel",
      description: "Development team and training specialists",
      amount: 400000,
      coFunding: 400000,
      total: 800000,
      status: "Estimated",
    },
    {
      id: "3",
      partner: "All Partners",
      category: "Travel",
      description: "Consortium meetings and conferences",
      amount: 50000,
      coFunding: 50000,
      total: 100000,
      status: "Estimated",
    },
  ])

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<BudgetItem | null>(null)
  const [formData, setFormData] = useState({
    partner: "",
    category: "",
    description: "",
    amount: "",
    coFunding: "",
    status: "",
  })

  const categories = [
    "Personnel",
    "Travel",
    "Equipment",
    "Consumables",
    "Subcontracting",
    "Other Direct Costs",
    "Indirect Costs",
  ]

  const partners = ["Technical University of Munich", "AI Startup Hub", "All Partners", "Lead Partner"]

  const statuses = ["Estimated", "Confirmed", "Approved", "Pending"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const amount = Number.parseFloat(formData.amount)
    const coFunding = Number.parseFloat(formData.coFunding)
    const budgetData = {
      ...formData,
      amount,
      coFunding,
      total: amount + coFunding,
    }

    if (editingItem) {
      setBudgetItems(
        budgetItems.map((item) => (item.id === editingItem.id ? { ...budgetData, id: editingItem.id } : item)),
      )
    } else {
      setBudgetItems([...budgetItems, { ...budgetData, id: Date.now().toString() }])
    }
    setIsDialogOpen(false)
    setEditingItem(null)
    setFormData({ partner: "", category: "", description: "", amount: "", coFunding: "", status: "" })
  }

  const handleEdit = (item: BudgetItem) => {
    setEditingItem(item)
    setFormData({
      ...item,
      amount: item.amount.toString(),
      coFunding: item.coFunding.toString(),
    })
    setIsDialogOpen(true)
  }

  const handleDelete = (id: string) => {
    setBudgetItems(budgetItems.filter((item) => item.id !== id))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-100 text-green-800"
      case "Estimated":
        return "bg-yellow-100 text-yellow-800"
      case "Approved":
        return "bg-blue-100 text-blue-800"
      case "Pending":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const totalEUFunding = budgetItems.reduce((sum, item) => sum + item.amount, 0)
  const totalCoFunding = budgetItems.reduce((sum, item) => sum + item.coFunding, 0)
  const totalBudget = budgetItems.reduce((sum, item) => sum + item.total, 0)
  const fundingRate = totalBudget > 0 ? (totalEUFunding / totalBudget) * 100 : 0

  const categoryBreakdown = categories
    .map((category) => {
      const categoryItems = budgetItems.filter((item) => item.category === category)
      const categoryTotal = categoryItems.reduce((sum, item) => sum + item.total, 0)
      return { category, total: categoryTotal, percentage: totalBudget > 0 ? (categoryTotal / totalBudget) * 100 : 0 }
    })
    .filter((item) => item.total > 0)

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <Euro className="w-4 h-4" />
              EU Funding
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">€{(totalEUFunding / 1000000).toFixed(1)}M</div>
            <p className="text-xs text-gray-600">of €7M available</p>
            <Progress value={(totalEUFunding / 7000000) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Co-Funding</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">€{(totalCoFunding / 1000000).toFixed(1)}M</div>
            <p className="text-xs text-gray-600">partner contribution</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Total Budget</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">€{(totalBudget / 1000000).toFixed(1)}M</div>
            <p className="text-xs text-gray-600">project total</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Funding Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{fundingRate.toFixed(0)}%</div>
            <p className="text-xs text-gray-600">target: 50%</p>
            <Progress value={fundingRate} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="w-5 h-5" />
              Budget by Category
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {categoryBreakdown.map((item) => (
                <div key={item.category} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">{item.category}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">€{(item.total / 1000).toFixed(0)}K</div>
                    <div className="text-xs text-gray-500">{item.percentage.toFixed(1)}%</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Budget Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Maximum EU funding:</span>
                <span className="font-medium">€7,000,000</span>
              </div>
              <div className="flex justify-between">
                <span>Required funding rate:</span>
                <span className="font-medium">50%</span>
              </div>
              <div className="flex justify-between">
                <span>Minimum co-funding:</span>
                <span className="font-medium">€7,000,000</span>
              </div>
              <div className="flex justify-between">
                <span>Project duration:</span>
                <span className="font-medium">3-4 years</span>
              </div>
              <div className="pt-2 border-t">
                <p className="text-xs text-gray-600">
                  Remember: Personnel costs typically represent 60-80% of total budget in research projects. Travel and
                  equipment should be justified and reasonable.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Euro className="w-5 h-5" />
                Budget Breakdown
              </CardTitle>
              <CardDescription>Detailed budget planning for all consortium partners</CardDescription>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  onClick={() => {
                    setEditingItem(null)
                    setFormData({ partner: "", category: "", description: "", amount: "", coFunding: "", status: "" })
                  }}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Budget Item
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{editingItem ? "Edit Budget Item" : "Add New Budget Item"}</DialogTitle>
                  <DialogDescription>Add or edit budget line item</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="partner">Partner</Label>
                      <Select
                        value={formData.partner}
                        onValueChange={(value) => setFormData({ ...formData, partner: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select partner" />
                        </SelectTrigger>
                        <SelectContent>
                          {partners.map((partner) => (
                            <SelectItem key={partner} value={partner}>
                              {partner}
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
                      <Label htmlFor="amount">EU Funding (€)</Label>
                      <Input
                        id="amount"
                        type="number"
                        value={formData.amount}
                        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                        placeholder="0"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="coFunding">Co-Funding (€)</Label>
                      <Input
                        id="coFunding"
                        type="number"
                        value={formData.coFunding}
                        onChange={(e) => setFormData({ ...formData, coFunding: e.target.value })}
                        placeholder="0"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="description">Description</Label>
                      <Input
                        id="description"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="Brief description of budget item"
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
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit">{editingItem ? "Update" : "Add"} Budget Item</Button>
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
                <TableHead>Partner</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>EU Funding</TableHead>
                <TableHead>Co-Funding</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {budgetItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.partner}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>€{item.amount.toLocaleString()}</TableCell>
                  <TableCell>€{item.coFunding.toLocaleString()}</TableCell>
                  <TableCell className="font-medium">€{item.total.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(item.status)}>{item.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" onClick={() => handleEdit(item)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => handleDelete(item.id)}>
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
