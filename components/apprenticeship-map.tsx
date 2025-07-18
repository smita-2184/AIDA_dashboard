"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, ExternalLink, Info } from "lucide-react"

export function ApprenticeshipMap() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Apprenticeship Schemes Map
          </CardTitle>
          <CardDescription>
            Interactive map showing apprenticeship schemes across Europe from the European Centre for the Development of Vocational Training (CEDEFOP).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Info Section */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="space-y-2">
                  <h4 className="font-medium text-blue-900">About this Map</h4>
                  <p className="text-sm text-blue-800">
                    This interactive map provides comprehensive information about apprenticeship schemes across European countries. 
                    It includes detailed scheme fiches, implementation details, and comparative analysis of different approaches 
                    to vocational education and training across the EU.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge variant="outline" className="text-xs">Interactive Map</Badge>
                    <Badge variant="outline" className="text-xs">CEDEFOP Database</Badge>
                    <Badge variant="outline" className="text-xs">EU-wide Coverage</Badge>
                    <Badge variant="outline" className="text-xs">Scheme Fiches</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map Interface */}
            <div className="rounded-lg border bg-white overflow-hidden">
              <div className="bg-gray-50 px-4 py-2 border-b">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">CEDEFOP Apprenticeship Schemes Map</span>
                  <a 
                    href="https://www.cedefop.europa.eu/en/tools/apprenticeship-schemes/scheme-fiches-map" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Open in new tab
                  </a>
                </div>
              </div>
              <div className="p-8">
                <div className="max-w-4xl mx-auto">
                  {/* Map Preview */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8 mb-8">
                    <div className="text-center space-y-6">
                      <div className="w-20 h-20 mx-auto bg-blue-600 rounded-full flex items-center justify-center">
                        <MapPin className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">European Apprenticeship Schemes</h3>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                          Explore comprehensive apprenticeship schemes across all EU member states, EEA countries, and candidate countries through CEDEFOP's interactive database.
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <a 
                          href="https://www.cedefop.europa.eu/en/tools/apprenticeship-schemes/scheme-fiches-map" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                          <ExternalLink className="w-5 h-5" />
                          Launch Interactive Map
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Country Coverage Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600 font-bold text-sm">27</span>
                        </div>
                        <h4 className="font-semibold text-gray-900">EU Member States</h4>
                      </div>
                      <p className="text-sm text-gray-600">Complete coverage of all European Union countries with detailed apprenticeship schemes.</p>
                    </div>
                    
                    <div className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-bold text-sm">3</span>
                        </div>
                        <h4 className="font-semibold text-gray-900">EEA Countries</h4>
                      </div>
                      <p className="text-sm text-gray-600">Iceland, Norway, and Switzerland included in the comprehensive database.</p>
                    </div>
                    
                    <div className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-purple-600 font-bold text-sm">∞</span>
                        </div>
                        <h4 className="font-semibold text-gray-900">Scheme Fiches</h4>
                      </div>
                      <p className="text-sm text-gray-600">Detailed documentation for each apprenticeship scheme with implementation details.</p>
                    </div>
                  </div>

                  {/* Quick Access Links */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Quick Access to CEDEFOP Resources</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <a 
                        href="https://www.cedefop.europa.eu/en/tools/apprenticeship-schemes" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-white rounded-lg border hover:border-blue-300 hover:shadow-sm transition-all"
                      >
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Apprenticeship Schemes</div>
                          <div className="text-sm text-gray-600">Main database portal</div>
                        </div>
                      </a>
                      
                      <a 
                        href="https://www.cedefop.europa.eu/en/tools/apprenticeship-schemes/country-fiches" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-white rounded-lg border hover:border-blue-300 hover:shadow-sm transition-all"
                      >
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <span className="text-green-600 font-bold">CF</span>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Country Fiches</div>
                          <div className="text-sm text-gray-600">Country-specific information</div>
                        </div>
                      </a>
                      
                      <a 
                        href="https://www.cedefop.europa.eu/en/tools/apprenticeship-schemes/comparison-tables" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-white rounded-lg border hover:border-blue-300 hover:shadow-sm transition-all"
                      >
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <span className="text-purple-600 font-bold">CT</span>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Comparison Tables</div>
                          <div className="text-sm text-gray-600">Cross-country analysis</div>
                        </div>
                      </a>
                      
                      <a 
                        href="https://www.cedefop.europa.eu/en/tools/apprenticeship-schemes/advanced-search" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-white rounded-lg border hover:border-blue-300 hover:shadow-sm transition-all"
                      >
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                          <span className="text-orange-600 font-bold">AS</span>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Advanced Search</div>
                          <div className="text-sm text-gray-600">Filter and find schemes</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardContent className="p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Interactive Features</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Click on countries to explore schemes</li>
                    <li>• Filter by scheme types and categories</li>
                    <li>• Access detailed scheme fiches</li>
                    <li>• Compare different approaches</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-emerald-50">
                <CardContent className="p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Data Coverage</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• All EU member states</li>
                    <li>• EEA countries</li>
                    <li>• Candidate countries</li>
                    <li>• Regular updates</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-violet-50">
                <CardContent className="p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Use Cases</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Policy development</li>
                    <li>• Best practice identification</li>
                    <li>• Cross-country learning</li>
                    <li>• Partnership building</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 